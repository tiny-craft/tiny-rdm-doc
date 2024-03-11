<script setup>
import {computed} from 'vue'
import {useData} from 'vitepress'
import Windows from './icon/Windows.vue'
import Apple from './icon/Apple.vue'
import Linux from './icon/Linux.vue'
import {version} from '../../../../package.json'

const {lang} = useData()

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
                    icon: Windows
                },
                {
                    text: 'Windows x64绿色版 (.zip)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_x64.zip`,
                    icon: Windows
                },
                {
                    text: 'Windows arm64安装包 (.exe)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_arm64.exe`,
                    icon: Windows
                },
                {
                    text: 'Windows arm64绿色版 (.zip)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_arm64.zip`,
                    icon: Windows
                },
                {
                    text: 'macOS Apple芯片 (.dmg)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_arm64.dmg`,
                    icon: Apple
                },
                {
                    text: 'macOS Intel芯片 (.dmg)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_x64.zip`,
                    icon: Apple
                },
                {
                    text: 'Linux 64位deb (.deb)',
                    link: `https://gitee.com/tiny-craft-zh/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64.deb`,
                    icon: Linux
                },
                {text: 'Linux 64位AppImage (.AppImage)', link: '#', icon: Linux},
            ]
        default:
            return [
                {
                    text: 'Windows x64 Installer (.exe)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_x64.exe`,
                    icon: Windows
                },
                {
                    text: 'Windows x64 Portable (.zip)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_x64.zip`,
                    icon: Windows
                },
                {
                    text: 'Windows arm64 Installer (.exe)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Setup_${version}_windows_arm64.exe`,
                    icon: Windows
                },
                {
                    text: 'Windows arm64 Portable (.zip)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_Portable_${version}_windows_arm64.zip`,
                    icon: Windows
                },
                {
                    text: 'macOS Apple Silicon (.dmg)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_arm64.dmg`,
                    icon: Apple
                },
                {
                    text: 'macOS Intel (.dmg)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/TinyRDM_${version}_mac_intel.dmg`,
                    icon: Apple
                },
                {
                    text: 'Linux (.deb)',
                    link: `https://github.com/tiny-craft/tiny-rdm/releases/download/v${version}/tiny-rdm_${version}_linux_amd64.deb`,
                    icon: Linux
                },
                {text: 'Linux (.AppImage)', link: '#', icon: Linux},
            ]
    }
})
</script>

<template>
  <div class="actions">
    <div class="action">
      <a class="action-button brand dropdown-button">{{ downloadText }}</a>
      <ul class="dropdown-menu">
        <li v-for="(m, i) in downloadMenu" :key="i" style="font-size: 14px">
          <component :is="m.icon"/>
          <a :href="m.link" target="_blank">{{ m.text }}</a>
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
</template>

<style scoped>
.actions {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
    padding-top: 24px;
    justify-content: center;
}

.action {
    flex-shrink: 0;
    padding: 6px;
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
}

.dropdown-menu li:hover {
    background-color: #f0f0f066;
    border-radius: 10px;
}
</style>
