<template>
  <div
    class="flex items-center justify-between mt-3 font-normal text-xs text-gray-label dark:text-white"
  >
    <div>
      <button
        :disabled="disabled"
        :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
        @click.stop="countDownTimer()"
      >
        ارسال مجدد کد
      </button>
    </div>
    <div>
      <span class="timer">0{{ minute }}:{{ zero }}{{ sec }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: null,
      timerPoll: null,
      minute: null,
      sec: null,
    }
  },

  computed: {
    zero() {
      if (this.sec < 10) return 0
      else return ''
    },

    disabled() {
      return this.minute === 0 && this.sec === 0
    },
  },

  created() {
    this.countDownTimer()
  },

  methods: {
    timerPolling() {
      this.timerPoll = setInterval(() => {
        if (this.sec !== 0 || this.minute !== 0) this.sec--
        if (this.sec === 0 && this.minute !== 0) {
          this.minute--
          this.sec = 59
          if (this.minute === 0) return null
        }
      }, 1000)
    },

    countDownTimer() {
      this.minute = 1
      this.sec = 59
      this.timerPolling()
    },
  },
}
</script>
