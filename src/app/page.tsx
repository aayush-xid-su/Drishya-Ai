import Header from '@/components/header';
import LandingPage from '@/components/landing-page';
import Footer from '@/components/footer';
import MarqueeFooter from '@/components/marquee-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dots">
      <Header />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
      <MarqueeFooter />
    </div>
  );
}
