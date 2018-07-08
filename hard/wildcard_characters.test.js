const wildcardCharacters = require('./wildcard_characters');

describe('wildcardCharacters()', () => {
    test('correctly returns "true" for string matching pattern', () => {
        expect(wildcardCharacters('**+*{2} mmmrrrkbb')).toBe('true');
    });

    test('correctly returns "false" for string not matching pattern', () => {
        expect(wildcardCharacters('+++++* abcdemmmmmm')).toBe('false');
    });

    test('passes coderbyte.com tests', () => {
        expect(wildcardCharacters('++*{5} gheeeee')).toBe('true');
        expect(wildcardCharacters('+++++* abcdemmmmmm')).toBe('false');
        expect(wildcardCharacters('**+*{2} mmmrrrkbb')).toBe('true');
        expect(wildcardCharacters('+ a')).toBe('true');
        expect(wildcardCharacters('*{1}*{1} rt')).toBe('true');
        expect(wildcardCharacters('*+ vvr')).toBe('false');
        expect(wildcardCharacters('* ttt')).toBe('true');
        expect(wildcardCharacters('*{7} gggaggggg')).toBe('false');
        expect(wildcardCharacters('+*{10}+ gphpppppppppp')).toBe('false');
        expect(wildcardCharacters('****{4}+++ fffbbbeeerrrrmko')).toBe('true');
    });
});
