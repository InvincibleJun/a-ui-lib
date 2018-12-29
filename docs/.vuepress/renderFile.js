const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../');

const fileAndDir =  fs.readdirSync(rootPath)

let sidebar = {}; 

fileAndDir.forEach(f => {
    if (f === '.vuepress' || f ===  'README.md') return
    
    let s = sidebar['/'+ f + '/'] = []

    let rp = rootPath + '/'+ f
    const files = fs.readdirSync(rp)

    files.forEach(fi => {
        if (fs.statSync(rp + '/' + fi).isDirectory()) {
            debugger
            let group = {
                title: fi,
                collapsable: false,
                children: fs.readdirSync(rp +'/' + fi).map(val => {
                     let name = val.split('.')[0] 
                
                    return name === 'README' ? '': fi + '/' + name
                })
            }
            s.push(group)
        } else {
            let name = fi.split('.')[0] 
            s.push(name === 'README' ? '': name)
        }
    })
})

console.log(sidebar)
debugger
module.exports = sidebar