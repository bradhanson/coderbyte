const swapCase = require('./swap_case');

describe('swapCase()', () => {
    test('converts lowercase letters to uppercase', () => {
        expect(swapCase('abcz')).toBe('ABCZ');
    });

    test('converts uppercase letters to lowercase', () => {
        expect(swapCase('ZABC')).toBe('zabc');
    });

    test('correctly swaps cases', () => {
        expect(swapCase('the QUICK Brown foX')).toBe('THE quick bROWN FOx');
    });

    test('ignores non alphabetic characters', () => {
        expect(swapCase('the $&@!QUICK &@!Brown&@! foX')).toBe(
            'THE $&@!quick &@!bROWN&@! FOx'
        );
    });
});
