const countingAnagrams = require('./counting_anagrams');

describe('countingAnagrams()', () => {
    test('correctly returns number of anagrams', () => {
        expect(
            countingAnagrams('cars are very cool so are arcs and my os')
        ).toBe(2);

        expect(countingAnagrams('quick the kcqui')).toBe(1);
    });

    test('returns 0 for empty string', () => {
        expect(countingAnagrams('')).toBe(0);
    });
});
