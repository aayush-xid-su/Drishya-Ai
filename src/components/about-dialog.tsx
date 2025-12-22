'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Info } from 'lucide-react';

const GithubLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href="https://github.com/aayush-xid-su"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:underline"
  >
    {children}
  </a>
);

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-5 w-5" />
          <span className="sr-only">About DRISHYAA AI</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">About DRISHYAA AI</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p>
              DRISHYAA AI is an independent computer vision initiative built to push the boundaries of
              real-time visual intelligence. Designed to make advanced AI detection accessible,
              accurate, and privacy-focused, DRISHYAA AI brings together cutting-edge algorithms for
              object detection, face landmarks, gesture recognition, pose estimation, and motion
              understanding — all running locally with unparalleled performance.
            </p>
            <p>
              Built with a vision to redefine how humans and machines perceive the world, DRISHYAA AI
              serves as a unified platform for developers, researchers, creators, and businesses
              seeking high-precision visual AI without compromising on privacy or control.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Who Created DRISHYAA AI?</h3>
              <p>
                DRISHYAA AI was conceptualized, engineered, and developed by{' '}
                <GithubLink>Ayush Das</GithubLink>, an independent cybersecurity researcher and
                technology enthusiast passionate about building a safer digital future for India.
                Motivated by a desire to democratize high-performance vision technology, Ayush built
                DRISHYAA AI as a lightweight, reliable, and developer-friendly solution that delivers
                professional-grade detection across multiple domains.
              </p>
              <p>His work reflects a commitment to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>
                  <span className="font-bold text-white">🎥 Visual Intelligence for Everyone</span> – Simplifying
                  access to advanced, high-accuracy computer vision.
                </li>
                <li>
                  <span className="font-bold text-white">🔒 Privacy-First AI</span> – Ensuring all processing
                  occurs locally, with zero data sent to external servers.
                </li>
                <li>
                  <span className="font-bold text-white">⚙️ Real-Time Performance</span> – Building fast,
                  optimized, production-ready vision pipelines for real-world use.
                </li>
                <li>
                  <span className="font-bold text-white">🌏 India-Driven Innovation</span> – Showcasing
                  world-class AI engineering emerging from India.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Why DRISHYAA AI Was Created</h3>
              <p>
                As AI vision rapidly evolves, most high-quality detection systems remain:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Cloud-dependent</li>
                  <li>Resource-heavy</li>
                  <li>Expensive</li>
                  <li>Inaccessible to beginners</li>
                  <li>Limited to single-domain tasks</li>
              </ul>
               <p>
                DRISHYAA AI was created to break these barriers — offering a privacy-respecting,
                multi-modal, real-time vision engine that runs on everyday devices without requiring
                massive GPU resources or expensive cloud APIs.
              </p>
              <p>The platform exists to empower:</p>
               <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Developers building intelligent apps</li>
                  <li>Students learning computer vision</li>
                  <li>Startups creating AR/VR, robotics, or automation products</li>
                  <li>Researchers studying human motion, gestures, and visual data</li>
                  <li>Creators exploring AI-driven visuals and experiences</li>
              </ul>
               <p>
                DRISHYAA AI is built with the belief that world-class AI should be fast, accessible,
                and safe for everyone.
              </p>
            </div>
            
            <div className="space-y-2 border-t border-border pt-4">
                <h3 className="text-lg font-bold font-headline text-white">A Note From the Creator</h3>
                <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70">
                “Machines should understand the world as clearly as humans do — instantly, privately,
                and intelligently. DRISHYAA AI is my attempt to bring high-performance visual
                intelligence to everyone, without sacrificing privacy or accessibility.”
                </blockquote>
                <p className="text-right">
                — <GithubLink>Ayush Das</GithubLink>, Creator of DRISHYAA AI
                </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
