import {defineConfig} from 'vitepress'
import {zhConfig} from './config/zh'
import {enConfig} from './config/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Tiny RDM",
    description: "Tiny RDM Doc Site",
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/images/appicon.png'}],
        ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-KWTD0BYWRK'}],
        ['script', {}, `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-KWTD0BYWRK');`]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/images/logo.svg',
        siteTitle: 'Tiny RDM',

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/tiny-craft/tiny-rdm'}
        ]
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            ...enConfig
        },
        zh: {
            label: '中文',
            lang: 'zh',
            ...zhConfig
        },
    },
})
