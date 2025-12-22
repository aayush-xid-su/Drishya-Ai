'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function OurStoryDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">Our Story - DRISHYAA AI</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p>
              In the age where visual data marks the definition of how machines are to interact with the environment, intelligent vision is considered the necessary tool for advancement. DRISHYAA AI is a product that aimed to redefine the development, implementation, and adoption of computer vision technology.
            </p>
            <p>
              "DRISHYAA AI" originates from the Sanskrit word "Drishya," which means "that which is seen," but it is rooted in the philosophy that vision is not only a function of detection but also a function of understanding context, respecting the privacy, and developing intelligence that is responsible.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">The Origin</h3>
              <p>
                DRISHYAA AI is the brainchild of <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush Das</a>, an independent technologist from India, who has a sound background in computer vision, AI, and cyber security.
                In his experiences with contemporary AI systems, Ayush noticed that a situation is developing, where strong vision AI is becoming more dependent on cloud infrastructure, massive data, and reduced user control. Despite the accelerated pace of innovation, the factors of privacy, transparency, and ethics are sometimes secondary.
              </p>
              <p>
                This awakening has given rise to the creation of DRISHYAA AI, a real-time vision intelligence solution that is a "privacy-first" initiative to provide "professional-grade" performance with "user trust" never being compromised.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">The Concept of DRISHYAA AI</h3>
              <p>Right from the beginning, the aim of DRISHYAA AI has been: To make advanced vision AI accessible, accurate, and responsible. It integrates state-of-the art deep learning with real-time processing to accomplish tasks including:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Object detection</li>
                  <li>Face landmarks analysis</li>
                  <li>Hand gesture recognition</li>
                  <li>Pose Estimation</li>
                  <li>Live video intelligence & metadata creation</li>
              </ul>
              <p>In a way that prioritizes on-device and local computation wherever that is possible.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">MADE IN INDIA, MADE WITH PURPOSE</h3>
              <p>
                The DRISHYAA AI solution is proudly developed in India, reflecting the team's commitment to supporting the growth of the India AI ecosystem. The solution is designed to support the India law frameworks, such as the law regarding data protection, with international technical standards.
              </p>
              <p>
                Through the implementation of privacy by design principles, DRISHYAA AI has proven that performance in AI can go alongside responsible use of data.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Our Core Principles</h3>
              <p>DRISHYAA AI is based on three pillars:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><span className="font-bold">Intelligent Engineering</span> - Highly optimized models that emphasize precision, low latency, and robustness.</li>
                <li><span className="font-bold">Privacy-First</span> - Minimal data retention, optional inference on the device, transparent processing flows.</li>
                <li><span className="font-bold">Responsible Innovation</span> - Technology that serves to empower people but doesn't facilitate abuse or surveillance systems.</li>
              </ul>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">The Vision for Tomorrow</h3>
                <p>DRISHYAA AI is not an end product but a constantly developing platform. The vision includes:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Advanced analytics and visualization capabilities</li>
                  <li>Edge-AI Deploy</li>
                  <li>Model customization and fine-tuning</li>
                  <li>Research collaboration and open innovation</li>
                  <li>Scalable enterprise-level solutions</li>
                </ul>
                <p>Through learning from real-life scenarios, DRISHYAA AI plans to design the future of vision intelligence ethics.</p>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">Founder’s Note</h3>
                <p>Initially, when I embarked on developing DRISHYAA AI, my aim was never to develop another AI solution only.</p>
                <p>The question I wanted to answer is: Can computers see the world intelligently without losing trust?</p>
                <p>In a world where vision AI is typically prioritizing scale over responsibility, DRISHYAA AI has been developed with the intent to go against the tide. Right from real-time processing to local inference, every architecture is a demonstration of prioritizing privacy, transparency, and ethics.</p>
                <p>India is at a critical juncture in its journey with regard to digitization. Now, as AI is gradually penetrating all sectors, it has become the need of the hour that we develop AI-friendly technologies that are based on human values.</p>
                <p>DRISHYAA AI is my vision for that future, a future in which intelligence is enabling, not intrusive, and a future that is guided by a sense of purpose.</p>
                <p>This is only the beginning.</p>
                <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70">
                “Vision is not surveillance. True intelligence is in understanding — responsibly.”
                </blockquote>
                <p className="text-right">
                — <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush Das</a>, Founder & Creator, DRISHYAA AI
                </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
