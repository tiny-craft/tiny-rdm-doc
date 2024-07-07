import {version} from '../../../package.json'
import fs from 'fs'
import path from 'path'

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
    const changelogDir = path.join(__dirname, '../../', 'changelog')
    let files = fs.readdirSync(changelogDir)
    const items = files.map(file => {
        const name = file.replace(/\.md$/, '')
        return {text: name, link: '/' + name}
    }).sort((a, b) => {
        return b.text.localeCompare(a.text, undefined, {numeric: true, sensitivity: 'base'})
    })

    return [
        {
            text: 'Changelog',
            items: items
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
