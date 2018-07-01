const primeTime = require('./prime_time');

describe('primeTime()', () => {
    test('correctly checks if number is prime', () => {
        expect(primeTime(2)).toBe('true');
        expect(primeTime(3)).toBe('true');
        expect(primeTime(5)).toBe('true');
        expect(primeTime(8171)).toBe('true');
    });

    test('determines non prime number', () => {
        expect(primeTime(4)).toBe('false');
        expect(primeTime(6)).toBe('false');
        expect(primeTime(100)).toBe('false');
    });

    test('correctly handles input of 1', () => {
        expect(primeTime(1)).toBe('true');
    });
});
