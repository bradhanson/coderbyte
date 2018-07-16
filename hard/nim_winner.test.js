const nimWinner = require('./nim_winner');

describe('nimWinner()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(nimWinner([1, 2, 3])).toBe(2);

        expect(nimWinner([1, 1, 1, 4, 5, 4])).toBe(1);

        expect(nimWinner([1, 1, 1, 1])).toBe(2);

        expect(nimWinner([1, 1, 1])).toBe(1);

        expect(nimWinner([1, 2, 3, 4])).toBe(1);

        expect(nimWinner([1, 2, 3, 4, 5, 6])).toBe(1);

        expect(nimWinner([1, 2, 3, 4, 5, 6, 7])).toBe(2);

        expect(nimWinner([3, 3, 3, 3])).toBe(2);

        expect(nimWinner([5, 1, 2, 4, 2])).toBe(2);

        expect(nimWinner([5, 5, 1, 4, 4])).toBe(1);
    });
});
