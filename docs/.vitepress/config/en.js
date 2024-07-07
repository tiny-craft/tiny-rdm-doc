import {version} from '../../../package.json'

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
        nav: nav(),
        sidebar: {
            '/guide/': {base: '/guide', items: sidebarUserGuide()},
            '/changelog/': {base: '/changelog', items: sidebarChangelog()},
        },
        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}

function nav() {
    return [
        {text: 'Home', link: '/'},
        {text: 'User Guide', link: '/guide/', activeMatch: '/guide/'},
        {
            text: 'v' + version, items: [
                {text: 'Changelog', link: '/changelog/' + lastChangelog(), activeMatch: '/changelog/'},
            ]
        }
        // {text: 'Redis Guide', link: '#'},
        // {text: 'About', link: '#'}
    ]
}

function sidebarChangelog() {
    return [
        {
            text: 'Changelog',
            items: [
                {text: 'v1.1.14', link: '/v1.1.14'},
                {text: 'v1.1.13', link: '/v1.1.13'},
                {text: 'v1.1.12', link: '/v1.1.12'},
                {text: 'v1.1.11', link: '/v1.1.11'},
                {text: 'v1.1.10', link: '/v1.1.10'},
                {text: 'v1.1.9', link: '/v1.1.9'},
                {text: 'v1.1.8', link: '/v1.1.8'},
                {text: 'v1.1.6', link: '/v1.1.6'},
                {text: 'v1.1.5', link: '/v1.1.5'},
                {text: 'v1.1.4', link: '/v1.1.4'},
                {text: 'v1.1.2', link: '/v1.1.2'},
                {text: 'v1.1.0', link: '/v1.1.0'},
                {text: 'v1.0.9', link: '/v1.0.9'},
                {text: 'v1.0.8', link: '/v1.0.8'},
                {text: 'v1.0.7', link: '/v1.0.7'},
                {text: 'v1.0.5', link: '/v1.0.5'},
                {text: 'v1.0.4', link: '/v1.0.4'},
                {text: 'v1.0.2', link: '/v1.0.2'},
                {text: 'v1.0.1', link: '/v1.0.1'},
            ]
        },
    ]
}

function lastChangelog() {
    const clist = sidebarChangelog()
    for (const item of clist) {
        if (item.text === 'Changelog') {
            if (item.items.length > 0) {
                return item.items[0].text
            }
        }
    }
    return 'v1.0.0'
}

function sidebarUserGuide() {
    return [
        {
            text: 'User Guide',
            items: [
                {
                    text: 'Introduction',
                    items: [
                        {text: 'About Tiny RDM', link: '/'},
                        {text: 'Installation', link: '/installation'},
                    ]
                },
            ]
        },
        {
            text: 'Usage and Configuration',
            items: [
                {text: 'Connection', link: '/connection'},
                {text: 'Key Loading', link: '/key-loading/'},
                {text: 'Key Querying', link: '/filter/'},
                {text: 'Custom Decoder', link: '/custom-decoder/'},
                {text: 'Personalized', link: '/custom-config'}
            ]
        },
        {
            text: 'Other',
            items: [
                {text: 'Q&A', link: '/faq'},
                {text: 'Privacy Policy', link: '/privacy'}
            ]
        }
    ]
}
