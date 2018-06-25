const simpleAdding = require('./simple_adding');

describe('simpleAdding()', () => {
    test('handles value of 1', () => {
        expect(simpleAdding(1)).toBe(1);
    });

    test('handles value of 2', () => {
        expect(simpleAdding(2)).toBe(3);
    });

    test('handles value of 4 -> 1 + 2 + 3 + 4', () => {
        expect(simpleAdding(4)).toBe(10);
    });
});
