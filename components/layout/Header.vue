<template>
  <header class="flex items-center justify-between py-4 px-12">
    <div class="text-prime">
      <h3 class="text-xl font-bold">فینوریلتی</h3>
      <span class="font-normal">پلتفرم مدیریت املاک</span>
    </div>
    <div class="flex items-center">
      <div class="flex-1">
        <UiDropdown text="انتخاب نقش" />
      </div>
      <div class="mx-4">
        <img :src="require('~/assets/img/notif.svg')" />
      </div>
      <div class="">
        <img :src="require('~/assets/img/logout.svg')" />
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
