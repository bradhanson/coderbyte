const matrixSpiral = require('./matrix_spiral');

describe('matrixSpiral()', () => {
    test('returns correct matrix spiral', () => {
        expect(matrixSpiral(['[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]'])).toBe(
            '1,2,3,6,9,8,7,4,5'
        );

        expect(matrixSpiral(['[1, 2]', '[10, 14]'])).toBe('1,2,14,10');

        expect(
            matrixSpiral(['[4, 5, 6, 5]', '[1, 1, 2, 2]', '[5, 4, 2, 9]'])
        ).toBe('4,5,6,5,2,9,2,4,5,1,1,2');
    });

    test('passes Coderbyte.com tests', () => {
        expect(
            matrixSpiral([
                '[1, 2, 3, 4, 5]',
                '[4, 5, 6, 7, 8]',
                '[7, 8, 9, 10, 11]',
                '[14, 3, 2, 1, 3]',
                '[6, 7, 3, 2, 1]'
            ])
        ).toBe('1,2,3,4,5,8,11,3,1,2,3,7,6,14,7,4,5,6,7,10,1,2,3,8,9');
    });
});
