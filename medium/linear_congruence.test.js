const linearCongruence = require('./linear_congruence');

describe('linearCongruence()', () => {
    test('returns number of solutions to given linear congruence problem', () => {
        expect(linearCongruence('32x = 8 (mod 4)')).toBe(4);

        expect(linearCongruence('12x = 5 (mod 2)')).toBe(0);

        expect(linearCongruence('12x = 4 (mod 2)')).toBe(2);
    });

    test('passes Coderbyte.com tests', () => {
        expect(linearCongruence('32x = 8 (mod 4)')).toBe(4);

        expect(linearCongruence('12x = 5 (mod 2)')).toBe(0);

        expect(linearCongruence('12x = 4 (mod 2)')).toBe(2);

        expect(linearCongruence('1x = 1 (mod 2)')).toBe(1);

        expect(linearCongruence('22x = 2 (mod 3)')).toBe(1);

        expect(linearCongruence('222x = 5 (mod 2)')).toBe(0);

        expect(linearCongruence('64x = 4 (mod 18)')).toBe(2);

        expect(linearCongruence('64x = 4 (mod 16)')).toBe(0);

        expect(linearCongruence('64x = 4 (mod 12)')).toBe(4);

        expect(linearCongruence('124x = 12 (mod 12)')).toBe(4);
    });
});
