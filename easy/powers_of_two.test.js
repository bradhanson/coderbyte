const powersOfTwo = require('./powers_of_two');

describe('powersOfTwo()', () => {
    test("returns 'true' for power of two", () => {
        expect(powersOfTwo(16)).toBe('true');
        expect(powersOfTwo(256)).toBe('true');
    });

    test("returns 'false' for not power of two", () => {
        expect(powersOfTwo(22)).toBe('false');
        expect(powersOfTwo(257)).toBe('false');
    });
});
