'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { allDestinations, Destination } from '@/lib/destinations';
import { useLanguage } from '@/contexts/LanguageContext';
import { addStory } from '@/lib/stories';
import { Loader2 } from 'lucide-react';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  destination: z.string({ required_error: 'Please select a destination.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }).max(1000, { message: 'Description must be less than 1000 characters.' }),
  photo: z.any().optional(),
});

export default function SubmitExperienceForm() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // In a real app, you would upload the photo to a storage service.
    // Here, we'll just simulate it.
    await new Promise(resolve => setTimeout(resolve, 1500));

    addStory({
      destinationId: values.destination,
      name: values.name,
      story: values.description,
    });
    
    setIsSubmitting(false);
    toast({
      title: 'Submission Successful!',
      description: 'Thank you for sharing your experience. Your story is now live!',
      variant: 'default',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination Name</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {allDestinations.map((dest: Destination) => (
                    <SelectItem key={dest.id} value={dest.id}>
                      {dest.name[language]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Experience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your trip..."
                  className="resize-y min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Share your story in Telugu or English.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload a Photo (Optional)</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" {...form.register('photo')} />
              </FormControl>
              <FormDescription>
                Your photo will appear alongside your story.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full" disabled={isSubmitting}>
           {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
           {isSubmitting ? 'Submitting...' : 'Submit Experience'}
        </Button>
      </form>
    </Form>
  );
}
