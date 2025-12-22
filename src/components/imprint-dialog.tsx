'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ImprintDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">Imprint (Legal Notice)</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p className="font-bold">DRISHYAA AI — Vision Intelligence Platform (India)</p>
            <p className="text-xs">Last Updated: 1 JANUARY 2026</p>
            <p>
              This Imprint (“Legal Notice”) is published in compliance with:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Section 65A & 65B of the Information Technology Act, 2000</li>
              <li>Rule 3(1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021</li>
              <li>Digital Personal Data Protection (DPDP) Act, 2023</li>
              <li>Indian Contract Act, 1872</li>
              <li>Applicable commercial and corporate compliances in India</li>
            </ul>
            <p>
              This notice provides legally required information about the ownership, operation, and responsible entities behind DRISHYAA AI.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">1. Service Provider Information</h3>
              <p>Legal Name: DRISHYAA AI</p>
              <p>Registered Jurisdiction: India</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">2. Contact Information</h3>
              <p>Official Email: aayushxidsu.11am@gmail.com</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">3. Authorized Representative</h3>
              <p>Name: AYUSH DAS</p>
              <p>Designation: Founder</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">4. Data Protection & Grievance Officer</h3>
              <p>(Mandatory under IT Act + DPDP Act)</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">5. Platform Description</h3>
              <p>DRISHYAA AI provides:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Real-time computer vision services</li>
                <li>Object, face, gesture, and pose detection</li>
                <li>Video intelligence and metadata analytics</li>
                <li>AI model inference and on-device processing</li>
              </ul>
              <p>The platform operates for commercial, research, and enterprise use cases in India and globally.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">6. Regulatory Compliance Statement</h3>
              <p>DRISHYAA AI operates in compliance with:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>IT Act 2000 & IT Amendment Act 2008</li>
                <li>IT (Reasonable Security Practices & Sensitive Personal Data) Rules, 2011</li>
                <li>CERT-In Guidelines 2022</li>
                <li>Digital Personal Data Protection Act, 2023</li>
                <li>Indian Evidence Act (Electronic Records), Section 65B</li>
                <li>Indian Contract Act, 1872</li>
              </ul>
              <p>DRISHYAA AI does not intentionally host or distribute illegal, harmful, or restricted content.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">7. Liability Disclaimer</h3>
              <p>DRISHYAA AI makes reasonable efforts to maintain accurate and updated information but assumes no liability for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Errors, delays, service interruptions</li>
                <li>Third-party content or integrations</li>
                <li>Incorrect use of the platform</li>
                <li>Damages arising from reliance on AI outputs</li>
              </ul>
              <p>All use of DRISHYAA AI is governed by the Terms & Conditions available on our platform.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">8. Copyright & Intellectual Property</h3>
              <p>Unless expressly stated otherwise:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>All software, models, UI, branding, and documentation are the exclusive property of DRISHYAA AI.</li>
                <li>Unauthorized copying, reverse engineering, scraping, or redistribution is prohibited.</li>
                <li>All third-party materials remain the property of their respective owners.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">9. Dispute Resolution & Jurisdiction</h3>
              <p>All disputes arising out of the use of DRISHYAA AI shall be governed by the laws of India.</p>
              <p>Jurisdiction shall lie exclusively with the courts of Nuapada odisha, india.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">10. Contact for Legal Notices</h3>
              <p>All legal communication may be addressed to:</p>
              <p>Email: aayushxidsu.11am@gmail.com</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">11. Publication Information</h3>
              <p>This Imprint is valid for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>DRISHYAA AI Website</li>
                <li>DRISHYAA AI Mobile/Web Application</li>
                <li>DRISHYAA AI Documentation & Developer Portal</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Final Note</h3>
              <p>This Imprint is periodically reviewed and may be updated to comply with new Indian laws or business requirements.</p>
            </div>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
