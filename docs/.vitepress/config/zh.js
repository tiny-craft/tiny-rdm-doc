export const META_URL = 'https://rdm.tinycraft.cc'
export const META_TITLE = 'Tiny RDM'
export const META_DESCRIPTION = '一个现在化的轻量Redis桌面管理工具'

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
            {text: '主页', link: '/'},
            {text: '更新日志', link: '#'},
            {text: 'Redis指南', link: '#'}
        ],
        footer: {
            message: '基于GPL-3.0开源许可协议',
            copyright: 'Copyright © 2023-present Tiny Craft'
        }
    }
}
