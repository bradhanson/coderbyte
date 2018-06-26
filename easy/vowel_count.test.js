const vowelCount = require('./vowel_count');

describe('vowelCount()', () => {
    test('returns correct vowel count', () => {
        expect(vowelCount('All cows eat grass and moo')).toBe(8);
        expect(vowelCount('aeiou')).toBe(5);
        expect(vowelCount('aaayyy')).toBe(3);
        expect(vowelCount('bcd')).toBe(0);
    });

    test('returns correctly for empty string', () => {
        expect(vowelCount('')).toBe(0);
    });
});
