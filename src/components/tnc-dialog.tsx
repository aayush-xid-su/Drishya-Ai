'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function TncDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">Terms & Conditions</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p className="font-bold">DRISHYAA AI</p>
            <p className="text-xs">Effective Date: 01/01/2026</p>
            <p>
              Welcome to DRISHYAA AI (“Platform”). By accessing or using this Website, Application, or any DRISHYAA AI service, you (“User”, “Customer”, or “You”) agree to be bound by the following Terms and Conditions. If you do not agree, please discontinue use immediately.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">1. General Provisions</h3>
              <p>1.1 These Terms govern your access and use of DRISHYAA AI, including:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Real-time computer vision services</li>
                <li>AI-powered object, face, hand, and pose detection</li>
                <li>Developer APIs, SDKs, tools, and dashboards</li>
              </ul>
              <p>1.2 These Terms constitute a legally binding contract under the Indian Contract Act, 1872.</p>
              <p>1.3 By using DRISHYAA AI, you confirm that you are:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>At least 18 years old</li>
                <li>Legally competent to enter into a contract</li>
              </ul>
              <p>1.4 DRISHYAA AI reserves the right to modify, suspend, or discontinue any part of the Service at any time.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">2. Definitions</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><span className="font-bold">“Service” or “Platform”</span>: DRISHYAA AI’s real-time detection systems, API, tools, documentation, models, and website.</li>
                <li><span className="font-bold">“User” / “Customer”</span>: Any individual or organization using DRISHYAA AI.</li>
                <li><span className="font-bold">“Controller / Data Fiduciary”</span>: The entity deciding how user data is used.</li>
                <li><span className="font-bold">“Processor / Data Processor”</span>: DRISHYAA AI, processing data on behalf of the User.</li>
                <li><span className="font-bold">“Personal Data”</span>: Data that identifies an individual, as defined under DPDP Act 2023.</li>
                <li><span className="font-bold">“Sensitive Data”</span>: Includes video frames, biometric vectors, facial landmarks, etc.</li>
                <li><span className="font-bold">“Credits”</span>: Usage units required to access DRISHYAA AI processing features.</li>
              </ul>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">3. Service Availability & Support</h3>
                <p>3.1 DRISHYAA AI will make reasonable efforts to ensure uptime but does not guarantee uninterrupted access.</p>
                <p>3.2 Scheduled maintenance or upgrades may temporarily affect availability.</p>
                <p>3.3 Support is provided via email or ticket system during working hours.</p>
                <p>3.4 DRISHYAA AI is not liable for outages caused by:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Internet failures</li>
                    <li>User infrastructure</li>
                    <li>Third-party service providers</li>
                    <li>Force majeure events (Act of God, natural disasters, cyber-attacks)</li>
                </ul>
            </div>
            
            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">4. Product Data & Customer Responsibilities</h3>
                <p>4.1 You retain full responsibility for the lawful collection of video or biometric data processed through DRISHYAA AI.</p>
                <p>4.2 You confirm that:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>You have obtained valid user consent (as required under DPDP Act).</li>
                    <li>You are not violating privacy laws or individual rights.</li>
                </ul>
                <p>4.3 You will not upload:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Unlawful content</li>
                    <li>Malware</li>
                    <li>Third-party proprietary datasets without permission</li>
                </ul>
                <p>4.4 DRISHYAA AI is not responsible for:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Violations arising from your data collection</li>
                    <li>Incorrect implementation of the platform on your systems</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">5. Credit System & Usage</h3>
                <p>5.1 DRISHYAA AI may operate on a credit-based usage model.</p>
                <p>5.2 Credits:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Are required for API usage, model inference, and processing</li>
                    <li>Are non-refundable unless mandated by law</li>
                    <li>Expire after the defined period</li>
                </ul>
                <p>5.3 Fraudulent credit usage may result in account suspension.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">6. Payments, Price Adjustments & Delays</h3>
                <p>6.1 Prices are listed in INR unless stated otherwise and are subject to GST as per Indian taxation laws.</p>
                <p>6.2 DRISHYAA AI reserves the right to revise pricing with reasonable notice.</p>
                <p>6.3 Payments must be made upfront unless a written agreement states otherwise.</p>
                <p>6.4 In case of delayed payments (for enterprise):</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Interest may be charged under the Interest Act, 1978</li>
                    <li>Services may be suspended</li>
                </ul>
                <p>6.5 DRISHYAA AI uses secure payment gateways compliant with RBI regulations.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">7. Warranty & Liability</h3>
                <p>7.1 DRISHYAA AI is provided on an “as-is” and “as-available” basis.</p>
                <p>7.2 No warranties are given regarding:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Accuracy of detections</li>
                    <li>100% uptime</li>
                    <li>Fitness for a particular purpose</li>
                </ul>
                <p>7.3 DRISHYAA AI’s liability is limited to the maximum amount paid by the User in the last 6 months.</p>
                <p>7.4 DRISHYAA AI is not liable for:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Loss of data</li>
                    <li>Business interruption</li>
                    <li>Misuse of the Service</li>
                    <li>Illegal activities performed by Users</li>
                </ul>
                <p>7.5 Nothing in this clause limits liability for fraud or wilful misconduct.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">8. Usage Rights, Open-Source & Data</h3>
                <p>8.1 DRISHYAA AI grants Users a non-exclusive, revocable license to use the Platform.</p>
                <p>8.2 Users shall not:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Reverse engineer</li>
                    <li>Sell or redistribute</li>
                    <li>Modify or claim ownership of DRISHYAA AI models</li>
                </ul>
                <p>8.3 Open-source libraries used by DRISHYAA AI remain governed by their respective licenses.</p>
                <p>8.4 DRISHYAA AI does not own User data; it only processes data for providing services.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">9. Prohibited Use</h3>
                <p>You shall not use DRISHYAA AI for:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Surveillance without consent</li>
                    <li>Military or autonomous weapon systems</li>
                    <li>Deepfake creation</li>
                    <li>Harassment or stalking</li>
                    <li>Illegal monitoring of individuals</li>
                    <li>Discrimination or profiling</li>
                    <li>Violating privacy rights</li>
                    <li>Any act prohibited under the Indian Penal Code or IT Act 2000</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">10. Confidentiality</h3>
                <p>10.1 Both parties agree to keep confidential all business, technical, and operational information.</p>
                <p>10.2 Confidentiality obligations survive termination for 5 years, unless law requires disclosure.</p>
                <p>10.3 DRISHYAA AI may disclose information if required by:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Court order</li>
                    <li>CERT-In</li>
                    <li>Law enforcement</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">11. Termination</h3>
                <p>11.1 DRISHYAA AI may terminate accounts for:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Breaches of terms</li>
                    <li>Non-payment</li>
                    <li>Misuse or illegal activity</li>
                </ul>
                <p>11.2 Users may terminate anytime by stopping service use.</p>
                <p>11.3 Upon termination:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Access to platform features ends</li>
                    <li>Outstanding payments become due</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">12. Post-Termination Use</h3>
                <p>12.1 Upon termination, the User must:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Cease all use of DRISHYAA AI</li>
                    <li>Delete any sensitive API keys, SDKs, or credentials</li>
                </ul>
                <p>12.2 Any stored data will be deleted within 30 days, unless:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Required for legal compliance</li>
                    <li>Retention is contractually agreed</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">13. Marketing Rights</h3>
                <p>13.1 DRISHYAA AI may display your company name and logo as part of a customer list unless you opt out in writing.</p>
                <p>13.2 No sensitive information or video data will be used for marketing without explicit consent.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">14. Assignment</h3>
                <p>14.1 Users may not assign their rights under this agreement without written approval.</p>
                <p>14.2 DRISHYAA AI may assign or transfer obligations in cases of:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Merger</li>
                    <li>Acquisition</li>
                    <li>Corporate restructuring</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">15. Amendment of Terms</h3>
                <p>15.1 DRISHYAA AI may update these Terms from time to time.</p>
                <p>15.2 Continued use after an update constitutes acceptance.</p>
                <p>15.3 Major changes will be communicated through email or website updates.</p>
                <p>15.4 DRISHYAA AI reserves the unconditional right to modify, revise, update, or replace these Terms & Conditions at any time, in whole or in part, at its sole discretion. Such amendments may be made with or without prior notice, and DRISHYAA AI is not obligated to notify users individually regarding any changes.</p>
                <p>All revisions shall become effective immediately upon being published on the DRISHYAA AI website or platform. Continued use of the Services after publication of updated Terms shall be deemed to constitute the user’s full and binding acceptance of the revised Terms & Conditions.</p>
                <p>Users are advised to review the Terms periodically to remain informed of any updates. DRISHYAA AI shall not be liable for any loss, claim, or consequence arising from a user’s failure to review the amended Terms.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">16. Dispute Resolution</h3>
                <p>16.1 Disputes will first attempt to be resolved through mutual negotiation.</p>
                <p>16.2 If unresolved, disputes shall be settled by arbitration under the Arbitration and Conciliation Act, 1996.</p>
                <p>16.3 Seat of arbitration: New Delhi, India<br/>Language: English<br/>Arbitrator: Appointed mutually or by court if needed</p>
                <p>16.4 Courts in New Delhi shall have exclusive jurisdiction.</p>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">17. Final Provisions</h3>
                <p>17.1 These Terms are governed by the laws of India.</p>
                <p>17.2 If any provision becomes invalid, the remaining provisions remain enforceable.</p>
                <p>17.3 These Terms constitute the entire agreement between the parties.</p>
                <p>17.4 Failure to enforce any right does not constitute a waiver.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
