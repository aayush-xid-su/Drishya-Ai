'use client';

import { OurStoryDialog } from '@/components/our-story-dialog';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarqueeFooter from '@/components/marquee-footer';

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dots">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <OurStoryDialog>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 cursor-pointer hover:underline">
              Our Story
            </h1>
          </OurStoryDialog>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
            Click above to read about our strategic partnership and the story behind DRISHYAA AI.
          </p>
        </div>
      </main>
      <Footer />
      <MarqueeFooter />
    </div>
  );
}
