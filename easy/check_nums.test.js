const checkNums = require('./check_nums');

describe('checkNums()', () => {
    test('detects num2 greater than num1', () => {
        expect(checkNums(1, 2)).toBe('true');
        expect(checkNums(0, 1)).toBe('true');
        expect(checkNums(-1, 0)).toBe('true');
        expect(checkNums(-1, 1)).toBe('true');
    });

    test('detects num2 equal to num1', () => {
        expect(checkNums(1, 1)).toBe('-1');
        expect(checkNums(10, 10)).toBe('-1');
        expect(checkNums(0, 0)).toBe('-1');
        expect(checkNums(-1, -1)).toBe('-1');
    });

    test('detects num2 less than num1', () => {
        expect(checkNums(2, 1)).toBe('false');
        expect(checkNums(200, 50)).toBe('false');
        expect(checkNums(0, -1)).toBe('false');
        expect(checkNums(1, 0)).toBe('false');
    });
});
