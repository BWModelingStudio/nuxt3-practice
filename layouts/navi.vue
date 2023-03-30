<template>
  <nav class="navi">
    <ul>
      <NuxtLink class="link" to="/spaceMarine/primaris_captain">Space Marine-Captain</NuxtLink>
      <NuxtLink class="link" to="/spaceMarine/intercessor">Space Marine-Intercessor</NuxtLink>
      <NuxtLink to="/chaos">Chaos Space Marine</NuxtLink>
    </ul>
  </nav>
</template>

<script lang="ts"></script>

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
