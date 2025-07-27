import DestinationDetailClient from "@/components/DestinationDetailClient";

export default function TelanganaDestinationPage({ params }: { params: { slug: string } }) {
  return <DestinationDetailClient slug={params.slug} />;
}
