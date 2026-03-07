import {defineCollection, z} from 'astro:content';

const legal = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
});

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        created: z.date(),
        updated: z.date().optional(),
        tags: z.array(z.string()).default([]),
        status: z.enum(['public', 'draft']),
    }),
});

export const collections = {legal, blog};
