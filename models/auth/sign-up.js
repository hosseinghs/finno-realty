import { createObjWithDefaultValues } from '~/utils/general'

export class Signup {
  constructor(options) {
    const defaults = {
      phoneNumber: null,
      nationalCode: null,
      password: null,
      repeatPassword: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}

export class Verification {
  constructor(options) {
    const defaults = {
      code: null,
      captcha: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
