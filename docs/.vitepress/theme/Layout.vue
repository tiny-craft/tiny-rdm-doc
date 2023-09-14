<script setup>
import DefaultTheme from "vitepress/theme"
import {useData} from "vitepress"
import {computed} from 'vue'

const {Layout} = DefaultTheme
const {page, isDark, lang, frontmatter: fm} = useData()
// const {name, text} = frontmatter.hero
const preview = computed(() => {
    return `/images/screenshots/${isDark.value ? 'dark' : 'light'}_${lang.value}.png`
})
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div class="preview-wrapper">
        <div class="preview-inner">
          <img :src="preview" alt="preview"/>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>

.preview-wrapper {
    margin-top: -30px;
    padding: 0 24px 24px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.preview-inner {
    object-fit: cover;
    max-width: 100%;
}

@media (min-width: 640px) {
    .preview-wrapper {
        padding: 0 48px 24px;
    }
}

@media (min-width: 960px) {
    .preview-wrapper {
        padding: 0 64px 24px;
    }

    .preview-inner {
        max-width: 1080px;
    }
}
</style>
