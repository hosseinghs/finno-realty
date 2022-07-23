<template>
  <header class="flex items-center justify-between py-4 px-12">
    <div class="md:hidden">
      <UiBurger @burgerClick="setMobileSidebarState(true)" />
    </div>
    <div class="text-center md:text-right text-prime">
      <h3 class="text-xl font-bold">فینوریلتی</h3>
      <span class="font-normal">پلتفرم مدیریت املاک</span>
    </div>
    <div class="flex items-center">
      <div class="flex-1">
        <UiDropdown text="انتخاب نقش" />
      </div>
      <div class="hidden md:block">
        <div class="flex items-center">
          <div class="mx-4 cursor-pointer">
            <img :src="require('~/assets/img/notif.svg')" />
          </div>
          <div class="cursor-pointer">
            <img :src="require('~/assets/img/logout.svg')" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppHeaderComponent',

  methods: {
    ...mapActions(['setMobileSidebarState']),
  },
}
</script>

<style></style>
