const longestMatrixPath = require('./longest_matrix_path');

describe('longestMatrixPath()', () => {
    test('correctly returns number of connections to longest path', () => {
        expect(longestMatrixPath(['345', '326', '221'])).toBe(3);
        expect(longestMatrixPath(['12256', '56219', '43215'])).toBe(5);
        expect(longestMatrixPath(['67', '21', '45'])).toBe(3);
    });

    test('passes Coderbyte.com tests', () => {
        expect(longestMatrixPath(['345', '326', '221'])).toBe(3);

        expect(longestMatrixPath(['12256', '56219', '43215'])).toBe(5);

        expect(longestMatrixPath(['67', '21', '45'])).toBe(3);

        expect(longestMatrixPath(['111', '111', '111'])).toBe(0);

        expect(
            longestMatrixPath(['564215', '287532', '193167', '111123'])
        ).toBe(5);

        expect(longestMatrixPath(['123', '456', '789'])).toBe(4);

        expect(longestMatrixPath(['923', '456', '789'])).toBe(3);

        expect(longestMatrixPath(['92', '15', '98', '32'])).toBe(3);

        expect(longestMatrixPath(['9', '1', '9', '3', '1'])).toBe(2);

        expect(longestMatrixPath(['9452124643115673264'])).toBe(3);
    });
});
