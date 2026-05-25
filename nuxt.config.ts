export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

  app: {
    baseURL: '/hengxing-resume/',
    head: {
      title: '恒星 | AI赋能传统企业转型专家',
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '恒星 — 13年复合经验，专注AI赋能传统企业转型。深耕电子行业项目管理、供应链管理与AI应用开发。' },
        { name: 'keywords', content: 'AI赋能,企业转型,项目管理,供应链管理,Java开发,Prompt Engineering,RAG,LLM,恒星' },
        { property: 'og:title', content: '恒星 | AI赋能传统企业转型专家' },
        { property: 'og:description', content: '13年复合经验，专注AI赋能传统企业转型。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/hengxing-resume/githab_view.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: '恒星 | AI赋能传统企业转型专家' },
        { name: 'twitter:description', content: '13年复合经验，专注AI赋能传统企业转型。' },
        { name: 'twitter:image', content: '/hengxing-resume/githab_view.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/hengxing-resume/githab_view.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Sans+SC:wght@300;400;500&display=swap',
        },
      ],
    },
  },

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/global.css',
  ],

  generate: {
    routes: ['/'],
  },

  vite: {
    build: {
      target: 'esnext',
    },
  },
})
