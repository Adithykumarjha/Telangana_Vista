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
import { Car, Utensils, Clock, Hotel, Lightbulb, Ticket } from 'lucide-react';

export default function IndiaDestinationPage() {
  const params = useParams();
  const slug = params.slug as string;
  const destination = getDestinationBySlug(slug);
  const { language } = useLanguage();

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
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Car size={20}/>Transportation</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.transportation[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Hotel size={20}/>Accommodation</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.accommodation[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-headline text-xl flex items-center gap-2"><Ticket size={20}/>Attraction Details</AccordionTrigger>
              <AccordionContent className="text-base">
                {destination.attractionDetails[language]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
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
        </CardContent>
      </Card>
    </div>
  );
}
