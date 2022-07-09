<template>
  <div>
    <AuthCard>
      <div class="text-prime text-center mb-10">
        <h1 class="font-bold mb-2 text-2xl">فینوریلتی</h1>
        <span class="font-normal text-lg"> پلتفرم مدیریت املاک </span>
      </div>

      <div>
        <form @submit.prevent="submitForm()">
          <FormText
            icon
            type="text"
            placeholder="شماره موبایل/ نام کاربری/ ایمیل"
          />
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
          <div class="text-gray-label text-left text-xs md:text-sm mt-2">
            <span class="cursor-pointer"> رمز عبور خود را فراموش کرده ام </span>
          </div>

          <FormBtnPrime class="mt-20">
            <span class="font-bold"> ورود </span>
          </FormBtnPrime>
          <div class="text-center mt-6 font-normal text-sm">
            <p class="text-gray-label">
              هنوز ثبت نام نکرده اید؟
              <span class="text-prime cursor-pointer hover:text-prime_h">
                ثبت نام کنید
              </span>
            </p>
          </div>
        </form>
      </div>
    </AuthCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    }
  },

  methods: {
    submitForm() {
      console.log('ok')
    },
  },
}
</script>
