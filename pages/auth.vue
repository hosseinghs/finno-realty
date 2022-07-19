<template>
  <AuthLayout>
    <div class="w-full md:w-1/2 xl:w-1/4 mx-auto bx">
      <UiNotif />
      <Nuxt />
    </div>
  </AuthLayout>
</template>

<script>
import { mapActions } from 'vuex'
import { setThemeAutomatically } from '../utils/general'

export default {
  layout: 'auth',

  created() {
    this.setThemeAutomatically()
  },

  methods: {
    setThemeAutomatically,
    ...mapActions('notif', ['showSuccess']),
  },
}
</script>
