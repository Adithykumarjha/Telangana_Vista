import SubmitExperienceForm from '@/components/SubmitExperienceForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Submit Your Experience | Telangana Vista',
  description: 'Share your travel stories and photos with the Telangana Vista community.',
};

export default function SubmitExperiencePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
       <Card>
        <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                Share Your Story
            </CardTitle>
            <CardDescription className="text-muted-foreground md:text-xl/relaxed">
                Your journey could be the inspiration for someone else's next adventure.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <SubmitExperienceForm />
        </CardContent>
       </Card>
    </div>
  );
}
