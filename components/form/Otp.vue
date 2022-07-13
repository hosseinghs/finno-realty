<template>
  <div
    id="input_wrapper"
    class="flex items-center justify-center relative dark:bg-black-100 transition-all duration-100"
  >
    <input
      v-for="i in 6"
      :key="i"
      :ref="`value-${i}`"
      class="w-5 text-center bg-white-100 text-gray-label border-b border-gray-label outline-none"
      :class="i !== 1 || i !== 6 ? 'mx-2' : ''"
      type="number"
      @input="log($event)"
    />
  </div>
</template>

<script>
export default {
  methods: {
    log(e) {
      console.log(e.target.value)
    },
  },
}
</script>
