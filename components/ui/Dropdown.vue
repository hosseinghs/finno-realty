<template>
  <div id="dropdown">
    <div class="z-50">
      <div @click="boz">
        <button
          class="flex items-center justify-center text-prime font-semibold text-sm"
        >
          <div class="ml-2">{{ title }} {{ showDropdown }}</div>
          <img :src="require('~/assets/img/icon/arrow-down.svg')" />
        </button>
      </div>
      <div v-if="showDropdown">
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </div>
    <div class="w-full h-screen fixed top-0 left-0 z-10"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    visible: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    showDropdown: {
      get() {
        return this.visible
      },
      set(v) {
        return v
      },
    },
  },

  methods: {
    boz() {
      this.showDropdown = true
      console.log('boz')
    },
  },
}
</script>
