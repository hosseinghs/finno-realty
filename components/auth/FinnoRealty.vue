<template>
  <div class="text-prime text-center mb-10">
    <h1 class="font-bold mb-2 text-2xl">فینوریلتی</h1>
    <span class="font-normal text-lg"> {{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'پلتفرم مدیریت املاک',
    },
  },
}
</script>
