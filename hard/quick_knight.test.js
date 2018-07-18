const quickKnight = require('./quick_knight');

describe('quickKnight()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(quickKnight('(1 1)(8 8)')).toBe(6);

        expect(quickKnight('(2 2)(3 3)')).toBe(2);

        expect(quickKnight('(2 3)(7 5)')).toBe(3);

        expect(quickKnight('(1 1)(2 2)')).toBe(4);

        expect(quickKnight('(1 1)(3 3)')).toBe(4);

        expect(quickKnight('(1 1)(8 1)')).toBe(5);

        expect(quickKnight('(7 8)(5 6)')).toBe(4);

        expect(quickKnight('(7 8)(8 6)')).toBe(1);

        expect(quickKnight('(6 3)(7 2)')).toBe(2);

        expect(quickKnight('(1 1)(1 2)')).toBe(3);
    });
});
