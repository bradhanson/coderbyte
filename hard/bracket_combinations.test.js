const bracketCombinations = require('./bracket_combinations');

describe('bracketCombinations()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(bracketCombinations(0)).toBe(1);

        expect(bracketCombinations(3)).toBe(5);

        expect(bracketCombinations(4)).toBe(14);

        expect(bracketCombinations(5)).toBe(42);

        expect(bracketCombinations(6)).toBe(132);

        expect(bracketCombinations(7)).toBe(429);

        expect(bracketCombinations(8)).toBe(1430);

        expect(bracketCombinations(9)).toBe(4862);
    });
});
