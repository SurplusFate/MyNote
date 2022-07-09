import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"主页","icon":"home"},["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"学习指南"},["/guide/index.html","/guide/README.md"]],
  ["v-24953b20","/Java/Java%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%A7%84%E5%88%99.html",{"title":"Java程序的基本规则","icon":"note"},["/Java/Java程序的基本规则.html","/Java/Java%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%A7%84%E5%88%99","/Java/Java程序的基本规则.md","/Java/Java%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%A7%84%E5%88%99.md"]],
  ["v-5db6c64b","/Java/Java%E8%AF%AD%E8%A8%80%E6%A6%82%E8%BF%B0%E4%B8%8E%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html",{"title":"Java语言概述与开发环境","icon":"note"},["/Java/Java语言概述与开发环境.html","/Java/Java%E8%AF%AD%E8%A8%80%E6%A6%82%E8%BF%B0%E4%B8%8E%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83","/Java/Java语言概述与开发环境.md","/Java/Java%E8%AF%AD%E8%A8%80%E6%A6%82%E8%BF%B0%E4%B8%8E%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.md"]],
  ["v-fcdb5718","/Java/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",{"title":"数据类型","icon":"note"},["/Java/数据类型.html","/Java/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B","/Java/数据类型.md","/Java/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md"]],
  ["v-7325b417","/Java/%E6%95%B0%E7%BB%84%E7%9A%84%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95.html",{"title":"数组的常见算法","icon":"note"},["/Java/数组的常见算法.html","/Java/%E6%95%B0%E7%BB%84%E7%9A%84%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95","/Java/数组的常见算法.md","/Java/%E6%95%B0%E7%BB%84%E7%9A%84%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95.md"]],
  ["v-106cbf2f","/Java/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%95%B0%E7%BB%84.html",{"title":"流程控制与数组","icon":"note"},["/Java/流程控制与数组.html","/Java/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%95%B0%E7%BB%84","/Java/流程控制与数组.md","/Java/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%95%B0%E7%BB%84.md"]],
  ["v-009dbe92","/Java/%E7%AC%AC%E4%B8%80%E4%B8%AAjava%E7%A8%8B%E5%BA%8F.html",{"title":"第一个java程序","icon":"note"},["/Java/第一个java程序.html","/Java/%E7%AC%AC%E4%B8%80%E4%B8%AAjava%E7%A8%8B%E5%BA%8F","/Java/第一个java程序.md","/Java/%E7%AC%AC%E4%B8%80%E4%B8%AAjava%E7%A8%8B%E5%BA%8F.md"]],
  ["v-344c53e9","/Java/%E8%BF%90%E7%AE%97%E7%AC%A6.html",{"title":"运算符","icon":"note"},["/Java/运算符.html","/Java/%E8%BF%90%E7%AE%97%E7%AC%A6","/Java/运算符.md","/Java/%E8%BF%90%E7%AE%97%E7%AC%A6.md"]],
  ["v-79cde7d2","/Java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"面向对象（上）","icon":"note"},["/Java/面向对象（上）.html","/Java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%8A%EF%BC%89","/Java/面向对象（上）.md","/Java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-a8a741ee","/%E8%B5%84%E6%BA%90/",{"title":"资源"},["/资源/","/%E8%B5%84%E6%BA%90/index.html","/资源/readme.md","/%E8%B5%84%E6%BA%90/readme.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
