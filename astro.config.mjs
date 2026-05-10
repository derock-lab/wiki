// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'دانشنامه کارگاه فنّاوری دِراک',
			customCss: ["./src/styles/wiki-rtl.css"],
      social: [
        {
          icon: 'gitlab',
          label: 'Chabokan Gitlab',
          href: 'https://gitlab.chabokan.net/derock.ir/wiki',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'فارسی',
          lang: 'fa-IR',
        },
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
