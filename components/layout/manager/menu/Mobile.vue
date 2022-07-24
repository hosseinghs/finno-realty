<template>
  <div>
    <div class="flex items-start justify-between px-2 mt-4">
      <FormBtnDarkModeToggle />
      <LayoutManagerMenuWelcome />
      <FormBtnIconClose />
    </div>
    <LayoutManagerMenuList />
  </div>
</template>

<script>
export default {
  name: 'MobileSideBarComponent',
}
</script>
