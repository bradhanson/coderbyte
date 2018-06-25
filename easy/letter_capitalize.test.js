const letterCapitalize = require('./letter_capitalize');

describe('letterCapitalize()', () => {
    test('handles empty string', () => {
        expect(letterCapitalize('')).toBe('');
    });

    test('capitalizes first letter of each word', () => {
        expect(letterCapitalize('hello')).toBe('Hello');
        expect(letterCapitalize('john')).toBe('John');
    });

    test('capitalizes multiple words', () => {
        expect(letterCapitalize('the quick brown fox jumped')).toBe(
            'The Quick Brown Fox Jumped'
        );
    });

    test('ignores non alphabetic characters', () => {
        expect(letterCapitalize('the%$@ quickˆ! brown ! fox jumped')).toBe(
            'The%$@ Quickˆ! Brown ! Fox Jumped'
        );
    });
});
