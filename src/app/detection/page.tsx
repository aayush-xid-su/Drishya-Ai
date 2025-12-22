import {
  ShieldAlert,
  Hand,
  Fingerprint,
  Smile,
  User,
  Ruler,
  ArrowRight,
  Box,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarqueeFooter from '@/components/marquee-footer';
import Link from 'next/link';

const detectionModels = [
  {
    icon: <ShieldAlert />,
    title: 'Driver Drowsiness Detection',
    description: 'Monitor driver fatigue and alertness in real-time to prevent accidents.',
    tags: ['Fatigue Detection', 'Eye Tracking', 'Yawn Detection'],
    href: '/detection/object-detection',
    borderColor: 'border-yellow-500/30',
  },
  {
    icon: <Box />,
    title: 'Generic Object Detection',
    description: 'Detect and classify various objects in a live video stream.',
    tags: ['Object Recognition', 'Real-time'],
    href: '/detection/generic-object-detection',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: <Hand />,
    title: 'Gesture Recognition',
    description: 'Recognize hand gestures and poses.',
    tags: ['Hand tracking', 'Classification'],
    href: '/detection/gesture-recognition',
    borderColor: 'border-green-500/30',
  },
  {
    icon: <Fingerprint />,
    title: 'Hand Landmarks',
    description: 'Track 21 3D hand landmarks.',
    tags: ['21 points', 'Finger tracking'],
    href: '/detection/hand-landmarks',
    borderColor: 'border-yellow-500/30',
  },
  {
    icon: <Smile />,
    title: 'Face Landmarks',
    description: 'High-fidelity face mesh detection.',
    tags: ['468 points', 'Face mesh'],
    href: '/detection/face-landmarks',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: <User />,
    title: 'Pose Landmarks',
    description: 'Full-body pose estimation.',
    tags: ['33 points', 'Body tracking'],
    href: '/detection/pose-landmarks',
    borderColor: 'border-red-500/30',
  },
  {
    icon: <Ruler />,
    title: 'Hand Distance',
    description: 'Measure distance from camera.',
    tags: ['Depth est.', 'Real-time'],
    href: '/detection/hand-distance',
    borderColor: 'border-indigo-500/30',
  },
];

export default function DetectionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dots">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            AI Detection Models
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore a suite of powerful, real-time detection models running locally on your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detectionModels.map((model) => (
            <Link href={model.href} key={model.title} className="group">
              <Card className={`h-full bg-card/40 backdrop-blur-sm border-2 ${model.borderColor} hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1`}>
                <CardHeader className="flex flex-row justify-between items-start">
                  <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center text-primary">
                    {model.icon}
                  </div>
                  <ArrowRight className="text-foreground/30 group-hover:text-primary transition-colors" />
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold">{model.title}</h2>
                  <p className="text-foreground/70 flex-grow">{model.description}</p>
                  <div className="flex gap-2 pt-4">
                    {model.tags.map((tag) => (
                      <Badge variant="outline" key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <MarqueeFooter />
    </div>
  );
}
