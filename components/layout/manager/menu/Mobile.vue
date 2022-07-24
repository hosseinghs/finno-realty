<template>
  <div class="w-full h-full flex">
    <div class="w-2/3 h-full">
      <div class="flex items-start justify-between px-2 mt-4">
        <FormBtnDarkModeToggle />
        <LayoutManagerMenuWelcome />
        <div @click.stop="setMobileSidebarState(false)">
          <FormBtnIconClose />
        </div>
      </div>
      <LayoutManagerMenuList />
    </div>
    <div class="overlay w-1/3" @click.self="setMobileSidebarState(false)"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MobileSideBarComponent',
  methods: {
    ...mapActions(['setMobileSidebarState']),
  },
}
</script>

<style scoped>
.overlay {
  background-color: rgb(217, 217, 217, 0.7);
}
</style>
