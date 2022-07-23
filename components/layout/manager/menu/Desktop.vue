<template>
  <div id="desktop_sidebar">
    <LayoutManagerMenuList />
  </div>
</template>

<script>
export default {
  name: 'DesktopSideBarComponent',
}
</script>

<style>
#desktop_sidebar {
  width: 224px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
