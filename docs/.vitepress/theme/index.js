// https://vitepress.dev/guide/custom-theme
import {h} from "vue"
import Theme from "vitepress/theme"
import "./style.css"
import AppPreview from './components/AppPreview.vue'

export default {
    extends: Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'home-hero-after': () => h(AppPreview)
        })
    },
    enhanceApp({app, router, siteData}) {
        // ...
    }
}
