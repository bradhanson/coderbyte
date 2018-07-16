const maximalSquare = require('./maximal_square');

describe('maximalSquare()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(maximalSquare(['10100', '10111', '11111', '10010'])).toBe(4);

        expect(maximalSquare(['0111', '1111', '1111', '1111'])).toBe(9);

        expect(maximalSquare(['0111', '1101', '0111'])).toBe(1);

        expect(maximalSquare(['1111', '1111'])).toBe(4);

        expect(maximalSquare(['1111', '1111', '1111'])).toBe(9);

        expect(maximalSquare(['1111', '1101', '1111', '0111'])).toBe(4);

        expect(maximalSquare(['01001', '11111', '01011', '11011'])).toBe(4);

        expect(
            maximalSquare([
                '01001',
                '11111',
                '01011',
                '11111',
                '01111',
                '11111'
            ])
        ).toBe(9);

        expect(maximalSquare(['101101', '111111', '010111', '111111'])).toBe(9);

        expect(
            maximalSquare([
                '101101',
                '111111',
                '011111',
                '111111',
                '001111',
                '011111'
            ])
        ).toBe(16);
    });
});
