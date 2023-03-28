<template>
  <nav class="navi">
    <ul>
      <NuxtLink class="link" to="/test">Space Marine</NuxtLink>
      <NuxtLink to="/chaos">Chaos Space Marine</NuxtLink>
    </ul>
  </nav>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.navi {
  ul {
    display: flex;
    .link {
      width: 10%;
    }
  }
}
</style>