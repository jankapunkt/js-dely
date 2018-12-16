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

  describe('get delay callback factory function', function () {
    it('returns a function that can create delayed callbacks', function (done) {
      const by100 = dely(100)
      assert.isDefined(by100)
      assert.isTrue(typeof by100 === 'function')

      const callback = function () {
        done()
      }

      const delayed = by100(callback)
      assert.isDefined(delayed)
      assert.isTrue(typeof delayed === 'function')

      delayed()
    })
  })
})
