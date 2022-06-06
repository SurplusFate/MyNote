import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-184f4da6","/intro.html",{"title":"Intro Page","icon":"info"},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"title":"主页","icon":"home"},["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"Java"},["/guide/index.html","/guide/README.md"]],
  ["v-40f495f1","/Java/JavaSE.html",{"title":"","icon":"edit"},["/Java/JavaSE","/Java/JavaSE.md"]],
  ["v-5a814a99","/posts/article10.html",{"title":"文章 10","icon":"edit"},["/posts/article10","/posts/article10.md"]],
  ["v-5c362338","/posts/article11.html",{"title":"文章 11","icon":"edit"},["/posts/article11","/posts/article11.md"]],
  ["v-5deafbd7","/posts/article12.html",{"title":"文章 12","icon":"edit"},["/posts/article12","/posts/article12.md"]],
  ["v-7beb5be1","/posts/article9.html",{"title":"文章 9","icon":"edit"},["/posts/article9","/posts/article9.md"]],
  ["v-03842690","/posts/article/article1.html",{"title":"文章 1","icon":"edit"},["/posts/article/article1","/posts/article/article1.md"]],
  ["v-0538ff2f","/posts/article/article2.html",{"title":"文章 2","icon":"edit"},["/posts/article/article2","/posts/article/article2.md"]],
  ["v-06edd7ce","/posts/article/article3.html",{"title":"文章 3","icon":"edit"},["/posts/article/article3","/posts/article/article3.md"]],
  ["v-08a2b06d","/posts/article/article4.html",{"title":"文章 4","icon":"edit"},["/posts/article/article4","/posts/article/article4.md"]],
  ["v-0a57890c","/posts/article/article5.html",{"title":"文章 5","icon":"edit"},["/posts/article/article5","/posts/article/article5.md"]],
  ["v-0c0c61ab","/posts/article/article6.html",{"title":"文章 6","icon":"edit"},["/posts/article/article6","/posts/article/article6.md"]],
  ["v-0dc13a4a","/posts/article/article7.html",{"title":"文章 7","icon":"edit"},["/posts/article/article7","/posts/article/article7.md"]],
  ["v-0f7612e9","/posts/article/article8.html",{"title":"文章 8","icon":"edit"},["/posts/article/article8","/posts/article/article8.md"]],
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
