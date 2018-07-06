const dashInsert = require('./dash_insert');

describe('dashInsert()', () => {
    test('correctly inserts dashes between odd numbers', () => {
        expect(dashInsert('454793')).toBe('4547-9-3');
    });

    test('correctly inserts no dashes when no odd numbers', () => {
        expect(dashInsert('02468')).toBe('02468');
    });

    test('correclty inserts no dashes when no consecutive odd numbers', () => {
        expect(dashInsert('123456789')).toBe('123456789');
    });

    test('handles empty string', () => {
        expect(dashInsert('')).toBe('');
    });

    test('handles single odd number', () => {
        expect(dashInsert('7')).toBe('7');
    });
});
