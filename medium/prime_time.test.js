const primeTime = require('./prime_time');

describe('primeTime()', () => {
    test('correctly checks if number is prime', () => {
        expect(primeTime(2)).toBe(true);
        expect(primeTime(3)).toBe(true);
        expect(primeTime(5)).toBe(true);
        expect(primeTime(8171)).toBe(true);
    });

    test('correctly handles input of 1', () => {
        expect(primeTime(1)).toBe(true);
    });
});
