const optimalAssignments = require('./optimal_assignments');

describe('optimalAssignments()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(optimalAssignments(['(5,4,2)', '(12,4,3)', '(3,4,13)'])).toBe(
            '(1-3)(2-2)(3-1)'
        );

        expect(optimalAssignments(['(1,2,1)', '(4,1,5)', '(5,2,1)'])).toBe(
            '(1-1)(2-2)(3-3)'
        );

        expect(
            optimalAssignments([
                '(13,4,7,6)',
                '(1,11,5,4)',
                '(6,7,2,8)',
                '(1,3,5,9)'
            ])
        ).toBe('(1-2)(2-4)(3-3)(4-1)');

        expect(optimalAssignments(['(1,1,4)', '(5,2,1)', '(1,5,2)'])).toBe(
            '(1-2)(2-3)(3-1)'
        );

        expect(optimalAssignments(['(1,1,2)', '(2,1,5)', '(1,5,1)'])).toBe(
            '(1-1)(2-2)(3-3)'
        );

        expect(optimalAssignments(['(1,4)', '(5,18)'])).toBe('(1-2)(2-1)');

        expect(optimalAssignments(['(1,2)', '(1,1)'])).toBe('(1-1)(2-2)');

        expect(
            optimalAssignments([
                '(13,2,7,1)',
                '(1,2,3,4)',
                '(6,7,2,3)',
                '(67,4,8,18)'
            ])
        ).toBe('(1-4)(2-1)(3-3)(4-2)');

        expect(
            optimalAssignments([
                '(1,14,2,4)',
                '(5,1,4,15)',
                '(1,5,2,7)',
                '(1,4,7,17)'
            ])
        ).toBe('(1-4)(2-2)(3-3)(4-1)');

        expect(
            optimalAssignments([
                '(90,75,75,80,82)',
                '(35,85,20,50,41)',
                '(40,2,24,1,67)',
                '(4,70,2,11,23)',
                '(23,25,56,44,21)'
            ])
        ).toBe('(1-2)(2-3)(3-4)(4-1)(5-5)');
    });
});
