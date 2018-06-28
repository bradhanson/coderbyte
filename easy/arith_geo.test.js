const arithGeo = require('./arith_geo');

describe('arithGeo()', () => {
    test('correctly determines arithmetic pattern', () => {
        expect(arithGeo([2, 4, 6, 8])).toBe('Arithmetic');
        expect(arithGeo([3, 4, 5, 6])).toBe('Arithmetic');
    });

    test('correctly determines geometric pattern', () => {
        expect(arithGeo([2, 6, 18, 54])).toBe('Geometric');
        expect(arithGeo([1, 6, 36, 216, 1296])).toBe('Geometric');
    });

    test('correctly identifies as other', () => {
        expect(arithGeo([1, 2, 3, 5])).toBe(-1);
    });

    test('correctly identifies one element array', () => {
        expect(arithGeo([1])).toBe(-1);
    });

    test('correctly identifies zero element array', () => {
        expect(arithGeo([])).toBe(-1);
    });
});
