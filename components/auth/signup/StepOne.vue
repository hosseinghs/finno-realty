<template>
  <div>
    <form @submit.prevent="submitForm()">
      <FormText icon type="text" placeholder="موبایل/ نام کاربری/ ایمیل" />
      <FormText icon type="text" placeholder="کدملی" />

      <FormText
        placeholder="رمز عبور"
        :type="showPassword ? 'text' : 'password'"
        class="mb-0"
        autocomplete
        :icon="
          showPassword
            ? `${require('~/assets/img/icon/eye-off.svg')}`
            : `${require('~/assets/img/icon/eye.svg')}`
        "
        @iconClick="showPassword = !showPassword"
      />

      <FormText
        placeholder="تکرار رمز عبور"
        :type="showRepeatedPassword ? 'text' : 'password'"
        class="mb-0"
        autocomplete
        :icon="
          showRepeatedPassword
            ? `${require('~/assets/img/icon/eye-off.svg')}`
            : `${require('~/assets/img/icon/eye.svg')}`
        "
        @iconClick="showRepeatedPassword = !showRepeatedPassword"
      />

      <FormBtnPrime type="submit" class="mt-20">
        <span class="font-bold">اعتبارسنجی و ثبت نام</span>
      </FormBtnPrime>
      <div class="text-center mt-6 font-normal text-sm">
        <p class="text-gray-100">
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
  data() {
    return {
      showPassword: false,
      showRepeatedPassword: false,
    }
  },
}
</script>
