export const META_URL = 'https://redis.tinycraft.cc'
export const META_TITLE = 'Tiny RDM'
export const META_DESCRIPTION = '新一代轻量级Redis GUI,直观管理Redis数据库,支持多平台Windows、Mac和Linux系统,安装简单迅速,连接本地及远程Redis,可视化展示键值数据,快速操作键值对,内置控制台直接运行命令,数据浏览备份导出,慢日志查询,新手高级用户首选,大幅提高Redis应用开发效率。'

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
        nav: [
            {text: '主页', link: '/zh/'},
            {text: '用户手册', link: '#'},
            {text: '更新日志', link: '/zh/changelog/' + lastChangelog(), activeMatch: '/zh/changelog/'},
            // {text: 'Redis指南', link: '#'},
            // {text: '关于', link: '#'}
        ],
        sidebar: {
            '/zh/changelog/': {base: '/zh/changelog/', items: sidebarChangelog()},
        },
        footer: {
            message: '基于GPL-3.0开源许可协议',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}

function sidebarChangelog() {
    return [
        {
            text: '更新日志',
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
