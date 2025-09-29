const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // 可以暴露更多 API
  ping: () => ipcRenderer.invoke('ping')
})