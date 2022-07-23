<template>
  <div>
    <div class="hidden md:block">
      <LayoutManagerMenuDesktop />
    </div>
    <div class="md:hidden" v-if="isMobileSidebarVisible">
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
