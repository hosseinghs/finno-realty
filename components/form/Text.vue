<template>
  <div
    id="input_wrapper"
    class="relative shadow border-100 dark:bg-black-100 rounded-lg px-4 py-2 bg-white dark:border dark:border-white my-6 transition-all duration-100"
    :class="
      activeFocus ? 'border-2  border-prime_active' : 'border-2 border-white'
    "
  >
    <input
      class="w-full text-gray-100 dark:text-white dark:bg-black-100 placeholder-text-gray-100 dark:placeholder-white outline-none"
      v-bind="$attrs"
      @focus="activeFocus = true"
      @blur="activeFocus = false"
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
  name: 'InputComponent',

  props: {
    icon: {
      type: String,
      default: 'eye',
    },
  },

  data() {
    return {
      activeFocus: false,
    }
  },
}
</script>

<style scoped>
#input_wrapper .icon_rtl {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

#input_wrapper input {
  background-color: transparent;
}
</style>
