<template>
  <div class="space-marine">
    <dataSheet class="data-sheet"></dataSheet>
  </div>
</template>

<script lang="ts">
  import useStore from "~~/store"

  export default defineComponent({
    setup() {
      const store = useStore()
      const route = useRoute()

      onMounted(() => {
        const { unit } = route.params

        // 黑白筆記: 從 route 拿到的參數型別會是 string | string[]， 所以要強轉型別
        store.setUnit(String(unit))
      })
    }
  })
</script>

<style lang="scss" scoped>
  .space-marine {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/imperial-bg-img.jpg");
    background-size: cover;
    opacity: 0.8;
    margin: -8px;

    .data-sheet {
      width: 50%;
    }
  }
</style>
