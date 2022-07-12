<template>
  <div
    id="notif_component"
    class="fixed px-4 py-6 top-8 left-1/2 transform -translate-x-1/2 w-80 bg-prime_h rounded z-30"
  >
    <div class="flex items-center justify-center">
      <div class="flex items-center justify-center flex-1">
        <FormBtnNotifSuccess />
        <span class="mr-2 text-white text-sm font-normal">
          عملیات ثبت نام با موفقیت انجام شد
        </span>
      </div>
      <div class="w-9 h-px transform rotate-90 bg-white mr-2"></div>
      <div>
        <FormBtnIconClose />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
