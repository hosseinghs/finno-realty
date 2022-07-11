<template>
  <div
    class="w-full h-screen fixed top-0 left-0 transition-all duration-300"
    :class="
      isModalVisible ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 '
    "
  >
    <div
      class="h-full flex items-center justify-center z-20 transform transition-all duration-300"
      :class="isModalVisible ? 'translate-y-0' : '-translate-y-16'"
      @click.self="setModalState(false)"
    >
      <div class="content z-30 p-4">
        <div class="modal_header p-2">header</div>
        <div class="p-2">
          <slot />
        </div>
        <div class="modal_footer p-2">footer</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['isModalVisible']),
  },

  methods: {
    ...mapActions(['setModalState']),
  },
}
</script>
