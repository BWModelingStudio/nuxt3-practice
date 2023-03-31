// 黑白筆記: 在任何頁面的script 添加 middleware: 'token-check'，就換檢查有無token，沒有的話就導航到指定頁面

export default defineNuxtRouteMiddleware(() => {
  if (!token) {
    console.log(`Token 遺失`)
    return navigateTo("/signin")
  }

  console.log(`檢查通過，不會有事情發生`)
})
