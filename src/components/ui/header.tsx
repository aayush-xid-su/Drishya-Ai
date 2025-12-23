import { FileText, Info, Moon, Menu } from 'lucide-react';
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
} from "@/components/ui/sheet"


export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-xl font-bold">DRISHYAA AI</h1>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/detection" className="hover:text-primary">Detection</Link>
            <Link href="/tools" className="hover:text-primary">Tools</Link>
            <Link href="/author" className="hover:text-primary">Author</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
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
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 text-lg font-medium mt-8">
                  <Link href="/" className="hover:text-primary">Home</Link>
                  <Link href="/detection" className="hover:text-primary">Detection</Link>
                  <Link href="/tools" className="hover:text-primary">Tools</Link>
                  <Link href="/author" className="hover:text-primary">Author</Link>
                </nav>
                 <div className="mt-auto flex flex-col gap-2 pt-8">
                    <AboutDialog />
                    <TermsDialog />
                    <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
