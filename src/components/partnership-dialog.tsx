'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function PartnershipDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">Strategic Partnership: DRISHYAA AI × Xidotic Pvt. Ltd.</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p>
              DRISHYAA AI is proud to announce that the platform has been built in strategic partnership with Xidotic Pvt. Ltd., a technology-driven organization focused on innovation, research, and next-generation digital solutions.
            </p>
            <p>
              This partnership represents a shared commitment to responsible artificial intelligence, technical excellence, and scalable system design, combining DRISHYAA AI’s vision intelligence capabilities with Xidotic’s engineering expertise and innovation-led development approach.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Strengthening Vision Intelligence Through Collaboration</h3>
              <p>
                The development of DRISHYAA AI has been supported by Xidotic Pvt. Ltd. through technical collaboration, infrastructure guidance, and strategic engineering input. This partnership enabled the platform to be architected with a strong focus on:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>High-performance, real-time AI systems</li>
                  <li>Scalable and modular platform design</li>
                  <li>Secure, privacy-first infrastructure</li>
                  <li>Production-ready engineering standards</li>
              </ul>
              <p>
                By aligning on shared technical and ethical principles, both teams worked together to ensure DRISHYAA AI meets the demands of modern AI deployment without compromising trust or compliance.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Shared Values, Unified Vision</h3>
              <p>DRISHYAA AI and Xidotic Pvt. Ltd. are aligned by a common philosophy:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Innovation with responsibility</li>
                  <li>Privacy-by-design system architecture</li>
                  <li>Transparency in AI deployment</li>
                  <li>Long-term, sustainable technology development</li>
              </ul>
              <p>
                This collaboration reflects a belief that advanced AI solutions must be built not only for performance, but also for reliability, legal alignment, and real-world impact.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Role of Xidotic Pvt. Ltd.</h3>
              <p>As a strategic technology partner, Xidotic Pvt. Ltd. contributed to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Platform engineering support and system design</li>
                  <li>Development best practices and optimization strategies</li>
                  <li>Technical validation and architecture review</li>
                  <li>Supporting DRISHYAA AI’s long-term scalability roadmap</li>
              </ul>
              <p>This partnership ensured that DRISHYAA AI was developed with enterprise-ready foundations while maintaining flexibility for future innovation.</p>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">Looking Forward</h3>
                <p>The partnership between DRISHYAA AI and Xidotic Pvt. Ltd. marks the beginning of a long-term collaboration aimed at:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Expanding real-time vision intelligence capabilities</li>
                  <li>Advancing edge-AI and on-device inference systems</li>
                  <li>Supporting research-driven AI innovation in India</li>
                  <li>Building trusted AI solutions for global use cases</li>
                </ul>
                <p>Together, DRISHYAA AI and Xidotic Pvt. Ltd. are committed to shaping the future of ethical, transparent, and high-impact vision intelligence technologies.</p>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">About Xidotic Pvt. Ltd.</h3>
                <p>Xidotic Pvt. Ltd. is a technology and innovation-focused organization dedicated to building scalable, research-driven digital solutions. The company supports emerging platforms through engineering expertise, system design, and strategic collaboration.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
