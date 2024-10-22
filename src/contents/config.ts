
import {z, defineCollection} from 'astro:content';

type Project = {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  worksImage1: {
    url: string;
    alt: string;
  };
  worksImage2: {
    url: string;
    alt: string;
  };
  platform: string;
  stack: string;
  website: string;
  github: string;
};

const ProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
  }),
});


export const collections = {
  projects : ProjectsCollection
};