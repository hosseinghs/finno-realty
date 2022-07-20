<template>
  <div id="dropdown">
    <button
      class="flex items-center justify-center text-prime font-semibold text-sm"
    >
      <div class="ml-2">
        {{ text }}
      </div>
      <img :src="require('~/assets/img/icon/arrow-down.svg')" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>


