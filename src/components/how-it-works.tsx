'use client';

import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    step: '1',
    title: 'Start Live Stream',
    description: (
      <ul className="list-disc list-inside text-foreground/80 space-y-1">
        <li>Connect your webcam or supported camera.</li>
        <li>Uses high-performance capture pipeline</li>
        <li>Built for consistent, zero-drop frame streaming</li>
        <li>Supports Windows, macOS, Linux, and mobile (optional)</li>
      </ul>
    ),
    color: 'border-orange-500/30',
    accentClass: 'bg-orange-500',
  },
  {
    step: '2',
    title: 'Real-Time Detection Engine',
    description: (
      <ul className="list-disc list-inside text-foreground/80 space-y-1">
        <li>Each frame is processed instantly with:</li>
        <ul className="list-[circle] list-inside ml-4">
          <li>Deep neural networks</li>
          <li>Landmark extraction</li>
          <li>Gesture + pose + object inference</li>
          <li>Tracking and temporal smoothing</li>
        </ul>
        <li>Latency remains consistently below 50–100 ms.</li>
      </ul>
    ),
    color: 'border-teal-500/30',
    accentClass: 'bg-teal-500',
  },
  {
    step: '3',
    title: 'Live Results & Visual Overlays',
    description: (
      <ul className="list-disc list-inside text-foreground/80 space-y-1">
        <li>See everything instantly:</li>
        <ul className="list-[circle] list-inside ml-4">
          <li>Bounding boxes</li>
          <li>Landmarks</li>
          <li>Skeleton overlays</li>
          <li>Gesture labels</li>
          <li>Object names & confidence values</li>
        </ul>
        <li>Multi-modal detection in one unified dashboard</li>
        <li>Perfect for demos, research, and production systems.</li>
      </ul>
    ),
    color: 'border-indigo-500/30',
    accentClass: 'bg-indigo-500',
  },
];

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          Get started with AI detection in three simple steps
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <Card
            key={step.title}
            className={`bg-card/50 backdrop-blur-sm border-2 ${step.color} p-6 flex flex-col`}
          >
            <CardContent className="p-0 flex flex-col flex-grow">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-md flex-shrink-0 flex items-center justify-center font-bold text-2xl text-black ${step.accentClass}`}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mt-1">{step.title}</h3>
              </div>
              <div className="flex-grow">{step.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
