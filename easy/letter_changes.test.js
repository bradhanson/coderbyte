const letterChanges = require('./letter_changes');

describe('letterChanges()', () => {
    test('handles empty string', () => {
        expect(letterChanges('')).toBe('');
    });

    test('replaces letter with next letter', () => {
        expect(letterChanges('abc')).toBe('bcd');
        expect(letterChanges('zxz')).toBe('AyA');
    });

    test('capitalizes vowels', () => {
        expect(letterChanges('zab')).toBe('Abc');
        expect(letterChanges('zdhnt')).toBe('AEIOU');
    });

    test('handles non alphabetic characters', () => {
        expect(letterChanges('85451234_zabc%$!#4')).toBe('85451234_Abcd%$!#4');
    });
});
