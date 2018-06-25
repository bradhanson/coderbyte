const firstReverse = require('./first_reverse');

describe('firstReverse()', () => {
    test('reverses string and maintains capitalization and spacing', () => {
        expect(firstReverse('Hello World and Coders')).toBe(
            'sredoC dna dlroW olleH'
        );
        expect(firstReverse('12 -345')).toBe('543- 21');
    });

    test('returns empty string when passed empty string', () => {
        expect(firstReverse('')).toBe('');
    });
});
