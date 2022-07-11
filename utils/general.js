export function addToArr(arr, v) {
  if (Array.isArray(v)) arr.push(...v)
  else arr.push(v)
}

export function faDate(date, returnSymbol = '--') {
  if (isNaN(Date.parse(date))) return returnSymbol
  if (date && date !== '0001-01-01T00:00:00') {
    return new Date(date).toLocaleDateString('fa-IR')
  }
  return null
}

export function faMoney(mny) {
  if (+mny % 1 !== 0) return mny
  else
    return mny
      .toString()
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function createObjWithDefaultValues(self, defaults, options) {
  const res = Object.assign({}, defaults, options)
  Object.keys(defaults).forEach((k) => {
    self[k] = res[k]
  })
}

export function deleteKeyFromObj(obj, ...keys) {
  keys.forEach((k) => {
    delete obj[k]
  })
}

export function deleteObjFromArr(arr, key = 'id', id) {
  if (Array.isArray(arr)) {
    const doomedObj = arr.find((obj) => obj[key] === id)
    const doomedObjIndex = arr.indexOf(doomedObj)
    arr.splice(doomedObjIndex, 1)
  }
}

export function divideCreditCardNumbersByFour(num) {
  if (num) return num.toString().replace(/(\d{4}(?!\s))/g, '$1 ')
}

export function generateQueryStringFromAnObject(obj) {
  if (!obj) return
  let q = ''
  for (const [key, value] of Object.entries(obj)) {
    if (value && value !== null) q += `${key}=${value}&&`
  }
  return q
}

export function createObjWithKeysAndValues(state, obj = {}) {
  if (!state || typeof state !== 'object') return
  for (const [key, value] of Object.entries(obj)) {
    state[key] = value
  }
}

export function getDifferenceBetweenTwoTimes(start, end) {
  const perDay = 1000 * 60 * 60 * 24
  const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())
  const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())
  return Math.floor((utc2 - utc1) / perDay)
}

export function subtractDayFromDate(days) {
  const today = new Date()
  today.setDate(today.getDate() - days)
  const res = today.toISOString().split('T')[0]
  return res
}

export function getType(obj) {
  const lowerCaseTheFirstLetter = (str) => str[0].toLowerCase() + str.slice(1)
  const type = typeof obj
  if (type !== 'object') {
    return type
  }

  return lowerCaseTheFirstLetter(
    Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
  )
}

export function setThemeautomatically() {
  const html = document.querySelector('html')

  const isThemeDark =
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  console.log(isThemeDark);
  if (isThemeDark) {
    {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
