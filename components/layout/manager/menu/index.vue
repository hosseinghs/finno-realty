<template>
  <div class="fixed min-h-screen top-0 right-0 z-10 bg-white">
    <div class="hidden md:block">
      <LayoutManagerMenuDesktop />
    </div>
    <div class="md:hidden h-full" v-if="isMobileSidebarVisible">
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
