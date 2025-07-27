'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getDestinationBySlug } from '@/lib/destinations';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Utensils, Clock, Hotel, Lightbulb, Ticket, UserCircle2 } from 'lucide-react';
import { getStoriesForDestination, Story } from '@/lib/stories';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';


function RecentStories({ destinationId }: { destinationId: string }) {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    // This will run on the client after hydration, ensuring stories are fresh
    setStories(getStoriesForDestination(destinationId));
  }, [destinationId]);


  if (stories.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-headline font-bold mb-4">Recent Stories</h2>
      <div className="space-y-6">
        {stories.map((story) => (
          <Card key={story.id}>
             <CardContent className="p-6 flex gap-6">
                <Avatar className="h-16 w-16 hidden sm:flex">
                  {story.photo ? (
                    <AvatarImage src={story.photo} alt={story.name} data-ai-hint={story.photoHint} />
                  ) : (
                    <UserCircle2 className="h-16 w-16 text-muted-foreground" />
                  )}
                  <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                </Avatar>
               <div className="flex-1">
                 <h3 className="font-bold font-headline text-lg">{story.name}</h3>
                 <p className="text-muted-foreground mt-2 text-base">{story.story}</p>
               </div>
             </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


export default function DestinationDetailClient({ slug }: { slug: string }) {
  const destination = getDestinationBySlug(slug);
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <div className="relative w-full h-96">
          <Image
            src={destination.image}
            alt={destination.name[language]}
            data-ai-hint={destination.dataAiHint}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h1 className="text-4xl font-headline font-bold mb-2 text-primary">{destination.name[language]}</h1>
          <p className="text-lg text-muted-foreground mb-6">{destination.description[language]}</p>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-headline text-xl">Historical Significance</AccordionTrigger>
              <AccordionContent className="text-base whitespace-pre-line">
                {destination.historicalSignificance[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Clock size={20}/>Best Time to Visit</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.bestTimeToVisit[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Utensils size={20}/>Local Cuisine</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.localCuisine[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-headline text-xl">Cultural Events</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.culturalEvents[language]}
              </AccordionContent>
            </AccordionItem>
             {destination.distanceFromHyderabad && destination.type === 'telangana' && (
               <AccordionItem value="item-5">
                <AccordionTrigger className="font-headline text-xl">Distance from Hyderabad</AccordionTrigger>
                <AccordionContent className="text-base">
                  {destination.distanceFromHyderabad}
                </AccordionContent>
              </AccordionItem>
             )}
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Car size={20}/>Transportation</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.transportation[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Hotel size={20}/>Accommodation</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.accommodation[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Ticket size={20}/>Attraction Details</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.attractionDetails[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Lightbulb size={20}/>Insider Tips</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.insiderTips[language]}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {destination.extraImages.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-headline font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destination.extraImages.map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={img.url} alt={`${destination.name[language]} gallery image ${index + 1}`} data-ai-hint={img.hint} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {isMounted && <RecentStories destinationId={destination.id} />}

        </CardContent>
      </Card>
    </div>
  );
}
