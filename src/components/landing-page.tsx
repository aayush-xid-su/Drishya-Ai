'use client';

import { Button } from '@/components/ui/button';
import { ArrowRightIcon, PlayIcon } from '@radix-ui/react-icons';
import WhyChooseUs from './why-choose-us';
import HowItWorks from './how-it-works';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-20 text-center relative">
        <div className="absolute inset-0 bg-dots -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent -z-10"></div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tighter">
          DRISHYAA AI
        </h1>
        <div className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 space-y-4">
          <p className="font-bold">The Future of Real-Time Vision Intelligence</p>
          <p>
            DRISHYAA AI delivers next-generation real-time vision analysis with
            exceptional accuracy, speed, and privacy.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold" asChild>
            <Link href="/detection">
              <PlayIcon className="mr-2" />
              Start Detection
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="font-bold" asChild>
            <Link href="/author">
              Author
              <ArrowRightIcon className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
