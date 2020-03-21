module.exports = {
  title: '中二病也要学JS',
  description: '中二病也要学JS',
  base: '/chuunibyou-js-book/',
  port: 9900,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/algorithm/' },
    ],
    sidebar: {
      '/algorithm/': [
        {
          title: '排序',
          collapsable: false,
          children: [
            '/algorithm/sort/bubble', 
            '/algorithm/sort/select',
            '/algorithm/sort/insert',
            '/algorithm/sort/shell',
            '/algorithm/sort/merge',
            '/algorithm/sort/quick',
            '/algorithm/sort/count',
          ]
        },
      ]
    }
  }
}