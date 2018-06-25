const longestWord = require('./longest_word');

describe('longestWord()', () => {
    test('returns longest word at start of sentence', () => {
        expect(longestWord('thethethe quick brown fox jumped')).toBe(
            'thethethe'
        );
    });

    test('returns longest word at end of sentence', () => {
        expect(longestWord('the quick brown fox jumpedjumped')).toBe(
            'jumpedjumped'
        );
    });

    test('returns longest word in middle of sentence', () => {
        expect(longestWord('the quick brownbrownbrown fox jumped')).toBe(
            'brownbrownbrown'
        );
    });

    test('returns first longest word if there are multiple of equal length', () => {
        expect(longestWord('the quick brown fox jump')).toBe('quick');
    });

    test('works with capital letters', () => {
        expect(longestWord('THE QUICK BROWNBROWNBROWN FOX JUMPED')).toBe(
            'BROWNBROWNBROWN'
        );
    });

    test('works with mixed case letters', () => {
        expect(longestWord('the quick Brown fox jump')).toBe('quick');
        expect(longestWord('the Quick Brown fox jump')).toBe('Quick');
        expect(longestWord('the Quick brown fox jump')).toBe('Quick');
        expect(longestWord('THE QUICK BRown fox jump')).toBe('QUICK');
    });

    test('ignores non alphanumeric characters', () => {
        expect(
            longestWord('the$%!#$.quick*brown fox jump*!#$!@$!$!!%!00an')
        ).toBe('quick');
    });
});
