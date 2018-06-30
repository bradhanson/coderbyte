const abCheck = require('./ab_check');

describe('abCheck()', () => {
    test('correctly finds "a" and "b" separated by 3 characters', () => {
        expect(abCheck('lane borrowed')).toBe('true');
    });

    test('correctly finds "b" and "a" separated by 3 characters', () => {
        expect(abCheck('xxbzzzax')).toBe('true');
    });

    test('correctly returns "false" if "a" and "b" are not 3 characters apart', () => {
        expect(abCheck('lane _borrowed')).toBe('false');
    });
});
