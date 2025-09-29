async function testElectron() {
  const response = await window.electronAPI.ping()
  document.getElementById('result').textContent = response
}

// 可选：监听主进程消息
// window.electronAPI.onUpdate((data) => {
//   console.log('收到更新:', data)
// })