import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  lang: z.enum(['en', 'es']), // Idioma del proyecto (en: inglés, es: español)
  title: z.string(),
  description: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  worksImage1: z.object({
    url: z.string(),
    alt: z.string()
  }),
  worksImage2: z.object({
    url: z.string(),
    alt: z.string()
  }),
  platform: z.string(),
  stack: z.string(),
  website: z.string(),
  github: z.string(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects: projectsCollection,
};