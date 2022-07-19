<template>
  <div
    id="input_wrapper"
    class="flex items-center justify-center relative dark:bg-black-100 transition-all duration-100 ltr"
  >
    <input
      v-for="i in length"
      autofocus
      :key="i"
      :ref="`value-${i}`"
      type="text"
      maxlength="1"
      pattern="/d*"
      class="w-5 text-center bg-white-100 text-gray-label border-b border-gray-label outline-none"
      :class="i !== 1 || i !== 6 ? 'mx-2' : ''"
      @keyup="onInput({ e: $event, i })"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 6,
    }
  },

  methods: {
    goBack(i) {
      console.log(i);
      const pervInputIndex = i - 1
      if (pervInputIndex !== 0) {
        const pervInput = this.$refs[`value-${pervInputIndex}`][0]
        pervInput.focus()
      }
    },

    goForward(i) {
      if (i < this.length) {
        const nextInputIndex = i + 1
        const nextInput = this.$refs[`value-${nextInputIndex}`][0]
        nextInput.focus()
      } else console.log('api call')
    },

    onInput({ e, i }) {
      const key = e.keyCode || e.charCode
      if (key === 46 || key === 8) this.goBack(i)
      else this.goForward(i)
    },
  },
}
</script>
