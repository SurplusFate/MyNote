export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "空~",
  "description": "学习记录",
  "head": [],
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
