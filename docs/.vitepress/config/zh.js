import fs from 'fs'
import path from 'path'

export const META_URL = 'https://redis.tinycraft.cc'
export const META_TITLE = 'Tiny RDM'
export const META_DESCRIPTION = '新一代轻量级Redis GUI,直观管理Redis数据库,支持多平台Windows、Mac和Linux系统,安装简单迅速,连接本地及远程Redis,可视化展示键值数据,快速操作键值对,内置控制台直接运行命令,数据浏览备份导出,慢日志查询,新手高级用户首选,大幅提高Redis应用开发效率。'

const versions = getAllChangelog()

export const zhConfig = {
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
            '/zh/guide/': {base: '/zh/guide', items: sidebarUserGuide()},
            '/zh/changelog/': {base: '/zh/changelog', items: sidebarChangelog(versions)},
        },
        footer: {
            message: '友情链接 <a href="https://xterminal.cn/">XTerminal</a> | <a href="https://www.zlpj.com/" title="探索AI与数字未来" target="_blank">竹林品鉴</a> | <a href="https://ch2report.com/" target="_blank">Chat2Report</a> | <a href="https://tempmail100.com" target="_blank">Temp Mail</a> | <a href="https://stardots.io/" target="_blank">Star Dots</a><br/><br/>基于GPL-3.0开源许可协议',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}

function nav(version = 'v1.0.0') {
    return [
        {text: '主页', link: '/zh/'},
        {text: '使用指南', link: '/zh/guide/', activeMatch: '/zh/guide/'},
        {
            text: version, items: [
                {text: '更新日志', link: '/zh/changelog/' + version, activeMatch: '/zh/changelog/'},
            ]
        },
        // {text: 'Redis指南', link: '#'},
        // {text: '关于', link: '#'}
    ]
}

function getAllChangelog() {
    const changelogDir = path.join(__dirname, '../../', 'zh', 'changelog')
    let files = fs.readdirSync(changelogDir)
    return files.map(file => {
        return file.replace(/\.md$/, '')
    }).sort((a, b) => {
        return b.localeCompare(a, undefined, {numeric: true, sensitivity: 'base'})
    })
}

function sidebarChangelog() {
    return [
        {
            text: '更新日志',
            // collapsed: false,
            items: versions.map(v => {
                return {text: v, link: '/' + v}
            })
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

function sidebarUserGuide() {
    return [
        {
            text: '简介',
            items: [
                {text: '关于Tiny RDM', link: '/'},
                {text: '安装使用', link: '/installation'},
            ]
        },
        {
            text: '用法和配置',
            items: [
                {text: '连接服务器', link: '/connection'},
                {text: '键加载', link: '/key-loading/'},
                {text: '键查询', link: '/filter/'},
                {text: '自定义解码', link: '/custom-decoder/'},
                {text: '个性化配置', link: '/custom-config'}
            ]
        },
        {
            text: '其他',
            items: [
                {text: '常见问题', link: '/faq'},
                {text: '隐私政策', link: '/privacy'}
            ]
        }
    ]
}
