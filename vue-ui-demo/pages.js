/**
 * 自动生成 vue.config.js 中配置项 pages 的值
 * 
 * 统计同目录下页面入口
 * 
 * 
 */




const fs = require('fs')
const path = require('path')

const pages = fs.readdirSync(__dirname).reduce((pages, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.js')
    const template = path.join(fullDir, 'index.html')


    if(fs.statSync(fullDir).isDirectory() && fs.existsSync(entry) && fs.existsSync(template)){
        pages[dir] = {entry, template}
    }

    return pages
}, {})


module.exports = pages
