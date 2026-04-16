import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Yohan AI Dictionary 프론트매터 확장
// - status: 문서 수명주기 (draft → review → stable → deprecated)
// - source: memory/wiki/ 원천 파일 경로 (SoT 단일화 제약, 티켓 002)
// - updated: 최근 수정일 (Verified 갱신 추적)
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        status: z
          .enum(['draft', 'review', 'stable', 'deprecated'])
          .optional()
          .default('draft'),
        source: z.string().optional(),
        updated: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  }),
};
