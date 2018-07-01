const secondGreatLow = require('./second_great_low');

describe('secondGreatLow()', () => {
    test('correctly returns second and penultimate number', () => {
        expect(secondGreatLow([7, 7, 12, 98, 106])).toBe('12 98');
    });

    test('handles array size of 2', () => {
        expect(secondGreatLow([80, 80])).toBe('80 80');
        expect(secondGreatLow([5, 1])).toBe('5 1');
    });
});
