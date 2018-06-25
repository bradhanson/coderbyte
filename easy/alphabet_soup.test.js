const alphabetSoup = require('./alphabet_soup');

describe('alphabetSoup()', () => {
    test('returns string in alphabetical order', () => {
        expect(alphabetSoup('hello')).toBe('ehllo');
    });

    test('handles already alphabetized string', () => {
        expect(alphabetSoup('abcd')).toBe('abcd');
    });

    test('handles capital letters in string', () => {
        expect(alphabetSoup('helloHELLO')).toBe('EHLLOehllo');
    });
});
