<template>
  <div>
    <form @submit.prevent="submitForm()">
      <FormText icon type="text" placeholder="کد تایید را وارد کنید" />

      <FormBtnPrime type="submit" class="mt-5">
        <span class="font-bold">بازیابی رمز عبور</span>
      </FormBtnPrime>
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
