import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    order: z.number().default(99),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    store: z.string().url().optional(),
    download: z.string().url().optional(),
    cover: z.string().optional(),
    status: z.string().optional(),
    // 타사 IP를 쓰는 팬 프로젝트는 후원 버튼을 숨겨요.
    thirdPartyIP: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
