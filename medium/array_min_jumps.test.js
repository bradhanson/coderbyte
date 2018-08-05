const arrayMinJumps = require('./array_min_jumps');

describe('arrayMinJumps()', () => {
    test('correctly returns minimum number of jumps', () => {
        expect(arrayMinJumps([1, 5, 4, 6, 9, 3, 0, 0, 1, 3])).toBe(3);

        expect(arrayMinJumps([3, 4, 2, 1, 1, 100])).toBe(2);

        expect(
            arrayMinJumps([1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2])
        ).toBe(4);
    });

    test('returns -1 if unable to reach end', () => {
        expect(arrayMinJumps([1, 0, 0, 0, 3])).toBe(-1);
    });
});
