<template>
  <form :ref="name" @submit.prevent="submit">
    <slot />
  </form>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
  },

  methods: {
    submit() {
      const name = this.name
      const formElem = this.$refs[name]
      const inputsArr = [...formElem.querySelectorAll('#input_wrapper')]
      const classLists = inputsArr.map((input) => [...input.classList])
      console.log(classLists);
    },
  },
}
</script>
