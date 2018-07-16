const maxHeapChecker = require('./max_heap_checker');

describe('maxHeapChecker()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(maxHeapChecker([100, 19, 36, 17])).toBe('max');

        expect(maxHeapChecker([10, 19, 52, 13, 16])).toBe('19,52');

        expect(maxHeapChecker([10, 19, 52, 104, 14])).toBe('19,52,104');

        expect(maxHeapChecker([73, 74, 75, 7, 2, 107])).toBe('74,75,107');

        expect(maxHeapChecker([1, 5, 10, 2, 3])).toBe('5,10');

        expect(maxHeapChecker([5, 2, 1, 1, 1])).toBe('max');

        expect(maxHeapChecker([86, 100, 2])).toBe('100');

        expect(maxHeapChecker([73, 74, 81, 79, 90])).toBe('74,81,79,90');

        expect(maxHeapChecker([73, 72, 1, 79, 90])).toBe('79,90');

        expect(maxHeapChecker([100, 99, 98, 97, 96, 95, 94])).toBe('max');
    });
});
