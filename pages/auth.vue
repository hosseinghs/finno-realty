<template>
  <div class="w-full h-screen flex justify-center items-center px-4">
    <div class="w-full lg:w-1/4 mx-auto bx">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style>
.bx {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
