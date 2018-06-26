const exOh = require('./ex_oh');

describe('exOh()', () => {
    test('correctly returns unmatched exes and ohs', () => {
        expect(exOh('xooxxxxooxo')).toBe('false');
        expect(exOh('x')).toBe('false');
        expect(exOh('o')).toBe('false');
    });

    test('correctly returns matched exes and ohs', () => {
        expect(exOh('oooxxoooxxxx')).toBe('true');
    });
});
