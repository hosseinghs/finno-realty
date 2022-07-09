<template>
  <div
    id="input_wrapper"
    class="relative shadow rounded-lg px-4 py-2 bg-white my-6"
  >
    <input
      class="w-full text-gray-label text-gray-label::placeholder outline-none"
      v-bind="$attrs"
    />
    <div v-if="icon" class="icon_rtl absolute">
      <img
        class="cursor-pointer"
        :src="icon"
        @click.stop="$emit('iconClick')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'eye',
    },
  },
}
</script>

<style scoped>
#input_wrapper input {
  color: #757575;
}

#input_wrapper .icon_rtl {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
