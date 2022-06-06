import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    hostname: "https://SurplusFate.github.io",

    author: {
        name: "空~",
        url: "https://github.com/SurplusFate/SurplusFate.github.io",
    },

    iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

    logo: "/logo.svg",

    repo: "https://github.com/SurplusFate/MyNote",

    docsDir: "/",

    // navbar
    navbar: navbar,

    // sidebar
    sidebar: sidebar,

    footer: "~~嗨~~",

    displayFooter: true,

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    plugins: {
        mdEnhance: {
            enableAll: true,
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
        },
    },
});
