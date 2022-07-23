<template>
  <div>
    <form @submit.prevent="submitForm()">
      <div class="w-56 mx-auto">
        <FormOtp />
        <FormTimer />
        
      </div>
      <FormBtnPrime>ثبت نام</FormBtnPrime>

      <div class="text-center mt-6 font-normal text-sm">
        <p class="text-gray-100 dark:text-white">
          قبلا ثبت نام کرده اید؟
          <span
            class="text-prime font-bold cursor-pointer hover:text-prime_h"
            @click.stop="$router.push({ name: 'auth-login' })"
          >
            اینجا را کلیک کنید
          </span>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log('ok')
    },
  },
}
</script>
