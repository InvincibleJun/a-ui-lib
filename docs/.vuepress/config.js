const path = require('path');
// console.log(sidebar)
module.exports = {
  host: 'localhost',
  title: 'DOCS',
  home: false,
  description: 'a-ui-lib',
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] =  path.join(__dirname, '../../src')
  },
  themeConfig: {
    nav: [
      { text: '文档', link: '/docs/' },
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
  }
}