const firstFactorial = require('./first_factorial');

describe('firstFactorial()', () => {
    test('if num = 1, return 1', () => {
        expect(firstFactorial(1)).toBe(1);
    });

    test('if num = 2, return 2 * 1 = 2', () => {
        expect(firstFactorial(1)).toBe(1);
    });

    test('if num = 3, return 3 * 2 * 1 = 6', () => {
        expect(firstFactorial(1)).toBe(1);
    });

    test('if num = 4, return (4 * 3 * 2 * 1) = 24', () => {
        expect(firstFactorial(4)).toBe(24);
    });

    test('if num = 18, return 18! = 6402373705728000', () => {
        expect(firstFactorial(18)).toBe(6402373705728000);
    });
});
