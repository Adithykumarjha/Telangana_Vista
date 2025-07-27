import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                  Mana Telangana
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                  Discover the Essence of Telangana
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore the heritage from Charminar to Kakatiya. A journey through the rich history and vibrant culture of Telangana.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/destinations/telangana">
                    Explore Telangana
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/destinations/india">
                    Explore India
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1551161242-b5af797b7233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxDaGFybWluYXJ8ZW58MHx8fHwxNzUzNjA1MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="charminar monument"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Why Explore With Us?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a curated experience, blending historical insights with practical travel tips to make your journey unforgettable.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/20 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-xl font-bold font-headline">Curated Destinations</h3>
                <p className="text-muted-foreground">Handpicked locations showcasing the best of culture and nature.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-full bg-accent/20 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m16.2 7.8-2.2 2.2-2.2-2.2L7.8 12l2.2 2.2-2.2 2.2L12 16.2l2.2-2.2 2.2 2.2 2.2-2.2-2.2-2.2 2.2-2.2-4-4.4z"/></svg>
                </div>
                <h3 className="text-xl font-bold font-headline">Cultural Insights</h3>
                <p className="text-muted-foreground">Deep dive into the history and traditions of each place.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/20 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M11 5h8.527a2 2 0 0 1 1.933 2.508l-2.433 9A2 2 0 0 1 17.06 18H8.269a2 2 0 0 1-1.933-2.508l2.433-9A2 2 0 0 1 10.736 5H11Zm-3.5 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M4 21V6a2 2 0 0 1 2-2h2.264a2 2 0 0 1 1.933 1.492l.84 3.016a2 2 0 0 0 1.933 1.492H13"/></svg>
                </div>
                <h3 className="text-xl font-bold font-headline">Community Stories</h3>
                <p className="text-muted-foreground">Share your experiences and read tales from fellow travelers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
