import { createObjWithDefaultValues } from '~/utils/general'

export class Login {
  constructor(options) {
    const defaults = {
      username: null,
      password: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
