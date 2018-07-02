const divisionStringified = require('./division_stringified');

describe('divisionStringified()', () => {
    test('returns properly formatted string', () => {
        expect(divisionStringified(123456789, 10000)).toBe('12,346');
    });

    test('handles result with no commas', () => {
        expect(divisionStringified(940000, 1000)).toBe('940');
        expect(divisionStringified(94000, 1000)).toBe('94');
        expect(divisionStringified(9400, 1000)).toBe('9');
    });

    test('handles result with more than one comma', () => {
        expect(divisionStringified(10000000, 10)).toBe('1,000,000');
    });

    test('rounds results', () => {
        expect(divisionStringified(999999, 1000)).toBe('1,000');
    });

    test('handles division by 0', () => {
        expect(divisionStringified(7, 0)).toBe('undefined');
    });
});
