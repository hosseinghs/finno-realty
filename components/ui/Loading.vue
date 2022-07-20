<template>
  <div class="flex justify-center items-center">
    <div
      class="loader ease-linear rounded-full border-4 border-t-4 border-white w-6 h-6 mr-2"
      :style="`border-top-color:${color}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#2563eb',
    },
  },
}
</script>

<style scoped>
.loader {
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
