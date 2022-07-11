<template>
  <AuthCard>
    <AuthFinnoRealty />
    <transition name="smooth_move" mode="out-in">
      <AuthResetPasswordStepOne v-if="step === 1" />
      <AuthResetPasswordStepTwo v-if="step === 2" />
      <AuthResetPasswordStepThree v-if="step === 3" />
    </transition>
  </AuthCard>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth/reset-password', ['step']),
  },

  methods: {
    ...mapActions('auth/reset-password', ['updateStep']),
    submitForm() {
      console.log('ok')
    },
  },
}
</script>
