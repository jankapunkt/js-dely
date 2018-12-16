function getDelayedCallback (delay, cb) {
  if (!cb) {
    return function (callback) {
      return getDelayedCallback(delay, callback)
    }
  } else {
    const start = new Date()
    const delayedCallback = function (...args) {
      const self = this
      const end = new Date()
      const diff = end - start

      if (diff < delay) {
        setTimeout(() => cb.call(self, ...args), delay - diff)
      } else {
        cb.call(self, ...args)
      }
    }
    delayedCallback.__delayStart = start
    delayedCallback.__delayValue = delay
    return delayedCallback
  }
}

export { getDelayedCallback as default }
