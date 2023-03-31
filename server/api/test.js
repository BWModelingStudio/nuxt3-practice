export default defineEventHandler((event) => {
  return {
    status: "succeed",
    data: {
      message: "測試"
    }
  }
})
