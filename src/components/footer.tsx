'use client';

import { ArrowRight } from 'lucide-react';
import { OurStoryDialog } from './our-story-dialog';
import { PartnershipDialog } from './partnership-dialog';
import { SponsorshipDialog } from './sponsorship-dialog';
import { DataPrivacyDialog } from './data-privacy-dialog';
import { TncDialog } from './tnc-dialog';

const socialLinks = [
  { name: 'LINKEDIN', href: 'https://linkedin.com/in/ayushdas-11am' },
  { name: 'INSTAGRAM', href: 'https://instagram.com/aayush_xid_su' },
  { name: 'TWITTER', href: 'https://x.com/aayushxidsu' },
  { name: 'GITHUB', href: 'https://github.com/aayush-xid-su' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white font-body">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-headline mb-4">DRISHYAA AI</h2>
            <p className="text-neutral-400 mb-4 max-w-xs">
              Experience a unified platform that seamlessly integrates object detection, face landmarks, hand gesture recognition, pose estimation, and more — all running locally with zero data leakage.
            </p>
            <p className="text-xs text-neutral-500">©2026 DRISHYAA AI. All rights reserved</p>
          </div>

          <div>
            <h3 className="font-bold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <DataPrivacyDialog>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </DataPrivacyDialog>
              </li>
              <li>
                <TncDialog>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </TncDialog>
              </li>
              <li><a href="mailto:aayushxidsu.11am@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline mb-4">COMPANY</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <OurStoryDialog>
                  <a href="#" className="hover:text-white transition-colors">our story</a>
                </OurStoryDialog>
              </li>
              <li>
                <PartnershipDialog>
                  <a href="#" className="hover:text-white transition-colors">partnership</a>
                </PartnershipDialog>
              </li>
              <li>
                <SponsorshipDialog>
                  <a href="#" className="hover:text-white transition-colors">sponsorship</a>
                </SponsorshipDialog>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline mb-4">Contact</h3>
            <div className="text-neutral-300 space-y-2">
              <p>aayushxidsu.11am@gmail.com</p>
              <p>+917894038559</p>
              <p>Nuapada, ODISHA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-headline hover:text-primary transition-colors">
                        {link.name}
                        <ArrowRight className="h-4 w-4" />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
