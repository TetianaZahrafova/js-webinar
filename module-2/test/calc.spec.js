const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it('value test', ()=>{
        let actualResult = calc(3).v
        let expectedResult = 3
        expect(expectedResult).equal(actualResult)
        }
      )

    it('addition test',()=>{
        let actualResult = calc(3).add(5).v
        let expectedResult = 8
        expect(expectedResult).equal(actualResult)
        }
      )

    it('extraction test', ()=>{
        let actualResult = calc(3).minus(2).v
        let expectedResult = 1
        expect(expectedResult).equal(actualResult)
        }
      )

    it('square root test', ()=>{
         let actualResult = calc(4).sqrt().v
         let expectedResult = 2
         expect(expectedResult).equal(actualResult)
        }
      )
    it('multiplication test', ()=>{
         let actualResult = calc(3).times(10).v
         let expectedResult = 30
         expect(expectedResult).equal(actualResult)
        })
    it('division test', ()=>{
         let actualResult = calc(10).divide(2).v
         let expectedResult = 5
         expect(expectedResult).equal(actualResult)
        })
    it('module test', ()=>{
         let actualResult = calc(10).modulo(5).v
         let expectedResult = 0
         expect(expectedResult).equal(actualResult)
        })
    it('divided by 0 test', ()=>{
         expect(() => calc(5).divide(0)).to.throw()
        })
    it('square root of negative test', ()=>{
         expect(() => calc(-3).sqrt()).to.throw()
        })
    it('multiple actions test1', () => {
        let firstOperation = calc(3).add(4)
        let secondOperation = firstOperation.minus(3)
        let actualResult = secondOperation.times(6).v
        let expectedResult = 24
        expect(expectedResult).equal(actualResult)
        })
});