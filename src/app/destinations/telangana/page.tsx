import DestinationCard from '@/components/DestinationCard';
import { telanganaDestinations } from '@/lib/destinations';

export const metadata = {
  title: 'Telangana Destinations | Telangana Vista',
  description: 'Explore the iconic tourist destinations of Telangana.',
};

export default function TelanganaPage() {
  return (
    <section>
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
          Telangana Destinations
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          From ancient forts to modern marvels, discover the treasures of Telangana.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {telanganaDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
