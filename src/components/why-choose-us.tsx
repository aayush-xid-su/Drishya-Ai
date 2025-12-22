'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, Cpu, LayoutGrid, Target, Shield } from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid className="h-8 w-8 text-blue-500" />,
    title: 'Multi-Domain AI Detection Suite',
    description: (
      <ul className="list-disc list-inside text-foreground/80 space-y-1">
        <li>Object Detection</li>
        <li>Face Detection & Landmarks</li>
        <li>Pose Estimation (Full-body)</li>
        <li>Hand Tracking & Gesture Recognition</li>
        <li>Activity / Motion Understanding</li>
        <li>Multi-person Tracking</li>
        <li className="font-medium text-foreground/90">Frame-by-frame real-time inference.</li>
      </ul>
    ),
    color: 'border-blue-500/20',
  },
  {
    icon: <Target className="h-8 w-8 text-green-500" />,
    title: 'High Accuracy',
    description: (
       <ul className="list-disc list-inside text-foreground/80 space-y-1">
        <li>Industry-leading accuracy</li>
        <li>Robustness in low-light & noisy environments</li>
        <li>Precise landmark & gesture tracking</li>
        <li>High stability during fast motion</li>
      </ul>
    ),
    color: 'border-green-500/20',
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-500" />,
    title: 'Privacy First — 100% Local Processing',
    description: (
      <ul className="list-disc list-inside text-foreground/80 space-y-1">
        <li>Your video never leaves your device.</li>
        <li>No cloud servers, background uploads, or hidden analytics.</li>
        <li>Everything runs on-device, ensuring complete data ownership.</li>
        <li>Ideal for security-sensitive industries and privacy-centric consumers.</li>
      </ul>
    ),
    color: 'border-purple-500/20',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose DRISHYAA AI?</h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          Our platform combines state-of-the-art machine learning with an intuitive interface to
          deliver professional-grade AI detection capabilities across multiple domains.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className={`bg-card/50 backdrop-blur-sm border-2 ${feature.color}`}>
            <CardHeader className="flex flex-row items-center gap-4">
              {feature.icon}
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {typeof feature.description === 'string' ? (
                <p className="text-foreground/80">{feature.description}</p>
              ) : (
                feature.description
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
