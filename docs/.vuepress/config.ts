import {defineUserConfig} from "vuepress";
import theme from "./theme";
import {hopeTheme} from "vuepress-theme-hope";

export default defineUserConfig({
    base:"/",
    title: "空~",
    description: "学习记录",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    theme
});

