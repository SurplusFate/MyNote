import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    // 当前网站部署到的域名。
    hostname: "https://SurplusFate.github.io",
    // 文章显示的默认作者
    author: {
        name: "空~",
        url: "https://SurplusFate.github.io",
    },
    // 图标资源cdn
    iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",
    // logo
    logo: "/logo.svg",
    // 源码仓库
    repo: "https://github.com/SurplusFate/SurplusFate.github.io",

    docsDir: "docs/",

    locales: {
        "/": {
            // 导航栏
            navbar: navbar,
            // 侧边栏
            sidebar: {
                "/guide/": "structure",
                "/Java/": "structure",
            },
        },
    },
    // 页脚
    footer: "嗨~~",
    // 显示页脚
    displayFooter: false,
    // 页面信息
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    plugins: {
        mdEnhance: {
            enableAll: true
        },
    },
});
