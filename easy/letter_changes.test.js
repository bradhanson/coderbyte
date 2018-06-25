const {
    letterChanges,
    caesarCipher,
    isAlpha,
    isUpperCase,
    isLowerCase,
    capitalizeVowels
} = require('./letter_changes');

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

    test('handles uppercase letters in input', () => {
        expect(letterChanges('QUICK brown FOX jumped OVER')).toBe(
            'RVJDL cspxO GPY kvnqfE PWFS'
        );
    });
});

describe('caesarCipher()', () => {
    test('shifts letters by given key', () => {
        expect(caesarCipher('abz', 1)).toBe('bca');
        expect(caesarCipher('abz', 2)).toBe('cdb');
    });
});

describe('isAlpha()', () => {
    test('correctly detects only alphabetic characters', () => {
        expect(isAlpha('abcdafqwer')).toBe(true);
    });

    test('correctly detects non alphabetic characters', () => {
        expect(isAlpha('abcdaf5qwer')).toBe(false);
        expect(isAlpha('abcdafqwer$')).toBe(false);
    });
});

describe('isUpperCase()', () => {
    test('correctly detects all uppercase characters', () => {
        expect(isUpperCase('ABCZ')).toBe(true);
        expect(isUpperCase('ABcZ')).toBe(false);
    });
});

describe('isLowerCase()', () => {
    test('correctly detects all lowercase characters', () => {
        expect(isLowerCase('abcz')).toBe(true);
        expect(isLowerCase('abcZ')).toBe(false);
    });
});

describe('capitalizeVowels()', () => {
    test('capitalizes vowels correctly', () => {
        expect(capitalizeVowels('abcdefg_aeiou')).toBe('AbcdEfg_AEIOU');
    });
});
