export const mustFillRule = (v) => !!v || v === 0 || 'پر کردن این بخش الزامیست'

export const mobileLengthRule = (v) =>
  (typeof v === 'string' && v.length === 11) ||
  !v ||
  'شماره موبایل باید 11 رقمی باشد'

export const PhoneNumberRule = (v) =>
  /(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi.test(
    v
  ) ||
  !v ||
  'فرمت شماره موبایل صحیح نیست'

export const emailFormatRule = (v) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
  !v ||
  'فرمت ایمیل وارد شده صحیح نیست'

export const captchaLengthRule = (v) =>
  (v && v.length === 4) || 'کد امنیتی باید 4 رقمی باشد'

export const nationalFormatRule = (v) => {
  if (!/^\d{10}$/.test(v)) return 'کد ملی باید 10 رقمی باشد'
  const check = +v[9]
  const sum =
    v
      .split('')
      .slice(0, 9)
      .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11
  const isValid = sum < 2 ? check === sum : check + sum === 11
  return isValid || 'کدملی معتبر نیست'
}

export const shebaFormatRule = (v) => {
  return /^(?:IR)(?=.{24}$)[0-9]*$/gi.test(v) || 'شماره شبا صحیح نیست'
}

export const passwordRule = (v) =>
  (v && v.length >= 6) || 'رمزعبور حداقل 6 کاراکتر'
