'use client';

import { Loader2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarqueeFooter from '@/components/marquee-footer';

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dots">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
            <Loader2 className="w-16 h-16 text-primary animate-spin mb-4 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                Tools Coming Soon!
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                This section is under development. Please check back later for new and exciting tools.
            </p>
        </div>
      </main>
      <Footer />
      <MarqueeFooter />
    </div>
  );
}
