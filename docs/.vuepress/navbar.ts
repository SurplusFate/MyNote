import {navbar} from "vuepress-theme-hope";

export default navbar([
    {text: "主页", icon: "home", link: "/"},
    {text: "学习指南", icon: "creative", link: "/guide/"},
    {text: "Java", icon: "java", link: "/java/Java语言概述与开发环境"},
    {text: "MySQL", icon: "mysql", link: "/MySQL"},
    {text: "前端", icon: "html", link: "/前端"},
    {text: "Java Web", icon: "Apache", link: "/JavaWeb"},
    {
        text: "SSM",
        icon: "tag",
        children: [
            {text: "Mybatis", icon: "stack", link: "/SSM/Mybatis"},
            {text: "Spring", icon: "leaf", link: "/SSM/Spring"},
            {text: "SpringMVC", icon: "module", link: "/SSM/SpringMVC"},
        ]
    },
    {text: "SpringBoot", icon: "stack", link: "/SpringBoot"},
    {text: "SpringCloud", icon: "stack", link: "/SpringCloud"},
    {text: "资源", icon: "free", link: "/资源/"},
]);
