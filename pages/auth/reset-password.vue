<template>
  <AuthCard>
    <div class="absolute" style="top: 15px; left: 20px">
      <button @click.stop="$router.back()">
        <img :src="require('~/assets/img/icon/back-arrow.svg')" />
      </button>
    </div>
    <AuthFinnoRealty title="بازیابی رمز عبور" />
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
