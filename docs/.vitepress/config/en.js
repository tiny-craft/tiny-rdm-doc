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
            {text: 'User Guide', link: '#'},
            {text: 'Changelog', link: '/changelog/' + lastChangelog(), activeMatch: '/changelog/'},
            {text: 'Redis Guide', link: '#'},
            {text: 'About', link: '#'}
        ],
        sidebar: {
            '/changelog/': {base: '/changelog/', items: sidebarChangelog()},
        },
        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}

function sidebarChangelog() {
    return [
        {
            text: 'Changelog',
            collapsed: false,
            items: [
                {text: 'v1.1.9', link: 'v1.1.9'},
                {text: 'v1.1.8', link: 'v1.1.8'},
                {text: 'v1.1.6', link: 'v1.1.6'},
                {text: 'v1.1.5', link: 'v1.1.5'},
                {text: 'v1.1.4', link: 'v1.1.4'},
                {text: 'v1.1.2', link: 'v1.1.2'},
                {text: 'v1.1.0', link: 'v1.1.0'},
                {text: 'v1.0.9', link: 'v1.0.9'},
                {text: 'v1.0.8', link: 'v1.0.8'},
                {text: 'v1.0.7', link: 'v1.0.7'},
                {text: 'v1.0.5', link: 'v1.0.5'},
                {text: 'v1.0.4', link: 'v1.0.4'},
                {text: 'v1.0.2', link: 'v1.0.2'},
                {text: 'v1.0.1', link: 'v1.0.1'},
            ]
        },
    ]
}

function lastChangelog() {
    const clist = sidebarChangelog()
    for (const item of clist) {
        if (item.text === '更新日志') {
            if (item.items.length > 0) {
                return item.items[0].text
            }
        }
    }
    return 'v1.0.0'
}
