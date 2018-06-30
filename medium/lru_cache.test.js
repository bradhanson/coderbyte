const lruCache = require('./lru_cache');

describe('lruCache()', () => {
    test('correctly processes LRU cache', () => {
        expect(lruCache(['A', 'B', 'C', 'D', 'A', 'E', 'D', 'Z'])).toBe(
            'C-A-E-D-Z'
        );
    });

    test('correctly processes elements shorter than cache length (5)', () => {
        expect(lruCache(['A', 'B', 'C', 'D'])).toBe('A-B-C-D');
    });

    test('correctly handles empty input', () => {
        expect(lruCache([])).toBe('');
    });
});
