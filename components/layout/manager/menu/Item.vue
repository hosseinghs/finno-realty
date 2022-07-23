<template>
  <li class="py-2 px-4 bg-transparent hover:bg-white-100 transition-all duration-200 cursor-pointer">
    <div class="text-gray-label">
      <!-- <img src="" class="ml-1" /> -->
      <span>
        {{ title }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SideBarMenuItemComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
