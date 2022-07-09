<template>
  <AuthCard>
    <AuthFinnoRealty />
    <transition name="smooth_move">
      <ResetPasswordStepOne />
      <ResetPasswordStepTwo />
      <ResetPasswordStepThree />
    </transition>
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
