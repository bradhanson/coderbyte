const histogramArea = require('./histogram_area');

describe('histogramArea()', () => {
    test('finds max rectangle area of histogram', () => {
        expect(histogramArea([2, 1, 3, 4, 1])).toBe(6);

        expect(histogramArea([6, 3, 1, 4, 12, 4])).toBe(12);

        expect(histogramArea([5, 6, 7, 4, 1])).toBe(16);
    });
});
