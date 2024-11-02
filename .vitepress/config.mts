import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh",
  title: "Class Widgets",
  description: "能够显示当前课程的<br>桌面组件应用程序",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/Logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/guide' },
      { text: '进阶配置', link: '/advanced'}
    ],

    sidebar: [
      {
        text: '快速上手',
        link: '/guide',
        items: [
          { text: '安装',
            link: '/guide/install'
          },
          { text: '课程表',
            items: [
              {
                text: '课程表文件',
                link: '/guide/schd/schdfile',
              },
              {
                text: '时间线',
                link: '/guide/schd/timeline',
              },
              {
                text: '课程表',
                link: '/guide/schd/schdule',
              },
              {
                text: '调休 换课',
                link: '/guide/schd/schdswap',
              },
            ]
          }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/xuanxuan1231/class-widget-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    //footer: {
    //  message: '基于 MIT 许可发布',
    //  copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`
    //},

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',


    socialLinks: [
      //{ icon: {svg: '<svg id="bilibili-svgrepo-com_-_Copy" data-name="bilibili-svgrepo-com - Copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_16" data-name="Path 16" d="M0,0H24V24H0Z" fill="none"/><path id="Path_17" data-name="Path 17" d="M18.223,3.086a1.25,1.25,0,0,1,0,1.768L17.08,6h1.17A3.75,3.75,0,0,1,22,9.747v7.5A3.75,3.75,0,0,1,18.25,21H5.75A3.75,3.75,0,0,1,2,17.247v-7.5A3.75,3.75,0,0,1,5.75,6H6.916L5.775,4.855A1.25,1.25,0,1,1,7.542,3.087l2.652,2.652a1.235,1.235,0,0,1,.2.257h3.213a1.22,1.22,0,0,1,.2-.258l2.651-2.652a1.25,1.25,0,0,1,1.768,0Zm.027,5.42H5.75A1.25,1.25,0,0,0,4.5,9.663l0,.094v7.5A1.249,1.249,0,0,0,5.657,18.5l.093,0h12.5A1.25,1.25,0,0,0,19.5,17.35l0-.093v-7.5a1.25,1.25,0,0,0-1.25-1.25Zm-10,2.5a1.25,1.25,0,0,1,1.25,1.25v1.25a1.25,1.25,0,1,1-2.5,0v-1.25A1.25,1.25,0,0,1,8.25,11.006Zm7.5,0A1.25,1.25,0,0,1,17,12.256v1.25a1.25,1.25,0,1,1-2.5,0v-1.25A1.25,1.25,0,0,1,15.75,11.006Z" fill="#fff"/></svg>'}, link: 'https://www.bilibili.com/video/BV1xwW9eyEGu' },
      { icon: 'github', link: 'https://github.com/RinLit-233-shiroko/Class-Widgets' }
      
    ]
  }
})