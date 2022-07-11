export default function ({ $axios, store, redirect }, inject) {
  /* -------------------------------------------------------------------------- */
  /*                     create and configure axios instance                    */
  /* -------------------------------------------------------------------------- */

  const api = $axios.create({
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  api.setHeader('Content-Type', 'application/json', ['post'])

  api.onRequest((req) => {
    const userToken = window.localStorage.getItem('authorization')
    if (userToken) req.headers.authorization = `bearer ${JSON.parse(userToken)}`
  })

  api.onResponseError((err) => {
    if (err) {
      let msg = 'مشکلی پیش آمده است'

      if (err && err.response.status === 401) {
        window.localStorage.removeItem('authorization')
        window.localStorage.removeItem('admin')
        redirect('/')
        msg = 'دوباره وارد شوید'
      }

      const payload = {
        config: {
          color: 'error',
          title: msg,
        },
        timer: 3000,
      }
      store.dispatch('notification/notify', payload)
      throw new Error(msg)
    }
  })

  const apiCaller = function (apiCallFunc, hasLoading = true) {
    return async function () {
      let result
      let timeout
      let isLoadingActivated = false
      try {
        if (hasLoading) {
          timeout = setTimeout(() => {
            isLoadingActivated = true
            store.dispatch('loading/setLoadingState', true)
          }, 200)
        }
        result = await apiCallFunc(api)
      } catch (e) {
        result = false
      } finally {
        if (isLoadingActivated) store.dispatch('loading/setLoadingState', false)
        else clearTimeout(timeout)
      }
      return result
    }
  }
  inject('apiCaller', apiCaller)
}
