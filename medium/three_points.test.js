const threePoints = require('./three_points');

describe('threePoints()', () => {
    test('correctly returns side of point relative to line', () => {
        expect(threePoints(['(1,1)', '(3,3)', '(2,0)'])).toBe('right');

        expect(threePoints(['(0,-3)', '(-2,0)', '(0,0)'])).toBe('right');

        expect(threePoints(['(0,0)', '(0,5)', '(0,2)'])).toBe('neither');
    });

    test('passes Coderbyte.com tests', () => {
        expect(threePoints(['(1,1)', '(3,3)', '(2,0)'])).toBe('right');

        expect(threePoints(['(0,-3)', '(-2,0)', '(0,0)'])).toBe('right');

        expect(threePoints(['(0,0)', '(0,5)', '(0,2)'])).toBe('neither');

        expect(threePoints(['(0,0)', '(0,5)', '(-2,2)'])).toBe('left');

        expect(threePoints(['(0,0)', '(0,100)', '(-200,5)'])).toBe('left');

        expect(threePoints(['(-3,0)', '(0,1)', '(-1,0)'])).toBe('right');

        expect(threePoints(['(0,1)', '(-3,0)', '(-1,0)'])).toBe('left');

        expect(threePoints(['(0,5)', '(0,-5)', '(1,1)'])).toBe('left');

        // TODO: Fix to pass this test
        expect(threePoints(['(100,100)', '(-1,-1)', '(5,1)'])).toBe('left');

        expect(threePoints(['(5000,5001)', '(-5001,-5000)', '(0,601)'])).toBe(
            'right'
        );
    });
});
