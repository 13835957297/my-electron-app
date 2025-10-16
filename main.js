const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

ipcMain.handle('ping', async (event) => {
  return 'pong!'  // 可以返回任意数据
})
function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    title: '我的 Electron 应用',
    myWindowId: 1,
    kiosk: true,           // 强制全屏
    alwaysOnTop: true,     // 强制置顶
    frame: false,          // 可选：隐藏边框和按钮
    resizable: false,      // 禁止调整大小
    fullscreenable: true, // 防止用户退出全屏
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  win.loadFile('index.html')
  // 开发时打开开发者工具
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})