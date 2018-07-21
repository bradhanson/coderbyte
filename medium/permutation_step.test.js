const permutationStep = require('./permutation_step');

describe('permutationStep()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(permutationStep(11121)).toBe(11211);

        expect(permutationStep(41352)).toBe(41523);

        expect(permutationStep(456)).toBe(465);

        expect(permutationStep(111)).toBe(-1);

        expect(permutationStep(23514)).toBe(23541);

        expect(permutationStep(897654321)).toBe(912345678);

        expect(permutationStep(12)).toBe(21);

        expect(permutationStep(9)).toBe(-1);

        expect(permutationStep(44444444)).toBe(-1);

        expect(permutationStep(76666666)).toBe(-1);
    });
});
