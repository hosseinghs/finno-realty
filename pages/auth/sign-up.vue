<template>
  <AuthCard>
    <AuthFinnoRealty :title="title" />
    <transition name="smooth_move" mode="out-in">
      <AuthSignupStepOne v-if="step === 1" />
      <AuthSignupStepTwo v-if="step === 2" />
    </transition>
  </AuthCard>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import signUpModule from '~/store/auth/-sign-up'

export default {
  computed: {
    ...mapState('sign-up', ['step']),

    title() {
      return this.step === 1 ? 'پلتفرم مدیریت املاک' : 'کد تایید تلفن همراه'
    },
  },

  beforeCreate() {
    if (!this.$store.hasModule('sign-up'))
      this.$store.registerModule('sign-up', signUpModule)
  },

  beforeDestroy() {
    this.$store.unregisterModule('sign-up')
  },

  methods: {
    ...mapActions('sign-up', ['updateStep']),
  },
}
</script>
