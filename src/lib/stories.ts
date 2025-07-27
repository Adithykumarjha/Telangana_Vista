
export interface Story {
  id: string;
  destinationId: string;
  name: string;
  story: string;
  photo?: string;
  photoHint?: string;
}

// In a real application, this would be a database.
export let stories: Story[] = [
  {
    id: '1',
    destinationId: 'charminar',
    name: 'Anusha P.',
    story: "Visiting Charminar was a dream come true! The energy of the Old City is electric. I climbed to the top for a stunning view and then spent hours shopping for bangles in Laad Bazaar. The Hyderabadi biryani at a nearby restaurant was the perfect end to a perfect day. A must-visit for anyone coming to Hyderabad!",
    photo: 'https://images.unsplash.com/photo-1598459959669-87c22a498a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWxlcnxlbnwwfHx8fDE3NTM2NjM5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    photoHint: 'female traveler'
  },
  {
    id: '2',
    destinationId: 'goa-beaches',
    name: 'Rohan S.',
    story: "Goa is pure bliss. I spent a week hopping from the vibrant beaches of North Goa to the serene shores of the South. The sunsets at Palolem beach are something I'll never forget. The seafood is incredibly fresh and the people are so friendly. Can't wait to go back!",
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0cmF2ZWxlcnxlbnwwfHx8fDE3NTM2NjM5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    photoHint: 'male traveler'
  },
];

export function getStoriesForDestination(destinationId: string): Story[] {
  return stories.filter(story => story.destinationId === destinationId);
}

export function addStory(story: Omit<Story, 'id'>): Story {
  const newStory = { ...story, id: Date.now().toString() };
  stories.unshift(newStory);
  return newStory;
}
