const palindrome = require('./palindrome');

describe('palindrome()', () => {
    test('correctly returns string true for palindrome', () => {
        expect(palindrome('racecar')).toBe('true');
        expect(palindrome('a')).toBe('true');
        expect(palindrome('aba')).toBe('true');
    });

    test('correctly returns string false for not a palindrome', () => {
        expect(palindrome('racecars')).toBe('false');
        expect(palindrome('ab')).toBe('false');
        expect(palindrome('abac')).toBe('false');
    });
});
