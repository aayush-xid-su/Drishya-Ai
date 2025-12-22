'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function DpaDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">Data Processing Agreement (DPA)</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p className="text-center font-bold">DRISHYAA AI (India)</p>
            <p className="text-center text-xs">
              Compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act),
              Information Technology Act, 2000, SPDI Rules, 2011,
              CERT-In Guidelines (2022), and globally aligned with GDPR Art. 28.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">1. Definitions</h3>
              <p>For the purposes of this Agreement:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><span className="font-bold">“Data Principal”</span> refers to the individual whose personal data is processed.</li>
                <li><span className="font-bold">“Data Fiduciary”</span> (Controller) refers to the Customer determining the purpose and means of processing.</li>
                <li><span className="font-bold">“Data Processor”</span> refers to DRISHYAA AI, which processes personal data on behalf of the Data Fiduciary.</li>
                <li><span className="font-bold">“Personal Data”</span> includes any digital data relating to an identifiable individual.</li>
                <li><span className="font-bold">“Processing”</span> includes collection, storage, use, analysis, or modification of personal data.</li>
                <li><span className="font-bold">“Applicable Law”</span> includes the DPDP Act, IT Act 2000, SPDI Rules 2011, CERT-In Directions, and any other Indian legal requirements.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">2. Purpose and Scope of Processing</h3>
              <div className='pl-4 space-y-2'>
                <h4 className='font-semibold text-base text-foreground/90'>2.1 Purpose</h4>
                <p>The Processor shall process data solely for the provision of DRISHYAA AI’s services, including:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Real-time computer vision analytics</li>
                  <li>Object, face, hand, and pose detection</li>
                  <li>Generation of metadata and inference</li>
                  <li>Improving AI model accuracy (only with explicit consent)</li>
                </ul>
                 <h4 className='font-semibold text-base text-foreground/90'>2.2 Scope of Data Processed</h4>
                <p>Depending on usage, data may include:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Real-time video frames (no persistent storage unless authorised)</li>
                  <li>Facial landmarks and vectors</li>
                  <li>Hand, body, and movement keypoints</li>
                  <li>Device metadata</li>
                  <li>Session identifiers</li>
                  <li>AI interaction logs</li>
                </ul>
                <h4 className='font-semibold text-base text-foreground/90'>2.3 Duration</h4>
                <p>This Agreement remains valid for the entirety of the service relationship between the parties.</p>
              </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">3. Categories of Data Subjects</h3>
                <p>Processing may involve data from:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>End-users recorded through live video</li>
                    <li>Operators of the DRISHYAA AI platform</li>
                    <li>Testers and demo users</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold font-headline text-white">4. Location of Processing</h3>
                <p>Data is processed:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Within India,</li>
                    <li>or</li>
                    <li>On the Customer’s device (on-device mode) with no cloud transfer.</li>
                </ul>
                <p>Data shall not be transferred outside India without:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Written approval from the Controller</li>
                    <li>Adequate safeguards ensuring DPDP-compliant transfer</li>
                </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">5. Technical and Organisational Security Measures (TOMs)</h3>
              <p>The Processor shall implement industry-grade controls including:</p>
               <div className='pl-4 space-y-2'>
                <h4 className='font-semibold text-base text-foreground/90'>5.1 Confidentiality</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Role-based access control (RBAC)</li>
                    <li>2FA and secure authentication</li>
                    <li>Employee NDAs</li>
                    <li>Access logs and audit trails</li>
                </ul>
                 <h4 className='font-semibold text-base text-foreground/90'>5.2 Integrity & Security</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>TLS 1.2+ encryption</li>
                    <li>Secure API communication</li>
                    <li>Anti-tamper and validation checks</li>
                    <li>Cryptographic hashing</li>
                </ul>
                <h4 className='font-semibold text-base text-foreground/90'>5.3 Availability</h4>
                 <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Redundant servers</li>
                    <li>Firewall and IDS/IPS</li>
                    <li>Disaster recovery plans</li>
                </ul>
                 <h4 className='font-semibold text-base text-foreground/90'>5.4 Data Minimisation</h4>
                 <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>No storage unless contractually required</li>
                    <li>Use of anonymised or pseudonymised vectors</li>
                    <li>Real-time only processing where possible</li>
                </ul>
                <h4 className='font-semibold text-base text-foreground/90'>5.5 On-Device Processing</h4>
                <p>Where applicable:</p>
                 <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Video never leaves the device</li>
                    <li>Only metadata is processed</li>
                    <li>Zero cloud storage by default</li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">6. Rights of the Controller (Data Fiduciary)</h3>
              <p>The Controller may request:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Access to stored data (if any)</li>
                <li>Correction or deletion</li>
                <li>Restriction of processing</li>
                <li>Audit review of Processor safeguards</li>
                <li>Immediate termination of processing</li>
              </ul>
              <p>The Processor shall act only upon documented instructions.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">7. Sub-Processing</h3>
              <p>The Processor may engage sub-processors only with written approval from the Controller. Permissible sub-processors include:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Indian cloud hosting providers</li>
                <li>Indian data centres</li>
                <li>DRISHYAA AI’s internal compute infrastructure</li>
              </ul>
              <p>No overseas sub-processor may be used without Controller approval.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">8. Data Breach Notification</h3>
              <p>The Processor shall:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Notify the Controller within 72 hours (GDPR-aligned)</li>
                <li>And notify CERT-In within 6 hours (Indian compliance requirement)</li>
                <li>Provide mitigation steps, impact assessment, and timeline</li>
                <li>Fully cooperate for containment and reporting</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">9. Instructions from Controller</h3>
              <p>The Processor:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Shall process data only under documented instructions</li>
                <li>Shall notify the Controller if any instruction violates Indian law</li>
                <li>Shall maintain records of all processing activities</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">10. Data Deletion & Return</h3>
              <p>Upon termination or at Controller request:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>All personal data shall be deleted or securely returned</li>
                <li>Backups shall be purged</li>
                <li>AI training datasets retained only with explicit written consent</li>
                <li>Controller may demand proof of deletion</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">11. Liability & Compliance</h3>
              <p>Both parties agree to comply with:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>DPDP Act, 2023</li>
                <li>IT Act 2000 & SPDI Rules</li>
                <li>CERT-In 2022 Directions</li>
                <li>Any sectoral cybersecurity regulation</li>
              </ul>
              <p>The Processor is liable for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Breaches caused by negligence</li>
                <li>Non-compliance with agreed security practices</li>
              </ul>
              <p>The Controller is liable for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Lawfulness of data collection</li>
                <li>Providing valid consent</li>
                <li>Accuracy of instructions</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">12. Term, Termination, and Validity</h3>
              <p>This Agreement becomes effective upon acceptance by both parties and remains in force until:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>The service relationship ends</li>
                <li>All data has been deleted</li>
                <li>All obligations under law are discharged</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">Annex A — Security Measures (TOMs)</h3>
              <div className='pl-4 space-y-2'>
                <h4 className='font-semibold text-base text-foreground/90'>1. Physical Security</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Secured premises</li>
                  <li>Access-log monitoring</li>
                  <li>CCTV coverage</li>
                  <li>Visitor control</li>
                </ul>
                <h4 className='font-semibold text-base text-foreground/90'>2. Network & Infrastructure Security</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Zero-trust admin architecture</li>
                  <li>Firewall-protected networks</li>
                  <li>TLS encryption for all data-in-transit</li>
                </ul>
                <h4 className='font-semibold text-base text-foreground/90'>3. Data Processing Security</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Pseudonymisation of biometric vectors</li>
                  <li>Secure isolation of datasets</li>
                  <li>Sandboxed model testing environments</li>
                </ul>
                <h4 className='font-semibold text-base text-foreground/90'>4. Disaster Recovery</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>High-availability infrastructure</li>
                  <li>Backup and restore mechanisms</li>
                  <li>Emergency response protocols</li>
                </ul>
              </div>
            </div>

            <p className="text-center font-bold pt-4">DRISHYAA AI</p>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
