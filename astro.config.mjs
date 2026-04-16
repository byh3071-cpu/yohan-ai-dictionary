// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Yohan AI Dictionary',
      description: '나만의 Verified AI 용어 사전 — memory/wiki/ 원천 연동',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '한국어',
          lang: 'ko',
        },
      },
      sidebar: [
        {
          label: '시작',
          items: [
            { label: '홈', link: '/' },
          ],
        },
        {
          label: 'AI 용어',
          autogenerate: { directory: 'terms' },
        },
      ],
    }),
  ],
});
