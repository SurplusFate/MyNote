export const themeData = {
  "blog": {},
  "encrypt": {},
  "pure": false,
  "darkmode": "switch",
  "themeColor": false,
  "fullscreen": false,
  "locales": {
    "/": {
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "author": "作者",
        "date": "写作日期",
        "origin": "原创",
        "views": "访问量",
        "category": "分类",
        "tag": "标签",
        "readingTime": "阅读时间",
        "words": "字数",
        "toc": "此页内容",
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "文章已加密",
        "placeholder": "输入密码",
        "remember": "记住密码",
        "errorHint": "请输入正确的密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家",
        "openInNewWindow": "Open in new window"
      },
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/guide/": "structure",
        "/Java/": "structure"
      },
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "空~",
        "url": "https://SurplusFate.github.io"
      },
      "logo": "/logo.svg",
      "repo": "https://github.com/SurplusFate/SurplusFate.github.io",
      "docsDir": "docs/",
      "footer": "嗨~~",
      "displayFooter": false,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "navbar": [
        {
          "text": "主页",
          "icon": "home",
          "link": "/"
        },
        {
          "text": "学习指南",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "Java",
          "icon": "java",
          "link": "/java/Java语言概述与开发环境"
        },
        {
          "text": "MySQL",
          "icon": "mysql",
          "link": "/MySQL"
        },
        {
          "text": "前端",
          "icon": "html",
          "link": "/前端"
        },
        {
          "text": "Java Web",
          "icon": "Apache",
          "link": "/JavaWeb"
        },
        {
          "text": "SSM",
          "icon": "tag",
          "children": [
            {
              "text": "Mybatis",
              "icon": "stack",
              "link": "/SSM/Mybatis"
            },
            {
              "text": "Spring",
              "icon": "leaf",
              "link": "/SSM/Spring"
            },
            {
              "text": "SpringMVC",
              "icon": "module",
              "link": "/SSM/SpringMVC"
            }
          ]
        },
        {
          "text": "SpringBoot",
          "icon": "stack",
          "link": "/SpringBoot"
        },
        {
          "text": "SpringCloud",
          "icon": "stack",
          "link": "/SpringCloud"
        },
        {
          "text": "资源",
          "icon": "free",
          "link": "/资源/"
        }
      ]
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
