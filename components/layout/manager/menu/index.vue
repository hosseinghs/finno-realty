<template>
  <div class="fixed min-h-screen top-0 right-0 z-10 bg-white">
    <div class="hidden md:block w-56">
      <LayoutManagerMenuDesktop />
    </div>
    <div v-if="isMobileSidebarVisible" class="md:hidden">
      <LayoutManagerMenuMobile />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SideBarComponent',

  computed: {
    ...mapState(['isMobileSidebarVisible']),
  },
}
</script>
