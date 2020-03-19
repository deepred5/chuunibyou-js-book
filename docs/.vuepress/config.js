module.exports = {
  title: '中二病也要学JS',
  description: '中二病也要学JS',
  base: '/chuunibyou-js-book/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/algorithm/' },
    ],
    sidebar: {
      '/algorithm/': [
        {
          title: '排序', // 侧边栏名称
          collapsable: false, // 可折叠
          children: [
            '/algorithm/sort/bubble', // 你的md文件地址
          ]
        },
      ]
    }
  }
}