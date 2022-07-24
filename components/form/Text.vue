<template>
  <div class="input_component my-6" :class="error ? 'invalid' : ''">
    <span v-if="label" class="font-normal text-sm text-gray-label mb-1">
      {{ label }}
    </span>
    <div
      id="input_wrapper"
      :class="`relative shadow border-100 dark:bg-black-100 rounded-lg px-4 py-2 bg-white dark:border dark:border-white transition-all duration-100
       ${
         activeFocus ? 'border-2  border-prime_active' : 'border-2 border-white'
       } 
       ${wrapperClass}`"
    >
      <input
        class="w-full text-gray-label dark:text-white dark:bg-black-100 placeholder-text-gray-label dark:placeholder-white outline-none"
        v-bind="$attrs"
        :ref="`input-${name}`"
        @focus="activeFocus = true"
        @blur="activeFocus = false"
        @input="checkValidation($event)"
      />

      <div v-if="icon" class="icon_rtl absolute">
        <img
          class="cursor-pointer"
          :src="icon"
          @click.stop="$emit('iconClick')"
        />
      </div>
    </div>
    <span v-show="error" class="error_message text-xs font-normal">
      {{ error }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rules: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: 'eye',
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    wrapperClass: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      error: null,
      activeFocus: false,
    }
  },

  methods: {
    checkValidation(e) {
      const rules = this.rules
      if (rules.length === 0) return
      const inputValue = e.target.value
      const validationResArr = rules.map((rule) => rule(inputValue))
      const resArr = validationResArr.filter((res) => typeof res === 'string')
      this.error = resArr[0]
      return resArr.length > 0 ? resArr[0] : true
    },
  },
}
</script>

<style lang="scss" scoped>
$error_color: #dc2626;

#input_wrapper .icon_rtl {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

#input_wrapper input {
  background-color: transparent;
}
.input_component.invalid {
  label,
  span.error_message {
    color: $error_color;
  }
  #input_wrapper {
    border-color: $error_color;
  }
}
</style>
