const path = require('path');
// console.log(sidebar)
module.exports = {
  title: 'DOCS',
  home: false,
  description: '一套文档系统',
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] =  path.join(__dirname, '../../src')
  },
  themeConfig: {
    nav: [
      { text: '文档', link: '/docs/' },
      { text: '其他', link: '/aaa/' },
    ],
    sidebar: {
      '/docs/': [
        '', 
        'Col',
        'Button',  
        'Tag',
        'Progress',
        'LoadingBar',
        'Tooltip',
        'Loading',
        'Collapse',
        'Colorpicker',
        'Dropdown',
        'Tabs'
      ],
    }
    // sidebar
    //  {
    //   '/api/': [
    //     '',  
    //     {
    //       title: 'Group 1',
    //       collapsable: false,
    //       children: [
    //           'a'
    //         ]
    //       }
    //   ],
    //   '/docs/': [
    //     '',
    //     'a'
    //   ],
    //   '/': '',   
    // }
  }
}