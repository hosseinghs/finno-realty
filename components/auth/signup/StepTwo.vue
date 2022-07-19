<template>
  <div>
    <form @submit.prevent="submitForm()">
      <FormOtp />
      <FormTimer />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log('ok')
    },
  },
}
</script>
