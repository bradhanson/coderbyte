const arrayRotation = require('./array_rotation');

describe('arrayRotation()', () => {
    test('correctly returns rotated array as string', () => {
        expect(arrayRotation([2, 3, 4, 1, 6, 10])).toBe('4161023');
        expect(arrayRotation([3, 2, 1, 6])).toBe('6321');
        expect(arrayRotation([4, 3, 4, 3, 1, 2])).toBe('124343');
    });

    test('handles empty array', () => {
        expect(arrayRotation([])).toBe('');
    });

    test('handles one element in array', () => {
        expect(arrayRotation([7])).toBe('7');
    });
});
