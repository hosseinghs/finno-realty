<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware() {
    console.log('auth')
  },
}
</script>

<style></style>
