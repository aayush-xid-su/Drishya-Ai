'use client';

import { DpaDialog } from './dpa-dialog';
import { TncDialog } from './tnc-dialog';
import { ImprintDialog } from './imprint-dialog';
import { DataPrivacyDialog } from './data-privacy-dialog';

export default function MarqueeFooter() {
  return (
    <div className="bg-black text-white py-4 px-4 font-body overflow-x-hidden">
      <div className="container mx-auto">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-sm mb-2 gap-4">
          <p className="text-center md:text-left">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://github.com/aayush-xid-su"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              aayush_xid_su
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-neutral-400">
            <DpaDialog>
              <a href="#" className="hover:text-white transition-colors">DPA</a>
            </DpaDialog>
            <TncDialog>
              <a href="#" className="hover:text-white transition-colors">T&C</a>
            </TncDialog>
            <ImprintDialog>
              <a href="#" className="hover:text-white transition-colors">IMPRINT</a>
            </ImprintDialog>
            <DataPrivacyDialog>
              <a href="#" className="hover:text-white transition-colors">DATA PRIVACY</a>
            </DataPrivacyDialog>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-headline font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[14rem] leading-none uppercase whitespace-nowrap">
            DRISHYAA AI
          </h1>
        </div>
      </div>
    </div>
  );
}
