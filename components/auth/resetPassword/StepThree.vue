<template>
  <div>
    <form @submit.prevent="submitForm()">
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

      <FormBtnPrime type="submit" class="mt-5">
        <span class="font-bold">تایید</span>
      </FormBtnPrime>
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

  methods: {
    submitForm() {
      console.log('ok')
    },
  },
}
</script>
