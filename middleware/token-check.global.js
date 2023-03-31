// 黑白筆記: 檔名後面加一個global 後綴，這個中間件會被自動載入，變成全域的路由中間件

export default defineNuxtRouteMiddleware(() => {
  if (!token) {
    console.log(`Token 遺失`)
    return navigateTo("/signin")
  }

  console.log(`檢查通過，不會有事情發生`)
})
