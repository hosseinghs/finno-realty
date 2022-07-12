<template>
  <div
    id="notif_component"
    class="w-80 fixed left-1/2 transition-all duration-200 transform -translate-x-1/2 z-30"
    :class="visible ? 'top-8' : '-top-24'"
  >
    <div :class="`relative rounded px-4 py-6 bg-${notif.color}`">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center flex-1">
          <FormBtnNotifSuccess />
          <span class="mr-2 text-white text-sm font-normal">
            {{ notif.title }}
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
    <div
      class="mt-1 h-2 rounded-b-lg bg-prime_active opacity-20 relative"
      :class="`bg-${notif.color}`"
    >
      <div
        class="progress_fill h-full rounded-b-lg absolute"
        :class="`bg-${notif.color}`"
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

    // cssProgress() {
    //   return {
    //     '--time': `${this.timer / 1000}s`,
    //   }
    // },
  },

  methods: {
    ...mapActions('notif', ['setNotifState']),
  },
}
</script>

<style>
.progress_fill {
  animation: progress 5000 linear 0s 1 normal forwards progress !important;
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
