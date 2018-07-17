const arrayJumping = require('./array_jumping');

describe('arrayJumping()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(arrayJumping([1, 2, 3, 4, 2])).toBe(3);

        expect(arrayJumping([1, 7, 1, 1, 1, 1])).toBe(2);

        expect(arrayJumping([2, 3, 5, 6, 1])).toBe(2);

        expect(arrayJumping([1, 2, 1])).toBe(2);

        expect(arrayJumping([1, 2, 1, 2, 1, 9])).toBe(3);

        expect(arrayJumping([1, 2, 1, 2, 1, 12])).toBe(1);

        expect(arrayJumping([0, 5, 2])).toBe(2);

        expect(arrayJumping([1, 6, 5, 7, 9, 2])).toBe(-1);

        expect(arrayJumping([1, 3, 5, 7, 9, 2])).toBe(2);

        expect(arrayJumping([1, 5, 1, 6, 2, 3, 3])).toBe(2);
    });
});
