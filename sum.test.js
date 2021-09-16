const [sum, bestLaCroixFlavor, retNull] = require('./sum')

// Toda função que é um prototype de expect ela somente se refere ao valor que é inserido como parametro.
//As funções que não são prototype elas avaliam o return do valor.

//Funções acompanhadas do expect avaliam o parametro da função ou seja o valor inputado.

describe('toBe()', () => {
    test('cheking if the expect result is = adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe('expect.anything()', () => {
    test('Expect any value from the expect value except null and undefined', () => {
        expect.anything(bestLaCroixFlavor())
    })
})

describe('expect.any()', () => {
    test('Matches anything that was created with the given constructor.', () => {
        expect.any(bestLaCroixFlavor('grapefruit'))
    })
})


describe('toBeNull()', () =>{
    test('Check the returned value wich is from expect will return null', () => {
        expect(retNull()).toBeNull()
    })
})

// Expect.extend -> Podemos criar nossas proprias matchers de qual valor queremos receber.
expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
});
  
test('numeric ranges', () => {
    expect(100).toBeWithinRange(90, 110);
    expect(101).not.toBeWithinRange(0, 100);
    expect({apples: 6, bananas: 3}).toEqual({
      apples: expect.toBeWithinRange(1, 10),
      bananas: expect.not.toBeWithinRange(11, 20),
    });
});
