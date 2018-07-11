const arrayCouples = require('./array_couples');

describe('arrayCouples()', () => {
    test('correctly returns string true for matching pairs', () => {
        expect(arrayCouples([4, 5, 1, 4, 5, 4, 4, 1])).toBe('yes');
        expect(arrayCouples([5, 4, 6, 7, 7, 6, 4, 5])).toBe('yes');
    });

    test('correctly returns string of unmatched pairs', () => {
        expect(arrayCouples([6, 2, 2, 6, 5, 14, 14, 1])).toBe('5,14,14,1');
        expect(arrayCouples([2, 1, 1, 2, 3, 3])).toBe('3,3');
    });
});
