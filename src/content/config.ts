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
        tags: z.preprocess(
            (val) => (val === null ? [] : val),
            z.array(z.string()).default([])
        ),
        published: z.boolean().default(false),
    }),
});

export const collections = {legal, blog};
