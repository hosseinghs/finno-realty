<template>
  <button
    class="w-full px-6 py-2 text-orange bg-transparent hover:text-white hover:bg-orange border-2 border-orange transition-all duration-200 rounded-lg"
    :class="
      isLoading ? 'opacity-40  disabled:text-[#CBCBCB] cursor-default' : ''
    "
    :disabled="isLoading"
  >
    <div class="flex items-center justify-center">
      <slot />
      <UiLoading v-if="isLoading" color="#EC860E" />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
