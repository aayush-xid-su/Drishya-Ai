'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, User } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MarqueeFooter from '@/components/marquee-footer';

export default function AuthorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dots">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            About the Author
          </h1>
          <p className="text-lg text-foreground/60 mb-12">
            A little bit about the creator of this application.
          </p>
          <div className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-xl p-8 md:p-12 shadow-lg w-full max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4 border-2 border-accent/50">
                <AvatarFallback className="bg-card text-2xl font-bold">
                  AD
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold text-white">Ayush Das</h2>
              <p className="text-accent font-medium mt-1">
                cybersecurity enthusiast
              </p>
              <p className="mt-6 text-foreground/80 max-w-md mx-auto">
                I am a passionate cybersecurity enthusiast and web developer with a
                love for creating innovative and impactful applications. Just a
                boy who loves to play with code and always does nerdshit 😎
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button variant="outline" asChild>
                  <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://ayush11profile.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <User className="mr-2" />
                    Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MarqueeFooter />
    </div>
  );
}
