<template>
  <div
    class="w-full h-screen flex justify-center items-center bg-white-100 lg:bg-white px-10"
  >
    <div class="w-full md:w-1/2 xl:w-1/4 mx-auto bx">
      <UiNotif />
      <Nuxt />
    </div>
    <button @click.stop="showSuccess({ title: 'سیلام سیلام', timer: 20000 })">
      click
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'auth',

  methods: {
    ...mapActions('notif', ['showSuccess']),
  },
}
</script>
