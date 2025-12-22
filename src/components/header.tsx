import { FileText, Info, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { AboutDialog } from './about-dialog';
import { TermsDialog } from './terms-dialog';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/detection", label: "Detection" },
  { href: "/tools", label: "Tools" },
  { href: "/author", label: "Author" },
];

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-xl font-bold">DRISHYAA AI</h1>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <AboutDialog />
          <TermsDialog />
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation links and application settings.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-4 text-lg font-medium mt-8">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="hover:text-primary transition-colors py-2">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2">
                  <AboutDialog />
                  <TermsDialog />
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
