/* eslint-env mocha */
import { assert } from 'chai'
import dely from './index'

describe('dely', function () {
  describe('get delayed callback', function () {
    it('returns a wrapped callback', function (done) {
      const callback = function () {
        done()
      }
      const delayed = dely(100, callback)
      assert.isDefined(delayed)
      assert.isTrue(typeof delayed === 'function')

      // executing delayed should execute callback
      delayed()
    })
  })
})
