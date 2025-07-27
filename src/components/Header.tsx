'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mountain } from 'lucide-react';

import { useLanguage, Language } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/destinations/telangana', label: 'Telangana' },
  { href: '/destinations/india', label: 'India' },
  { href: '/submit-experience', label: 'Submit Experience' },
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? 'te' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center">
          <Logo className="h-8 w-8 text-primary" />
          <span className="ml-2 hidden font-bold font-headline sm:inline-block">
            Telangana Vista
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="language-toggle" className={cn(language === 'en' ? 'text-primary font-bold' : 'text-muted-foreground')}>EN</Label>
            <Switch
              id="language-toggle"
              checked={language === 'te'}
              onCheckedChange={handleLanguageChange}
              aria-label="Toggle language between English and Telugu"
            />
            <Label htmlFor="language-toggle" className={cn(language === 'te' ? 'text-primary font-bold' : 'text-muted-foreground')}>TE</Label>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/" className="mr-6 flex items-center">
                  <Logo className="h-8 w-8 text-primary" />
                  <span className="ml-2 font-bold font-headline">Telangana Vista</span>
                </Link>
                <nav className="grid gap-2 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'flex items-center gap-4 px-2.5 transition-colors hover:text-foreground/80',
                         pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
