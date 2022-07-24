<template>
  <div
    id="dark_mode_toggle_btn_wrapper"
    class="w-13 h-6 relative shadow rounded-full bg-white-200"
  >
    <div
      id="circle"
      class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 rounded-full bg-white cursor-pointer"
      :class="isNight ? 'right-1' : 'right-7'"
      @click.stop="toggleMode()"
    ></div>

    <div
      id="img_wrapper"
      class="absolute top-1/2 right-1 transform -translate-y-1/2 transition-all duration-200"
      :class="isNight ? 'right-7' : 'right-1'"
    >
      <img
        v-show="!isNight"
        :src="require('~/assets/img/sun.svg')"
        alt="light"
      />
      <img
        v-show="isNight"
        :src="require('~/assets/img/moon.svg')"
        alt="dark"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarkModeToggleBtnComponent',

  data() {
    return {
      isNight: false,
    }
  },

  methods: {
    toggleMode() {
      this.isNight = !this.isNight
        const htmlElem = document.querySelector('html')
        htmlElem.classList.toggle('dark')
    },
  },
}
</script>
