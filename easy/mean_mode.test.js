const meanMode = require('./mean_mode');

describe('meanMode()', () => {
    test('returns 1 for matching mean and mode', () => {
        expect(meanMode([5, 3, 3, 3, 1])).toBe(1);
        expect(meanMode([7, 7, 7, 7])).toBe(1);
    });

    test('returns 0 for not matching mean and mode', () => {
        expect(meanMode([5, 3, 3, 3, 10])).toBe(0);
    });
});
