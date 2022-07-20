<template>
  <div>
    <AuthCard>
      <AuthFinnoRealty />

      <div>
        <Form name="loginForm">
          <FormText
            name="username"
            type="text"
            icon
            autofocus
            :rules="[mustFillRule]"
            placeholder="موبایل/ نام کاربری/ ایمیل"
          />

          <FormText
            name="password"
            placeholder="رمز عبور"
            :type="showPassword ? 'text' : 'password'"
            class="mb-0"
            autocomplete
            :rules="[mustFillRule, passwordRule]"
            :icon="
              showPassword
                ? `${require('~/assets/img/icon/eye-off.svg')}`
                : `${require('~/assets/img/icon/eye.svg')}`
            "
            @iconClick="showPassword = !showPassword"
          />

          <div class="text-gray-label text-left text-xs md:text-sm mt-2">
            <span
              class="cursor-pointer dark:text-white"
              @click.stop="$router.push({ name: 'auth-reset-password' })"
            >
              رمز عبور خود را فراموش کرده ام
            </span>
          </div>

          <FormBtnPrime class="mt-20" type="submit" :is-loading="loading">
            <span class="font-bold"> ورود </span>
          </FormBtnPrime>

          <div class="text-center mt-6 font-normal text-sm">
            <p class="text-gray-label dark:text-white">
              هنوز ثبت نام نکرده اید؟
              <span
                class="text-prime font-bold cursor-pointer hover:text-prime_h"
                @click.stop="$router.push({ name: 'auth-sign-up' })"
              >
                ثبت نام کنید
              </span>
            </p>
          </div>
        </Form>
      </div>
    </AuthCard>
  </div>
</template>

<script>
import { mustFillRule, passwordRule } from '~/utils/validation'

export default {
  name: 'LoginPage',

  data() {
    return {
      showPassword: false,
      loading: false,
    }
  },

  methods: {
    mustFillRule,
    passwordRule,

    submitForm() {
      console.log(this.$refs.loginForm)
    },
  },
}
</script>
