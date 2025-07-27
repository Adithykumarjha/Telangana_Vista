import DestinationCard from '@/components/DestinationCard';
import { indiaDestinations } from '@/lib/destinations';

export const metadata = {
  title: 'Incredible India Destinations | Telangana Vista',
  description: 'Explore prominent tourist places from all over India.',
};

export default function IndiaPage() {
  return (
    <section>
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
          Incredible India
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A glimpse into the diverse and breathtaking landscapes of India.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {indiaDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
