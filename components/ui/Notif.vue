// todo : fix progress_fil animation
<template>
  <div
    id="notif_component"
    class="w-80 fixed left-1/2 transition-all duration-200 transform -translate-x-1/2 z-30"
    :class="visible ? 'top-8' : '-top-32'"
  >
    <div :class="`relative rounded px-4 py-6 bg-${notif.color}`">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center flex-1">
          <FormBtnNotifSuccess />
          <span class="mr-2 text-white text-sm font-normal">
            {{ notif.title }}
            {{ `bg-${notif.color}` }}
          </span>
        </div>
        <div class="w-9 h-px transform rotate-90 bg-white mr-2"></div>
        <div>
          <span @click.stop="setNotifState(false)">
            <FormBtnIconClose />
          </span>
        </div>
      </div>
    </div>
    <div class="relative mt-1 h-2">
      <div class="h-full opacity-20 rounded" :class="`bg-${notif.color}`"></div>
      <div
        class="h-full progress_fill absolute bottom-0 left-0 rounded"
        :class="`bg-${notif.color}`"
        :style="cssVars"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('notif', ['timer', 'notif', 'isVisible']),

    visible: {
      get() {
        return this.isVisible
      },
      set(v) {
        return this.setNotifState(v)
      },
    },

    cssVars() {
      return {
        '--time': `${this.timer / 1000}s`,
      }
    },
  },

  methods: {
    ...mapActions('notif', ['setNotifState']),
  },
}
</script>

<style lang="scss" scoped>
.progress_fill {
  animation: var(--time) linear 0s 1 normal forwards progress;
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
