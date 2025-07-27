import DestinationDetailClient from "@/components/DestinationDetailClient";

export default function IndiaDestinationPage({ params }: { params: { slug: string } }) {
  return <DestinationDetailClient slug={params.slug} />;
}
