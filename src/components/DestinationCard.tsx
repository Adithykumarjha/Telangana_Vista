'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Destination } from '@/lib/destinations';
import { useLanguage } from '@/contexts/LanguageContext';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const { language } = useLanguage();

  return (
    <Link href={`/destinations/${destination.type}/${destination.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary">
        <div className="relative h-48 w-full">
          <Image
            src={destination.image}
            alt={destination.name[language]}
            data-ai-hint={destination.dataAiHint}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl">{destination.name[language]}</CardTitle>
           <div className="flex flex-wrap gap-2 pt-2">
            {destination.regionTags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{destination.description[language]}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
