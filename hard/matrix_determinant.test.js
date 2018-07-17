const matrixDeterminant = require('./matrix_determinant');

describe('matrixDeterminant()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(
            matrixDeterminant([
                '1',
                '2',
                '4',
                '<>',
                '2',
                '1',
                '1',
                '<>',
                '4',
                '1',
                '1'
            ])
        ).toBe(-4);

        expect(matrixDeterminant(['1', '2', '<>', '3', '4'])).toBe(-2);

        expect(matrixDeterminant(['5', '0', '<>', '0', '5'])).toBe(25);

        expect(
            matrixDeterminant([
                '1',
                '2',
                '4',
                '<>',
                '2',
                '1',
                '1',
                '<>',
                '4',
                '5',
                '5'
            ])
        ).toBe(12);

        expect(
            matrixDeterminant(['1', '2', '<>', '2', '1', '<>', '1', '1', '1'])
        ).toBe(-1);

        expect(matrixDeterminant(['1', '0', '<>', '1', '0'])).toBe(0);

        expect(
            matrixDeterminant([
                '-1',
                '-1',
                '-1',
                '<>',
                '0',
                '9',
                '100',
                '<>',
                '2',
                '3',
                '5'
            ])
        ).toBe(73);

        expect(
            matrixDeterminant([
                '1',
                '2',
                '3',
                '4',
                '5',
                '<>',
                '2',
                '2',
                '4',
                '5',
                '6',
                '<>',
                '3',
                '4',
                '4',
                '5',
                '6',
                '<>',
                '4',
                '5',
                '5',
                '0',
                '1',
                '<>',
                '5',
                '6',
                '6',
                '1',
                '1'
            ])
        ).toBe(43);

        expect(
            matrixDeterminant([
                '1000',
                '2',
                '3',
                '4',
                '5',
                '<>',
                '2',
                '2',
                '4',
                '5',
                '6',
                '<>',
                '3',
                '4',
                '4',
                '5',
                '6',
                '<>',
                '4',
                '5',
                '5',
                '0',
                '1',
                '<>',
                '5',
                '6',
                '6',
                '1',
                '1000'
            ])
        ).toBe(49801192);

        expect(
            matrixDeterminant([
                '-6',
                '1',
                '-6',
                '<>',
                '-1',
                '-1',
                '-1',
                '<>',
                '1',
                '1',
                '2'
            ])
        ).toBe(7);
    });
});
