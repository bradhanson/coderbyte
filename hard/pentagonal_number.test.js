const pentagonalNumber = require('./pentagonal_number');

describe('pentagonalNumber()', () => {
    test('correct value for input of 1', () => {
        expect(pentagonalNumber(1)).toBe(1);
    });

    test('correct value for input of 2', () => {
        expect(pentagonalNumber(2)).toBe(6);
    });

    test('correct value for input of 3', () => {
        expect(pentagonalNumber(3)).toBe(16);
    });

    test('correct value for input of 4', () => {
        expect(pentagonalNumber(4)).toBe(31);
    });
});
