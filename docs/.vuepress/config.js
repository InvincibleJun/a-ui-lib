const path = require('path');
// console.log(sidebar)
module.exports = {
  host: 'localhost',
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
        'Tabs',
        'Notification',
        'Table',
        'Page',
        'Input',
        'Form',
        'Affix',
        'Modal'
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