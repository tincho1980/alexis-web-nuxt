// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
    tailwindcss: {
        cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
        configPath: "tailwind.config",
    },
    app: {
        head: {
            title: "Alexis Salerno - Fotografía",
            meta: [{ charset: "utf-8" }, { name: "description", content: "Alexis Salerno - Fotografía y arte audiovisual" }],
            link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" }],
            script: [
                {
                    src: "https://cdn.lightwidget.com/widgets/lightwidget.js",
                    type: "text/javascript",
                    async: true,
                    defer: true,
                },
            ],
        },
    },
});
