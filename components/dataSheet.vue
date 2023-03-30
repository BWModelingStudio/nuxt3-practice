<template>
  <div class="data-sheet">
    <img :src="img" />
  </div>
</template>

<script lang="ts">
  import useStore from "@/store"

  export default defineComponent({
    setup() {
      const store = useStore()
      const unit = computed(() => store.unit)

      // 黑白筆記: 在 vite  裡面請求檔案無法用 require，那是 for webpack 的，所以要用這種方法
      const img = ref(new URL(`../assets/images/${store.unit}_data_sheet.jpg`, import.meta.url).href)

      return {
        unit,
        img
      }
    }
  })
</script>

<style lang="scss" scoped>
  .data-sheet {
    width: 100%;
    height: 100%;
    float: right;
    img {
      width: 100%;
    }
  }
</style>
