import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bible Reader",
  description: "Home of the Bible Reader app",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon-48.webp',

    sidebar: [
      {
        text: 'Overview',
        link: './',
      },
      {
        text: 'Domain services',
        link: '/docs/dns.md',
      },
      {
        text: 'Logo',
        link: '/docs/logo.md',
      },
      {
        text: 'Build app',
        link: '/docs/build-app.md',
      },
      {
        text: 'Assets (icon & splash)',
        link: '/docs/app-icon-splash-screens.md',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/christian-coder-org/bible-reader' }
    ],
    externalLinkIcon: true,
  }
})
