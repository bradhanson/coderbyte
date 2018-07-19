const stepWalking = require('./step_walking');

describe('stepWalking()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(stepWalking(4)).toBe(5);

        expect(stepWalking(5)).toBe(8);

        expect(stepWalking(6)).toBe(13);

        expect(stepWalking(7)).toBe(21);

        expect(stepWalking(8)).toBe(34);

        expect(stepWalking(9)).toBe(55);

        expect(stepWalking(13)).toBe(377);
    });
});
