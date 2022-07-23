<template>
  <div id="dropdown">
    <div @click="$emit('open')">
      <button
        class="flex items-center justify-center text-prime font-semibold text-sm"
      >
        <div class="ml-2">{{ title }}</div>
        <img :src="require('~/assets/img/icon/arrow-down.svg')" />
      </button>
    </div>
    <div v-if="visibility" class="relative">
      <div
        @click.stop="setDropdownState(false)"
        class="w-full h-screen fixed top-0 left-0 z-10"
      ></div>
      <ul class="w-full text-right bg-gray-200 absolute top-2 z-50">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="text-prime text-sm whitespace-nowrap cursor-pointer px-4 py-2"
          @click="$emit('itemClick')"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapState(['isDropdownVisible']),

    visibility: {
      get() {
        return this.isDropdownVisible
      },
      set(v) {
        return this.setDropdownState(v)
      },
    },
  },

  methods: {
    ...mapActions(['setDropdownState']),
  },
}
</script>
