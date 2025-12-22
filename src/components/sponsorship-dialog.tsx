'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SponsorshipDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">Sponsorship & Funding Disclosure</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p>
              Presently, DRISHYAA AI is an indigenously developed tool, which has not sought or received any sponsorship, financial support, grants, or endorsements from individuals, corporations, government agencies, or third-party organizations.
            </p>
            <p>
              The development, research, and implementation of DRISHYAA AI systems have been done in a manner that is free from any sponsored interests, thereby ensuring that all technologies, architecture, and decisions are entirely made keeping in mind the engineering, ethics, and platform integrity.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Commitment to Independence & Transparency</h3>
              <p>
                This independence helps DRISHYAA AI to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Embrace Privacy-Focused & Responsible AI Design</li>
                <li>Avoid conflicts of interest</li>
                <li>Preserve all control concerning technology strategy and use of data</li>
                <li>Provide neutral and reliable vision intelligence solutions</li>
              </ul>
              <p>
                This independence is a fundamental tenet of our DRISHYAA AI, which is our commitment to transparency, trust, and honesty with our users.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Future Sponsorships</h3>
              <p>
                In the event that DRISHYAA AI considers engaging in sponsorship, funding, or collaboration on a financial basis, such details would be clearly stated on our official website.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70">
                “Any potential sponsorships, should they occur, will be thoroughly assessed for alignment with the values, laws, and ethics of DRISHYAA AI.”
              </blockquote>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Our Assurance</h3>
              <p>
                Users, partners, and stakeholders are reassured that there are no sponsored contents, hidden endorsements, and/or paid-influence within the DRISHYAA AI platform, research, and/or other publicly available interactions.
              </p>
              <p>
                Transparency is not optional for us—it is a bedrock value.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
