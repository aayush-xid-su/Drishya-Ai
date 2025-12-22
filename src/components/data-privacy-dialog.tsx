'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function DataPrivacyDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-white font-bold">DRISHYAA AI – Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm text-foreground/80">
            <p className="text-xs">
              Effective Date: 1 JANUARY 2026<br/>
              Last Updated: 1 JANUARY 2026
            </p>
            <p>
              DRISHYAA AI (“Company”, “We”, “Us”, “Our”) is committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, store, process, and safeguard your personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable laws of India.
            </p>
            <p>
              By accessing or using DRISHYAA AI’s website, platform, applications, or services (“Services”), you acknowledge that you have read and understood this Privacy Policy.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">1. Scope & Applicability</h3>
              <p>This Privacy Policy applies to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Visitors accessing our website or applications</li>
                <li>Registered users of DRISHYAA AI</li>
                <li>Customers using free or paid features</li>
                <li>Any individual whose personal data is processed by DRISHYAA AI</li>
              </ul>
              <p>This Policy does not apply to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Third-party websites or services linked from DRISHYAA AI</li>
                <li>Data processed by external entities not controlled by us</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">2. Legal Basis for Processing</h3>
              <p>We process personal data in accordance with the DPDP Act under the following grounds:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Consent of the Data Principal</li>
                <li>Performance of a contract</li>
                <li>Compliance with legal obligations</li>
                <li>Legitimate uses permitted under the DPDP Act</li>
                <li>Reasonable purposes such as fraud prevention, security, and analytics</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">3. Data We Collect</h3>
              <p>We collect the following categories of personal data:</p>
              <h4 className="font-semibold text-base text-foreground/90 pl-4">3.1 Data Provided by You</h4>
              <ul className="list-disc list-inside space-y-1 pl-8">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if submitted)</li>
                <li>Organisation details (if applicable)</li>
                <li>Account credentials</li>
                <li>Uploaded content (text, files, prompts, etc.)</li>
                <li>Payment information (processed via secure third-party gateways; we do not store full card details)</li>
              </ul>
              <h4 className="font-semibold text-base text-foreground/90 pl-4">3.2 Automatically Collected Data</h4>
              <ul className="list-disc list-inside space-y-1 pl-8">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser and OS details</li>
                <li>Usage logs</li>
                <li>Cookies and tracking metadata</li>
              </ul>
              <h4 className="font-semibold text-base text-foreground/90 pl-4">3.3 Sensitive Personal Data</h4>
              <p className='pl-4'>DRISHYAA AI does not intentionally collect sensitive personal data unless voluntarily provided. Users must avoid uploading confidential or sensitive information unless required.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">4. Purpose of Data Processing</h3>
              <p>We process personal data for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Providing, operating, and improving DRISHYAA AI</li>
                <li>Authenticating users and managing accounts</li>
                <li>Personalizing AI responses and features</li>
                <li>Payment processing and billing</li>
                <li>Customer support and communication</li>
                <li>Ensuring platform safety, detection of misuse or fraud</li>
                <li>Analytics and performance optimization</li>
                <li>Compliance with legal and regulatory requirements</li>
              </ul>
              <p>We never sell your personal data.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">5. User Consent</h3>
              <p>Your consent is obtained through:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Account registration</li>
                <li>Explicit checkbox consent</li>
                <li>Continuing use after being informed of policy updates</li>
              </ul>
              <p>You may withdraw consent at any time by contacting us (Section 16).</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">6. Data Sharing & Disclosure</h3>
              <p>Your data may be shared only with:</p>
              <h4 className="font-semibold text-base text-foreground/90 pl-4">6.1 Service Providers</h4>
              <p className='pl-4'>Trusted vendors for:</p>
              <ul className="list-disc list-inside space-y-1 pl-8">
                <li>Cloud hosting</li>
                <li>Payment gateways</li>
                <li>Analytics</li>
                <li>Customer support</li>
              </ul>
              <h4 className="font-semibold text-base text-foreground/90 pl-4">6.2 Legal Compliance</h4>
              <p className='pl-4'>We may disclose data if required by:</p>
              <ul className="list-disc list-inside space-y-1 pl-8">
                <li>Law enforcement</li>
                <li>Court orders</li>
                <li>Government authorities</li>
              </ul>
              <h4 className="font-semibold text-base text-foreground/90 pl-4">6.3 Corporate Events</h4>
              <p className='pl-4'>If DRISHYAA AI undergoes merger, acquisition, or restructuring, your data may be transferred securely.</p>
              <p>We never share your data with advertisers or third parties for marketing.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">7. Cross-Border Data Transfer</h3>
              <p>If your data is transferred outside India, it is done:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Only to DPDP-approved jurisdictions</li>
                <li>With appropriate safeguards</li>
                <li>Through secure contractual and technical measures</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">8. Data Storage & Retention</h3>
              <p>Data is stored in secure cloud data centers with encryption. Retention happens only as long as required for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Service usage</li>
                <li>Legal compliance</li>
                <li>Customer support</li>
                <li>Contractual purposes</li>
              </ul>
              <p>Upon withdrawal of consent or account deletion, your data is deleted or anonymized unless retention is required by law.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">9. Data Principal Rights (Your Rights)</h3>
              <p>Under the DPDP Act, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Right to Access – Request a summary of your personal data</li>
                <li>Right to Correction – Update inaccurate or outdated data</li>
                <li>Right to Erasure – Request deletion of personal data</li>
                <li>Right to Withdraw Consent</li>
                <li>Right to Data Portability</li>
                <li>Right to Nominate – Appoint someone to manage your data in case of incapacity or death</li>
              </ul>
              <p>Contact details are provided in Section 17.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">10. Children’s Data</h3>
              <p>DRISHYAA AI is not intended for individuals under 18. We do not knowingly collect or process children’s data.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">11. Cookies & Tracking Technologies</h3>
              <p>We use cookies for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Session management</li>
                <li>User authentication</li>
                <li>Analytics</li>
                <li>Improving user experience</li>
              </ul>
              <p>Users may disable cookies via browser settings but certain features may not function.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">12. Security Measures</h3>
              <p>We implement:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Encryption (at rest + in transit)</li>
                <li>Access control and role-based authorization</li>
                <li>Secure coding practices</li>
                <li>Regular vulnerability assessments</li>
                <li>Compliance with industry-standard cybersecurity norms</li>
              </ul>
              <p>While we take all reasonable precautions, no system is 100% secure.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">13. Third-Party Services</h3>
              <p>Our Service may contain links to third-party platforms. We are not responsible for their policies or practices.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">14. AI-Generated Content Disclaimer</h3>
              <p>DRISHYAA AI generates responses using artificial intelligence. Therefore:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Output may occasionally contain inaccuracies</li>
                <li>AI-generated content must not be treated as legal, financial, or professional advice</li>
                <li>Users are responsible for reviewing and verifying generated content</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">15. Creator & Author Liability Disclaimer</h3>
              <p>DRISHYAA AI and its creator/author shall not be held responsible or liable for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Any misuse of personal data caused by user behaviour, third-party systems, or unauthorised access occurring outside DRISHYAA AI’s controlled environment</li>
                <li>Any incorrect, incomplete, or misleading interpretation of AI-generated outputs</li>
                <li>Any fraudulent activity, impersonation, or misrepresentation conducted by users or external entities</li>
                <li>Any losses, damages, or claims arising from reliance on processed data, metadata, or AI analytics</li>
                <li>Incidents caused by third-party services, hosting providers, internet failures, or external infrastructure</li>
                <li>User-side negligence, misconfiguration, or security lapses</li>
                <li>Processing of data is performed strictly on a best-effort basis, and DRISHYAA AI does not guarantee error-free performance or absolute accuracy.</li>
              </ul>
              <p>Users are solely responsible for:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Compliance with applicable laws while using the service</li>
                <li>Ensuring lawful use of processed video/data</li>
                <li>Validating AI outputs before taking action</li>
              </ul>
              <p>The creator/author provides the platform “as is” without warranties of any kind — express or implied.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">16. Policy Updates</h3>
              <p>DRISHYAA AI reserves the right to modify, amend, update, or replace this Privacy Policy and the Terms & Conditions at any time, at its sole discretion. Such changes may be made with or without prior notice, and without any obligation to inform individual users directly.</p>
              <p>Any modifications will become effective immediately upon being posted on the DRISHYAA AI website or platform. Your continued access or use of the Services after such updates shall constitute your deemed acceptance of the revised Policy and Terms.</p>
              <p>Users are encouraged to review this Policy periodically to stay informed of any changes. DRISHYAA AI shall not be responsible for any loss resulting from a user’s failure to review the updated terms.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">17. Contact Information (Data Protection Contact)</h3>
              <p>For privacy-related queries, corrections, or deletion requests:</p>
              <p>📧 aayushxidsu.11am@gmail.com</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-headline text-white">18. Governing Law & Jurisdiction</h3>
              <p>This Privacy Policy is governed under:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Digital Personal Data Protection Act, 2023</li>
                <li>IT Act, 2000</li>
                <li>Applicable Indian laws</li>
              </ul>
              <p>Jurisdiction: Nuapada, Odisha, India</p>
            </div>

            <p className="text-center font-bold pt-4">🏢 DRISHYAA AI – Xidotic</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
