const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800, // 窗口宽度
        height: 600, // 窗口高度    
        /*其他配置项 正在学习中... */
    })
    win.loadURL('https://www.electronjs.org/zh/') // 加载外部URL地址
    /*其他配置项 正在学习中... */
}
app.whenReady().then(() => {
    createWindow()
})