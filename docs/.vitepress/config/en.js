export const META_URL = 'https://redis.tinycraft.cc'
export const META_TITLE = 'Tiny RDM'
export const META_DESCRIPTION = 'Modern lightweight Redis GUI desktop manager, intuitive Redis database administration, supports multi-platform Windows, Mac and Linux, easy fast installation, connect local and remote Redis, visualize key-value data, quickly operate on keys and values, built-in console to execute commands directly, data browsing and export, slow log query, perfect for beginners and experts alike, tremendously improves Redis application development efficiency.'

export const enConfig = {
    description: META_DESCRIPTION,
    head: [
        ['meta', {property: 'og:url', content: META_URL}],
        ['meta', {property: 'og:description', content: META_DESCRIPTION}],
        ['meta', {property: 'twitter:url', content: META_URL}],
        ['meta', {property: 'twitter:title', content: META_TITLE}],
        ['meta', {property: 'twitter:description', content: META_DESCRIPTION}],
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Changelog', link: '#'},
            {text: 'Redis Guide', link: '#'},
            {text: 'About', link: '#'}
        ],
        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}
