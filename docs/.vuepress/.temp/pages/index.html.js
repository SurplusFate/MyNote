export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "主页",
    "heroText": "嗨~",
    "tagline": "我的学习记录。",
    "actions": [
      {
        "text": "学习指南 💡",
        "link": "/guide/",
        "type": "primary"
      }
    ],
    "copyright": false,
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://SurplusFate.github.io/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "空~"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "主页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
