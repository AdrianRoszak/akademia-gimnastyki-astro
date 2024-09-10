import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'
import sanity from '@sanity/astro'
import { loadEnv } from 'vite'

import icon from 'astro-icon'

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_API_VERSION, PUBLIC_SANITY_DATASET, SANITY_API_TOKEN } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  '',
)

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  prefetch: true,
  integrations: [
    icon(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      token: SANITY_API_TOKEN,
      useCdn: false,
    }),
  ],
})
