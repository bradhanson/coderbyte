const matchingCouples = require('./matching_couples');

describe('matchingCouples()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(matchingCouples([5, 3, 2])).toBe(15);

        expect(matchingCouples([10, 5, 4])).toBe(900);

        expect(matchingCouples([5, 5, 4])).toBe(200);

        expect(matchingCouples([2, 2, 2])).toBe(4);

        expect(matchingCouples([10, 10, 4])).toBe(4050);

        expect(matchingCouples([5, 5, 2])).toBe(25);

        expect(matchingCouples([10, 10, 6])).toBe(86400);

        expect(matchingCouples([6, 6, 4])).toBe(450);

        expect(matchingCouples([10, 5, 4])).toBe(900);

        expect(matchingCouples([15, 10, 6])).toBe(327600);
    });
});
