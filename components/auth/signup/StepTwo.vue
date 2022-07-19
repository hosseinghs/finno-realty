<template>
  <div>
    <form @submit.prevent="submitForm()">
      <div class="w-56 mx-auto">
        <FormOtp />
        <FormTimer />
      </div>
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
