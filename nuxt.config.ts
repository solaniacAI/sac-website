// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: {enabled: true},
    plugins: ["~/plugins/ton-with-vue", "~/plugins/vercel", "~/plugins/v-mask"],
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "@nuxt/image",
        "@nuxt/icon",
        "@vueuse/nuxt",
    ],
    ssr: true,
    image: {
        dir: "assets",
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.baseURL,
        },
    },
});
