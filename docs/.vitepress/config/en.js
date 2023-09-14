export const META_URL = 'https://rdm.tinycraft.cc'
export const META_TITLE = 'Tiny RDM'
export const META_DESCRIPTION = 'A Modern Lightweight Redis Desktop Manager.'

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
            {text: 'Update Log', link: '#'},
            {text: 'Redis Guide', link: '#'}
        ],
        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}
