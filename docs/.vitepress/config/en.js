import fs from 'fs'
import path from 'path'

export const META_URL = 'https://redis.tinycraft.cc'
export const META_TITLE = 'Tiny RDM'
export const META_DESCRIPTION = 'Modern lightweight Redis GUI desktop manager, intuitive Redis database administration, supports multi-platform Windows, Mac and Linux, easy fast installation, connect local and remote Redis, visualize key-value data, quickly operate on keys and values, built-in console to execute commands directly, data browsing and export, slow log query, perfect for beginners and experts alike, tremendously improves Redis application development efficiency.'

const versions = getAllChangelog()

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
        nav: nav(versions[0]),
        sidebar: {
            '/guide/': {base: '/guide', items: sidebarUserGuide()},
            '/changelog/': {base: '/changelog', items: sidebarChangelog(versions)},
        },
        footer: {
            message: 'Links: <a href="https://xterminal.cn/">XTerminal</a> | <a href="https://www.zlpj.com/" title="Exploring AI and the Digital Future" target="_blank">Bamboo Forest Tasting</a> | <a href="https://ch2report.com/" target="_blank">Chat2Report</a> | <a href="https://tempmail100.com" target="_blank">Temp Mail</a> | <a href="https://stardots.io/" target="_blank">Star Dots</a><br/><br/>Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}

function nav(version = 'v1.0.0') {
    return [
        {text: 'Home', link: '/'},
        {text: 'User Guide', link: '/guide/', activeMatch: '/guide/'},
        {
            text: version, items: [
                {text: 'Changelog', link: '/changelog/' + version, activeMatch: '/changelog/'},
            ]
        }
        // {text: 'Redis Guide', link: '#'},
        // {text: 'About', link: '#'}
    ]
}

function getAllChangelog() {
    const changelogDir = path.join(__dirname, '../../', 'changelog')
    let files = fs.readdirSync(changelogDir)
    return files.map(file => {
        return file.replace(/\.md$/, '')
    }).sort((a, b) => {
        return b.localeCompare(a, undefined, {numeric: true, sensitivity: 'base'})
    })
}

function sidebarChangelog(versions) {
    return [
        {
            text: 'Changelog',
            items: versions.map(v => {
                return {text: v, link: '/' + v}
            })
        },
    ]
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
