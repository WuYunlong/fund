<template>
  <div class="home"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

import { User, Fund } from '@/renderer/services'

onMounted(async () => {
  let code = await User.login()
  let info = await Fund.fromEastmoney(184801)
  console.log(code, info)
})
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
