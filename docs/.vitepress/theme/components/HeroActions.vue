<script setup>
import {computed} from 'vue'
import {useData} from 'vitepress'
import Windows from './icon/Windows.vue'
import Apple from './icon/Apple.vue'
import Linux from './icon/Linux.vue'
import {version} from '../../../../package.json'

const {lang} = useData()

const actionDescText = computed(() => {
    switch (lang.value) {
        case 'zh':
            return '🔥由超大带宽的雨云提供CDN赞助'
        default:
            return '🔥 CDN Sponsorship Provided by Yuyun'
    }
})

const downloadText = computed(() => {
    switch (lang.value) {
        case 'zh':
            return '下载安装'
        default:
            return 'Download'
    }
})

const viewText = computed(() => {
    switch (lang.value) {
        case 'zh':
            return '进入Github'
        default:
            return 'View On GitHub'
    }
})

const downloadMenu = computed(() => {
    switch (lang.value) {
        case 'zh':
            return [
                {
                    text: 'Windows x64安装包 (.exe)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_x64.exe`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'setup',
                    eventArch: 'x64',
                    eventLang: 'zh'
                },
                {
                    text: 'Windows x64绿色版 (.zip)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_x64.zip`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'portable',
                    eventArch: 'x64',
                    eventLang: 'zh'
                },
                {
                    text: 'Windows arm64安装包 (.exe)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_arm64.exe`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'setup',
                    eventArch: 'arm64',
                    eventLang: 'zh'
                },
                {
                    text: 'Windows arm64绿色版 (.zip)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_arm64.zip`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'portable',
                    eventArch: 'arm64',
                    eventLang: 'zh'
                },
                {
                    text: 'macOS Apple芯片 (.dmg)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_arm64.dmg`,
                    icon: Apple,
                    event: 'download',
                    eventPlatform: 'mac',
                    eventType: 'dmg',
                    eventArch: 'arm64',
                    eventLang: 'zh'
                },
                {
                    text: 'macOS Intel芯片 (.dmg)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_intel.dmg`,
                    icon: Apple,
                    event: 'download',
                    eventPlatform: 'mac',
                    eventType: 'dmg',
                    eventArch: 'x64',
                    eventLang: 'zh'
                },
                {
                    text: 'Linux 64位deb (.deb)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64.deb`,
                    icon: Linux,
                    event: 'download',
                    eventPlatform: 'linux',
                    eventType: 'deb',
                    eventArch: 'amd64',
                    eventLang: 'zh'
                },
                {
                    text: 'Linux webkit2gtk4.1 64位deb (.deb)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64_webkit2_41.deb`,
                    icon: Linux,
                    event: 'download',
                    eventPlatform: 'linux',
                    eventType: 'deb',
                    eventArch: 'amd64',
                    eventLang: 'zh'
                },
                {
                    text: 'Linux 64位AppImage (.AppImage)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64.AppImage`,
                    icon: Linux,
                    event: 'download',
                    eventPlatform: 'linux',
                    eventType: 'AppImage',
                    eventArch: 'amd64',
                    eventLang: 'zh'
                },
            ]
        default:
            return [
                {
                    text: 'Windows x64 Installer (.exe)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_x64.exe`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'setup',
                    eventArch: 'x64',
                    eventLang: 'en'
                },
                {
                    text: 'Windows x64 Portable (.zip)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_x64.zip`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'portable',
                    eventArch: 'x64',
                    eventLang: 'en'
                },
                {
                    text: 'Windows arm64 Installer (.exe)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_arm64.exe`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'setup',
                    eventArch: 'arm64',
                    eventLang: 'en'
                },
                {
                    text: 'Windows arm64 Portable (.zip)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_arm64.zip`,
                    icon: Windows,
                    event: 'download',
                    eventPlatform: 'windows',
                    eventType: 'portable',
                    eventArch: 'arm64',
                    eventLang: 'en'
                },
                {
                    text: 'macOS Apple Silicon (.dmg)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_arm64.dmg`,
                    icon: Apple,
                    event: 'download',
                    eventPlatform: 'mac',
                    eventType: 'dmg',
                    eventArch: 'arm64',
                    eventLang: 'en'
                },
                {
                    text: 'macOS Intel (.dmg)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_intel.dmg`,
                    icon: Apple,
                    event: 'download',
                    eventPlatform: 'mac',
                    eventType: 'dmg',
                    eventArch: 'x64',
                    eventLang: 'en'
                },
                {
                    text: 'Linux (.deb)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64.deb`,
                    icon: Linux,
                    event: 'download',
                    eventPlatform: 'linux',
                    eventType: 'deb',
                    eventArch: 'amd64',
                    eventLang: 'en'
                },
                {
                    text: 'Linux webkit2gtk4.1 (.deb)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64_webkit2_41.deb`,
                    icon: Linux,
                    event: 'download',
                    eventPlatform: 'linux',
                    eventType: 'deb',
                    eventArch: 'amd64',
                    eventLang: 'en'
                },
                {
                    text: 'Linux (.AppImage)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64.AppImage`,
                    icon: Linux,
                    event: 'download',
                    eventPlatform: 'linux',
                    eventType: 'AppImage',
                    eventArch: 'amd64',
                    eventLang: 'en'
                },
            ]
    }
})
</script>

<template>
    <div class="action-wrap">
        <div class="actions">
            <div class="action">
                <a class="action-button brand dropdown-button">{{ downloadText }}</a>
                <ul class="dropdown-menu">
                    <li v-for="(m, i) in downloadMenu" :key="i" style="font-size: 14px">
                        <component :is="m.icon"/>
                        <a :data-umami-event="m.event"
                           :data-umami-event-arch="m.eventArch"
                           :data-umami-event-lang="m.eventLang"
                           :data-umami-event-platform="m.eventPlatform"
                           :data-umami-event-type="m.eventType"
                           :href="m.link"
                           target="_blank">{{ m.text }}</a>
                    </li>
                </ul>
            </div>
            <div class="action">
                <a class="action-button alt"
                   href="https://github.com/tiny-craft/tiny-rdm" rel="noreferrer"
                   target="_blank">
                    {{ viewText }}
                </a>
            </div>
        </div>
        <a v-if="actionDescText" class="action-desc" href="https://www.rainyun.com/lykin_?s=web" target="_blank">
            {{ actionDescText }}
        </a>
    </div>
</template>

<style scoped>
.action-wrap {
    display: flex;
    flex-direction: column;
    margin: -6px;
    padding-top: 24px;
    justify-content: center;
}

.actions {
    display: flex;
    flex-wrap: wrap;
}

.action {
    flex-shrink: 0;
    padding: 6px;
}

.action-desc {
    margin-left: 16px;
    color: var(--vp-button-alt-text);
    font-size: 13px;
    text-decoration: underline;
}

@media (min-width: 640px) {
    .actions {
        padding-top: 32px;
    }
}

@media (min-width: 960px) {
    .actions {
        justify-content: flex-start;
    }
}

.action-button.brand {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}

.action-button.alt {
    border-color: var(--vp-button-alt-border);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
}

.action-button {
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    display: inline-block;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    cursor: pointer;
}

.action:hover .dropdown-menu {
    display: block;
}

.dropdown-menu {
    position: absolute;
    list-style-type: none;
    margin: 5px 0 0;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid var(--vp-button-brand-border);
    background-color: var(--vp-button-brand-bg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: none;
}

.dropdown-menu li {
    padding: 8px 8px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    color: var(--vp-button-brand-text);
}

.dropdown-menu li:hover {
    background-color: #f0f0f066;
    border-radius: 10px;
}
</style>
