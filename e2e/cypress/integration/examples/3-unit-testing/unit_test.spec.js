/// <reference types="cypress" />

import testFileforMultiple from '../../../../testFileforMultiple'
// math exports a default object with methods
import math from '../../../../math'

describe('Unit Test Application Code', function () {
  const { add, divide, multiply, subtract } = math

  before(() => {
    // check if the import worked correctly
    expect(add, 'add').to.be.a('function')
  })

  context('math.js', function () {
    it('can add numbers', function () {
      expect(add(1, 2)).to.eq(3)
    })

    it('can subtract numbers', function () {
      expect(subtract(5, 12)).to.eq(-7)
    })

    it('can divide numbers', function () {
      expect(divide(27, 9)).to.eq(3)
    })

    it('can muliple numbers', function () {
      expect(multiply(5, 4)).to.eq(20)
    })
  })

  context('testFileforMultiple.js', function () {
    function numsExpectedToEq (arr, expected) {
      // loop through the array of nums and make
      // sure they equal what is expected
      arr.forEach((num) => {
        expect(testFileforMultiple(num)).to.eq(expected)
      })
    }

    it('returns "mul3" when number is multiple of 3', function () {
      numsExpectedToEq([9, 12, 18], 'mul3')
    })

    it('returns "mul5" when number is multiple of 5', function () {
      numsExpectedToEq([10, 20, 25], 'mul5')
    })

    it('returns "mul3mul5" when number is multiple of both 3 and 5', function () {
      numsExpectedToEq([15, 30, 60], 'mul3mul5')
    })
  })
})
