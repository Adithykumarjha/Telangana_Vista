import DestinationDetailClient from "@/components/DestinationDetailClient";
import { getDestinationBySlug } from "@/lib/destinations";
import { notFound } from "next/navigation";

export default function TelanganaDestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }
  
  return <DestinationDetailClient destination={destination} />;
}
