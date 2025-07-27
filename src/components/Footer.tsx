import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';

const QRCodePlaceholder = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="128" height="128" rx="8" fill="white" />
    <rect x="20" y="20" width="32" height="32" fill="black" />
    <rect x="26" y="26" width="20" height="20" fill="white" />
    <rect x="76" y="20" width="32" height="32" fill="black" />
    <rect x="82" y="26" width="20" height="20" fill="white" />
    <rect x="20" y="76" width="32" height="32" fill="black" />
    <rect x="26" y="82" width="20" height="20" fill="white" />
    <rect x="64" y="64" width="8" height="8" fill="black" />
    <rect x="84" y="60" width="8" height="8" fill="black" />
    <rect x="60" y="84" width="8" height="8" fill="black" />
    <path
      d="M92 76H108V92H92V76Z"
      fill="black"
    />
    <path d="M76 92H92V108H76V92Z" fill="black" />
    <path
      d="M92 92H108V108H92V92Z"
      fill="black"
    />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Logo className="h-10 w-10 text-primary" />
              <span className="ml-2 text-xl font-bold font-headline">Telangana Vista</span>
            </div>
            <p className="mt-4 max-w-xs text-sm">
              Your comprehensive guide to exploring the rich cultural heritage of Telangana and beyond.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div className="text-sm">
              <p className="font-bold font-headline">Explore</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="/" className="hover:text-primary transition">Home</Link>
                <Link href="/destinations/telangana" className="hover:text-primary transition">Telangana</Link>
                <Link href="/destinations/india" className="hover:text-primary transition">India</Link>
                <Link href="/submit-experience" className="hover:text-primary transition">Submit Story</Link>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline">Contact</p>
              <div className="mt-4 flex flex-col space-y-2">
                <a href="mailto:contact@telanganavista.com" className="hover:text-primary transition">contact@telanganavista.com</a>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline">Follow Us</p>
              <div className="mt-4 flex items-center space-x-4">
                <div>
                  <QRCodePlaceholder className="h-20 w-20" />
                  <p className="mt-1 text-xs text-center">WhatsApp</p>
                </div>
                <div>
                   <QRCodePlaceholder className="h-20 w-20" />
                  <p className="mt-1 text-xs text-center">Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Telangana Vista. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
