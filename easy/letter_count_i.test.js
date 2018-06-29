const letterCountI = require('./letter_count_i');

describe('letterCountI()', () => {
    test('returns word with greatest number of repeat letters', () => {
        expect(letterCountI('Today, is the greatest day ever!')).toBe(
            'greatest'
        );
    });

    test('if multiple words with same count, return first one', () => {
        expect(letterCountI('abc zzzzfdaf mmmmadffad')).toBe('zzzzfdaf');
    });

    test('if no repeat letters in words, return -1', () => {
        expect(letterCountI('abcd ef ghij klmno p qrstuvw xyz')).toBe(-1);
    });

    test('returns -1 for empty string', () => {
        expect(letterCountI('')).toBe(-1);
    });
});
