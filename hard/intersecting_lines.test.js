const intersectingLines = require('./intersecting_lines');

describe('intersectingLines()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(intersectingLines(['(3,0)', '(1,4)', '(0,-3)', '(2,3)'])).toBe(
            '(9/5,12/5)'
        );

        expect(
            intersectingLines(['(0,15)', '(3,-12)', '(2,1)', '(13,7)'])
        ).toBe('(166/105,27/35)');

        expect(
            intersectingLines(['(1,2)', '(3,4)', '(-5,-6)', '(-7,-8)'])
        ).toBe('no intersection');

        expect(
            intersectingLines(['(10,11)', '(12,16)', '(6,7)', '(18,-4)'])
        ).toBe('(318/41,221/41)');

        expect(intersectingLines(['(0,0)', '(0,-1)', '(1,1)', '(0,1)'])).toBe(
            '(0,1)'
        );

        expect(
            intersectingLines(['(9,-2)', '(-2,9)', '(3,4)', '(10,11)'])
        ).toBe('(3,4)');

        expect(
            intersectingLines(['(100,5)', '(6,2)', '(2,6)', '(5,100)'])
        ).toBe('(170/91,170/91)');

        expect(
            intersectingLines(['(1,-1)', '(1,1)', '(-5,-5)', '(-7,-7)'])
        ).toBe('(1,1)');

        expect(
            intersectingLines(['(6,12)', '(7,14)', '(-100,-3)', '(-3,-5)'])
        ).toBe('(-491/196,-491/98)');

        expect(
            intersectingLines(['(4,3)', '(2,1)', '(-7,-6)', '(-4,-1)'])
        ).toBe('(-10,-11)');
    });
});
