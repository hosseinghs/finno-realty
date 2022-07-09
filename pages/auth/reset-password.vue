<template>
  <AuthCard>
    <AuthFinnoRealty />
    <ResetPasswordStepOne />
    <ResetPasswordStepTwo />
    <ResetPasswordStepThree />
  </AuthCard>
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
