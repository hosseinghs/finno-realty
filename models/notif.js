import { createObjWithDefaultValues } from '~/utils/general'

export class Notif {
  constructor(options) {
    const defaults = {
      color: null,
      title: null,
    }
    createObjWithDefaultValues(this, defaults, options)
  }
}
