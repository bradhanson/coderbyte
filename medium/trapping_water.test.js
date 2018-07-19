const trappingWater = require('./trapping_water');

describe('trappingWater()', () => {
    test('finds correct area of water that can be trapped', () => {
        expect(trappingWater([3, 0, 0, 2, 0, 4])).toBe(10);

        expect(trappingWater([1, 2, 1, 2])).toBe(1);

        expect(trappingWater([0, 2, 4, 0, 2, 1, 2, 6])).toBe(11);
    });
});
