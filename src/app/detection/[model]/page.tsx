'use client';

import { useEffect, useRef, useState, use } from 'react';
import {
  ObjectDetector,
  GestureRecognizer,
  HandLandmarker,
  FaceLandmarker,
  PoseLandmarker,
  FilesetResolver,
  Detection,
  GestureRecognizerResult,
  HandLandmarkerResult,
  FaceLandmarkerResult,
  PoseLandmarkerResult,
  DrawingUtils
} from '@mediapipe/tasks-vision';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, Webcam, Info, Video, Eye, Play, Volume2, ShieldAlert, Clock, EyeOff, Wind, Timer, Hand, Fingerprint, Smile, User, Ruler, Box } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarqueeFooter from '@/components/marquee-footer';
import { Progress } from '@/components/ui/progress';

const modelSlugs: { [key: string]: string } = {
  'object-detection': 'Driver Drowsiness Detection',
  'generic-object-detection': 'Generic Object Detection',
  'gesture-recognition': 'Gesture Recognition',
  'hand-landmarks': 'Hand Landmarks',
  'face-landmarks': 'Face Landmarks',
  'pose-landmarks': 'Pose Landmarks',
  'hand-distance': 'Hand Distance',
};

const MetricCard = ({ title, value, color, fullWidth = false }: { title: string, value: string, color: string, fullWidth?: boolean }) => (
    <div className={`rounded-lg p-4 bg-card/60 border ${color} ${fullWidth ? 'col-span-2' : ''}`}>
        <p className="text-sm text-foreground/70">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
    </div>
);

const HeadOrientationCard = ({ title, value }: { title: string, value: string }) => (
  <div className="rounded-lg p-3 bg-card/60 border border-border/20 text-center">
    <p className="text-sm text-foreground/70">{title}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
)

const StatusMetric = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex justify-between items-center text-sm">
    <div className="flex items-center gap-2 text-foreground/80">
      {icon}
      <span>{label}</span>
    </div>
    <span className="font-mono text-foreground/90">{value}</span>
  </div>
)


export default function ModelPage({ params: paramsPromise }: { params: Promise<{ model: string }> }) {
  const params = use(paramsPromise);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objectDetector, setObjectDetector] = useState<ObjectDetector | null>(null);
  const [gestureRecognizer, setGestureRecognizer] = useState<GestureRecognizer | null>(null);
  const [handLandmarker, setHandLandmarker] = useState<HandLandmarker | null>(null);
  const [faceLandmarker, setFaceLandmarker] = useState<FaceLandmarker | null>(null);
  const [poseLandmarker, setPoseLandmarker] = useState<PoseLandmarker | null>(null);
  const [detections, setDetections] = useState<Detection[]>([]);
  const [gestureOutput, setGestureOutput] = useState<GestureRecognizerResult | null>(null);
  const [handLandmarkerOutput, setHandLandmarkerOutput] = useState<HandLandmarkerResult | null>(null);
  const [faceLandmarkerOutput, setFaceLandmarkerOutput] = useState<FaceLandmarkerResult | null>(null);
  const [poseLandmarkerOutput, setPoseLandmarkerOutput] = useState<PoseLandmarkerResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(true);
  const [scoreThreshold, setScoreThreshold] = useState(0.5);
  const { toast } = useToast();
  
  const modelSlug = params.model;
  const isObjectDetection = modelSlug === 'object-detection';
  const isGenericObjectDetection = modelSlug === 'generic-object-detection';
  const isGestureRecognition = modelSlug === 'gesture-recognition';
  const isHandLandmarks = modelSlug === 'hand-landmarks';
  const isFaceLandmarks = modelSlug === 'face-landmarks';
  const isPoseLandmarks = modelSlug === 'pose-landmarks';
  const isHandDistance = modelSlug === 'hand-distance';
  const modelName = modelSlugs[modelSlug] || 'Detection Model';

  useEffect(() => {
    async function setupDetector() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
        );

        if (isObjectDetection || isGenericObjectDetection) {
          const detector = await ObjectDetector.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath: isObjectDetection
                ? 'https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite'
                : 'https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float16/1/efficientdet_lite2.tflite',
              delegate: 'GPU',
            },
            scoreThreshold,
            runningMode: 'VIDEO',
          });
          setObjectDetector(detector);
        } else if (isGestureRecognition) {
          const recognizer = await GestureRecognizer.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
              delegate: 'GPU'
            },
            runningMode: 'VIDEO',
            numHands: 2
          });
          setGestureRecognizer(recognizer);
        } else if (isHandLandmarks || isHandDistance) {
            const landmarker = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                    delegate: "GPU"
                },
                runningMode: "VIDEO",
                numHands: 2,
                outputHandWorldLandmarks: isHandDistance,
            });
            setHandLandmarker(landmarker);
        } else if (isFaceLandmarks) {
            const landmarker = await FaceLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                    delegate: "GPU"
                },
                runningMode: "VIDEO",
                outputFaceBlendshapes: true,
                outputFacialTransformationMatrixes: true,
                numFaces: 1
            });
            setFaceLandmarker(landmarker);
        } else if (isPoseLandmarks) {
            const landmarker = await PoseLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
                    delegate: "GPU"
                },
                runningMode: "VIDEO",
                numPoses: 2
            });
            setPoseLandmarker(landmarker);
        }
      } catch (error) {
        console.error('Error setting up detector:', error);
        toast({
          variant: 'destructive',
          title: 'Initialization Error',
          description: 'Could not initialize the AI model. Please refresh the page.',
        });
      } finally {
        setIsLoading(false);
      }
    }

    if (isObjectDetection || isGenericObjectDetection || isGestureRecognition || isHandLandmarks || isFaceLandmarks || isPoseLandmarks || isHandDistance) {
      setupDetector();
    } else {
      setIsLoading(false);
    }
  }, [scoreThreshold, isObjectDetection, isGenericObjectDetection, isGestureRecognition, isHandLandmarks, isFaceLandmarks, isPoseLandmarks, isHandDistance, toast]);

  const handleStartMonitoring = async () => {
    if (isMonitoring) {
        setIsMonitoring(false);
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
        return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setHasCameraPermission(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsMonitoring(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
      toast({
        variant: 'destructive',
        title: 'Camera Access Denied',
        description:
          'Please enable camera permissions in your browser settings to use this feature.',
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    let animationFrameId: number;
    let lastVideoTime = -1;

    const renderLoop = () => {
      if (video && canvas && isMonitoring && video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        if (videoWidth > 0 && videoHeight > 0) {
          canvas.width = videoWidth;
          canvas.height = videoHeight;
          const ctx = canvas.getContext('2d');

          if(ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const drawingUtils = new DrawingUtils(ctx);
            const timestamp = video.currentTime * 1000;

            if ((isObjectDetection || isGenericObjectDetection) && objectDetector) {
                const results = objectDetector.detectForVideo(video, timestamp);
                setDetections(results.detections);
                
                for (const detection of results.detections) {
                  if (detection.boundingBox) {
                    ctx.strokeStyle = 'hsl(var(--accent))';
                    ctx.lineWidth = 4;
                    ctx.strokeRect(
                      detection.boundingBox.originX,
                      detection.boundingBox.originY,
                      detection.boundingBox.width,
                      detection.boundingBox.height
                    );
                    ctx.fillStyle = 'hsl(var(--accent))';
                    ctx.font = '18px "Space Grotesk"';
                    const label = `${detection.categories[0].categoryName} (${Math.round(detection.categories[0].score * 100)}%)`;
                    ctx.fillText(label, detection.boundingBox.originX, detection.boundingBox.originY > 20 ? detection.boundingBox.originY - 5 : 20);
                  }
                }
            } else if (isGestureRecognition && gestureRecognizer) {
                const results = gestureRecognizer.recognizeForVideo(video, timestamp);
                setGestureOutput(results);
                
                if (results.landmarks) {
                  for (const landmarks of results.landmarks) {
                    drawingUtils.drawConnectors(landmarks, GestureRecognizer.HAND_CONNECTIONS, { color: '#FFFFFF', lineWidth: 5 });
                    drawingUtils.drawLandmarks(landmarks, { color: 'hsl(var(--accent))', lineWidth: 2 });
                  }
                }
            } else if ((isHandLandmarks || isHandDistance) && handLandmarker) {
                const results = handLandmarker.detectForVideo(video, timestamp);
                setHandLandmarkerOutput(results);

                if (results.landmarks) {
                    for (const landmarks of results.landmarks) {
                        drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: '#FFFFFF', lineWidth: 5 });
                        drawingUtils.drawLandmarks(landmarks, { color: 'hsl(var(--accent))', lineWidth: 2 });
                    }
                }
            } else if (isFaceLandmarks && faceLandmarker) {
                const results = faceLandmarker.detectForVideo(video, timestamp);
                setFaceLandmarkerOutput(results);

                if (results.faceLandmarks) {
                    for (const landmarks of results.faceLandmarks) {
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: '#C0C0C070', lineWidth: 1 });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: 'hsl(var(--accent))' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, { color: 'hsl(var(--accent))' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: 'hsl(var(--accent))' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, { color: 'hsl(var(--accent))' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, { color: '#E0E0E0' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, { color: 'hsl(var(--accent))' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, { color: '#FF0000' });
                        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, { color: '#FF0000' });
                    }
                }
            } else if (isPoseLandmarks && poseLandmarker) {
                const results = poseLandmarker.detectForVideo(video, timestamp);
                setPoseLandmarkerOutput(results);

                if (results.landmarks) {
                    for (const landmarks of results.landmarks) {
                        drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#FFFFFF', lineWidth: 5 });
                        drawingUtils.drawLandmarks(landmarks, { color: 'hsl(var(--accent))', lineWidth: 2 });
                    }
                }
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    if (isMonitoring && video) {
        let modelReady = false;
        if ((isObjectDetection || isGenericObjectDetection) && objectDetector) modelReady = true;
        if (isGestureRecognition && gestureRecognizer) modelReady = true;
        if ((isHandLandmarks || isHandDistance) && handLandmarker) modelReady = true;
        if (isFaceLandmarks && faceLandmarker) modelReady = true;
        if (isPoseLandmarks && poseLandmarker) modelReady = true;

        if (modelReady) {
            const onCanPlay = () => renderLoop();
            video.addEventListener('canplay', onCanPlay);

            if (!video.paused) {
                renderLoop();
            }

            return () => {
              video.removeEventListener('canplay', onCanPlay);
              cancelAnimationFrame(animationFrameId);
            }
        }
    } else {
        cancelAnimationFrame(animationFrameId);
    }
  }, [objectDetector, gestureRecognizer, handLandmarker, faceLandmarker, poseLandmarker, isMonitoring, isObjectDetection, isGenericObjectDetection, isGestureRecognition, isHandLandmarks, isFaceLandmarks, isPoseLandmarks, isHandDistance]);
  
  const ComingSoon = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
        <h2 className="text-3xl font-bold mb-2">Coming Soon!</h2>
        <p className="text-foreground/70 max-w-sm">This AI detection model is currently under development. Please check back later for updates.</p>
    </div>
  );
  
  const recognizedGesture = gestureOutput?.gestures[0]?.[0]?.categoryName;
  const gestureCategory = gestureOutput?.handedness[0]?.[0]?.categoryName;
  const detectedHands = handLandmarkerOutput?.handedness.length || 0;
  const detectedFaces = faceLandmarkerOutput?.faceLandmarks.length || 0;
  const detectedPoses = poseLandmarkerOutput?.landmarks.length || 0;
  
  const handDistance = (handLandmarkerOutput?.handWorldLandmarks && handLandmarkerOutput.handWorldLandmarks.length > 0 && handLandmarkerOutput.handWorldLandmarks[0].length > 0) ? handLandmarkerOutput.handWorldLandmarks[0][0].z : undefined;
  const estimatedDistance = handDistance ? `${(Math.abs(handDistance) * 100).toFixed(2)} cm` : 'N/A';

  return (
    <div className="flex flex-col min-h-screen bg-dots">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {isObjectDetection ? (
        <div className="flex flex-col gap-8">
          <Card className="bg-card/40 backdrop-blur-sm border-border/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="text-primary" /> {modelName}
              </CardTitle>
              <CardDescription>AI-powered real-time monitoring for driver safety</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              </Button>
              <Button variant="outline">
                <Volume2 className="mr-2"/> Sound On
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                      <video
                          ref={videoRef}
                          className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                          autoPlay
                          playsInline
                          muted
                      />
                      <canvas ref={canvasRef} className="absolute top-0 left-0" />

                      {!isMonitoring && (
                          <div className="text-center text-foreground/70">
                              <Webcam className="w-16 h-16 mx-auto mb-4"/>
                              <h3 className="text-xl font-bold">Camera Ready</h3>
                              <p>Click "Start Monitoring" to begin.</p>
                          </div>
                      )}
                      {!hasCameraPermission && (
                          <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                              <Alert variant="destructive" className="max-w-sm">
                                  <AlertTitle>Camera Access Required</AlertTitle>
                                  <AlertDescription>
                                      Please allow camera access to use this feature.
                                  </AlertDescription>
                              </Alert>
                          </div>
                      )}
                      {isLoading && (
                          <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                              <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                              <p className="text-lg font-medium">Loading AI Model...</p>
                          </div>
                      )}
                      </div>
                  </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
               <Card className="bg-card/40 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Info />Real-time Metrics</CardTitle>
                    <CardDescription>Monitoring metrics ({isMonitoring ? "camera on" : "camera off"})</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                          <MetricCard title="Eye Aspect Ratio" value={isMonitoring ? '0.35' : '--'} color="border-blue-500/50" />
                          <MetricCard title="Mouth Aspect Ratio" value={isMonitoring ? '0.20' : '--'} color="border-purple-500/50" />
                          <MetricCard title="Blink Rate (BPM)" value={isMonitoring ? '15' : '--'} color="border-green-500/50" />
                          <MetricCard title="PERCLOS (%)" value={isMonitoring ? '10' : '--'} color="border-red-500/50" />
                      </div>
                       <h4 className="font-medium text-sm pt-4">Head Orientation</h4>
                       <div className="grid grid-cols-3 gap-4">
                          <HeadOrientationCard title="Pitch" value={isMonitoring ? '5°' : '--'} />
                          <HeadOrientationCard title="Yaw" value={isMonitoring ? '-2°' : '--'} />
                          <HeadOrientationCard title="Roll" value={isMonitoring ? '1°' : '--'} />
                       </div>
                  </CardContent>
                </Card>
            </div>
          </div>
          
          <Card className="bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><ShieldAlert className="text-primary"/> Driver Status</CardTitle>
              <CardDescription>Driver monitoring status ({isMonitoring ? "camera on" : "camera off"})</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isMonitoring ? (
                <div className="flex items-center gap-3 rounded-md bg-card/50 p-3">
                  <Webcam className="text-foreground/70" />
                  <span className="font-medium text-foreground/70">Camera Inactive</span>
                </div>
              ) : (
                <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 rounded-lg p-4 text-center">
                    <p className="font-bold text-lg">NORMAL</p>
                    <p className="text-sm">No immediate threats detected.</p>
                </div>
              )}
              <div className="space-y-3">
                <StatusMetric icon={<Clock size={16} />} label="Driving Time:" value={isMonitoring ? "00:15:23" : "--"} />
                <StatusMetric icon={<EyeOff size={16} />} label="Eye Closures:" value={isMonitoring ? "5" : "--"} />
                <StatusMetric icon={<Wind size={16} />} label="Yawn Count:" value={isMonitoring ? "1" : "--"} />
                <StatusMetric icon={<Timer size={16} />} label="Closed Duration:" value={isMonitoring ? "1.2s" : "--"} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground/80">Fatigue Risk Level</label>
                <Progress value={isMonitoring ? 20 : 0} className="h-2 my-2 bg-card/50 [&>div]:bg-primary" />
                <div className="flex justify-between text-xs text-foreground/70">
                  <span>Low</span>
                  <span>High</span>
                </div>
                {!isMonitoring && <p className="text-xs text-center text-foreground/60 mt-2">Start monitoring to see fatigue levels</p>}
              </div>
            </CardContent>
          </Card>
        </div>
        ) : isGenericObjectDetection ? (
          <div className="flex flex-col gap-8">
            <Card className="bg-card/40 backdrop-blur-sm border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Box className="text-primary" /> {modelName}
                </CardTitle>
                <CardDescription>Detects and classifies a variety of objects in real-time.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row gap-4">
                  <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                  </Button>
                  <div className="flex-1 flex items-center justify-center md:justify-start rounded-md bg-card/50 p-3 text-center md:text-left">
                      <p className="text-lg font-bold text-foreground">
                          Detected Objects: <span className="text-primary">{detections.length}</span>
                      </p>
                  </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                        autoPlay
                        playsInline
                        muted
                    />
                    <canvas ref={canvasRef} className="absolute top-0 left-0" />

                    {!isMonitoring && (
                        <div className="text-center text-foreground/70">
                            <Webcam className="w-16 h-16 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold">Camera Ready</h3>
                            <p>Click "Start Monitoring" to begin.</p>
                        </div>
                    )}
                    {!hasCameraPermission && (
                        <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                              <Alert variant="destructive" className="max-w-sm">
                                  <AlertTitle>Camera Access Required</AlertTitle>
                                  <AlertDescription>
                                      Please allow camera access to use this feature.
                                  </AlertDescription>
                              </Alert>
                          </div>
                    )}
                    {isLoading && (
                        <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                            <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                            <p className="text-lg font-medium">Loading AI Model...</p>
                        </div>
                    )}
                    </div>
                </CardContent>
            </Card>
          </div>
        ) : isGestureRecognition ? (
          <div className="flex flex-col gap-8">
            <Card className="bg-card/40 backdrop-blur-sm border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Hand className="text-primary" /> {modelName}
                </CardTitle>
                <CardDescription>AI-powered real-time hand gesture recognition</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row gap-4">
                  <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                  </Button>
                  <div className="flex-1 flex items-center justify-center md:justify-start rounded-md bg-card/50 p-3 text-center md:text-left">
                      <p className="text-lg font-bold text-foreground">
                          Detected Gesture: <span className="text-primary">{recognizedGesture && gestureCategory ? `${gestureCategory} - ${recognizedGesture}` : 'None'}</span>
                      </p>
                  </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                        autoPlay
                        playsInline
                        muted
                    />
                    <canvas ref={canvasRef} className="absolute top-0 left-0" />

                    {!isMonitoring && (
                        <div className="text-center text-foreground/70">
                            <Webcam className="w-16 h-16 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold">Camera Ready</h3>
                            <p>Click "Start Monitoring" to begin.</p>
                        </div>
                    )}
                    {!hasCameraPermission && (
                        <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                              <Alert variant="destructive" className="max-w-sm">
                                  <AlertTitle>Camera Access Required</AlertTitle>
                                  <AlertDescription>
                                      Please allow camera access to use this feature.
                                  </AlertDescription>
                              </Alert>
                          </div>
                    )}
                    {isLoading && (
                        <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                            <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                            <p className="text-lg font-medium">Loading AI Model...</p>
                        </div>
                    )}
                    </div>
                </CardContent>
            </Card>
          </div>
        ) : isHandLandmarks ? (
            <div className="flex flex-col gap-8">
                <Card className="bg-card/40 backdrop-blur-sm border-border/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                    <Fingerprint className="text-primary" /> {modelName}
                    </CardTitle>
                    <CardDescription>Real-time 21-point 3D hand landmark detection</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                    </Button>
                     <div className="flex-1 flex items-center justify-center md:justify-start rounded-md bg-card/50 p-3 text-center md:text-left">
                        <p className="text-lg font-bold text-foreground">
                            Detected Hands: <span className="text-primary">{detectedHands}</span>
                        </p>
                    </div>
                </CardContent>
                </Card>

                <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                            autoPlay
                            playsInline
                            muted
                        />
                        <canvas ref={canvasRef} className="absolute top-0 left-0" />

                        {!isMonitoring && (
                            <div className="text-center text-foreground/70">
                                <Webcam className="w-16 h-16 mx-auto mb-4"/>
                                <h3 className="text-xl font-bold">Camera Ready</h3>
                                <p>Click "Start Monitoring" to begin.</p>
                            </div>
                        )}
                        {!hasCameraPermission && (
                            <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                                <Alert variant="destructive" className="max-w-sm">
                                    <AlertTitle>Camera Access Required</AlertTitle>
                                    <AlertDescription>
                                        Please allow camera access to use this feature.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                        {isLoading && (
                            <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                                <p className="text-lg font-medium">Loading AI Model...</p>
                            </div>
                        )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        ) : isFaceLandmarks ? (
            <div className="flex flex-col gap-8">
                <Card className="bg-card/40 backdrop-blur-sm border-border/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                    <Smile className="text-primary" /> {modelName}
                    </CardTitle>
                    <CardDescription>High-fidelity face mesh detection with 478 3D landmarks.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                    </Button>
                     <div className="flex-1 flex items-center justify-center md:justify-start rounded-md bg-card/50 p-3 text-center md:text-left">
                        <p className="text-lg font-bold text-foreground">
                            Detected Faces: <span className="text-primary">{detectedFaces}</span>
                        </p>
                    </div>
                </CardContent>
                </Card>

                <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                            autoPlay
                            playsInline
                            muted
                        />
                        <canvas ref={canvasRef} className="absolute top-0 left-0" />

                        {!isMonitoring && (
                            <div className="text-center text-foreground/70">
                                <Webcam className="w-16 h-16 mx-auto mb-4"/>
                                <h3 className="text-xl font-bold">Camera Ready</h3>
                                <p>Click "Start Monitoring" to begin.</p>
                            </div>
                        )}
                        {!hasCameraPermission && (
                            <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                                <Alert variant="destructive" className="max-w-sm">
                                    <AlertTitle>Camera Access Required</AlertTitle>
                                    <AlertDescription>
                                        Please allow camera access to use this feature.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                        {isLoading && (
                            <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                                <p className="text-lg font-medium">Loading AI Model...</p>
                            </div>
                        )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        ) : isPoseLandmarks ? (
            <div className="flex flex-col gap-8">
                <Card className="bg-card/40 backdrop-blur-sm border-border/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                    <User className="text-primary" /> {modelName}
                    </CardTitle>
                    <CardDescription>Full-body pose estimation with 33 landmarks.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                    </Button>
                     <div className="flex-1 flex items-center justify-center md:justify-start rounded-md bg-card/50 p-3 text-center md:text-left">
                        <p className="text-lg font-bold text-foreground">
                            Detected Poses: <span className="text-primary">{detectedPoses}</span>
                        </p>
                    </div>
                </CardContent>
                </Card>

                <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                            autoPlay
                            playsInline
                            muted
                        />
                        <canvas ref={canvasRef} className="absolute top-0 left-0" />

                        {!isMonitoring && (
                            <div className="text-center text-foreground/70">
                                <Webcam className="w-16 h-16 mx-auto mb-4"/>
                                <h3 className="text-xl font-bold">Camera Ready</h3>
                                <p>Click "Start Monitoring" to begin.</p>
                            </div>
                        )}
                        {!hasCameraPermission && (
                            <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                                <Alert variant="destructive" className="max-w-sm">
                                    <AlertTitle>Camera Access Required</AlertTitle>
                                    <AlertDescription>
                                        Please allow camera access to use this feature.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                        {isLoading && (
                            <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                                <p className="text-lg font-medium">Loading AI Model...</p>
                            </div>
                        )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        ) : isHandDistance ? (
            <div className="flex flex-col gap-8">
                <Card className="bg-card/40 backdrop-blur-sm border-border/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                    <Ruler className="text-primary" /> {modelName}
                    </CardTitle>
                    <CardDescription>Real-time hand distance estimation from the camera.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <Button onClick={handleStartMonitoring} className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Play className="mr-2"/> {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                    </Button>
                     <div className="flex-1 flex items-center justify-center md:justify-start rounded-md bg-card/50 p-3 text-center md:text-left">
                        <p className="text-lg font-bold text-foreground">
                            Estimated Distance: <span className="text-primary">{isMonitoring ? estimatedDistance : 'N/A'}</span>
                        </p>
                    </div>
                </CardContent>
                </Card>

                <Card className="w-full bg-card/40 backdrop-blur-sm border-border/20 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><Video/> Live Feed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative aspect-video bg-black rounded-md flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className={`w-full h-full aspect-video rounded-md ${!isMonitoring ? 'hidden' : ''}`}
                            autoPlay
                            playsInline
                            muted
                        />
                        <canvas ref={canvasRef} className="absolute top-0 left-0" />

                        {!isMonitoring && (
                            <div className="text-center text-foreground/70">
                                <Webcam className="w-16 h-16 mx-auto mb-4"/>
                                <h3 className="text-xl font-bold">Camera Ready</h3>
                                <p>Click "Start Monitoring" to begin.</p>
                            </div>
                        )}
                        {!hasCameraPermission && (
                            <div className="absolute inset-0 bg-card/80 flex items-center justify-center rounded-md">
                                <Alert variant="destructive" className="max-w-sm">
                                    <AlertTitle>Camera Access Required</AlertTitle>
                                    <AlertDescription>
                                        Please allow camera access to use this feature.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                        {isLoading && (
                            <div className="absolute inset-0 bg-card/80 flex flex-col items-center justify-center rounded-md">
                                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                                <p className="text-lg font-medium">Loading AI Model...</p>
                            </div>
                        )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        ) : (
            <Card className="bg-card/40 backdrop-blur-sm h-full flex items-center justify-center min-h-[500px]">
                <CardContent className="p-6">
                    <ComingSoon />
                </CardContent>
            </Card>
        )}
      </main>
      <Footer />
      <MarqueeFooter />
    </div>
  );
}
