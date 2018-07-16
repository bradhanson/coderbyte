const farthestNodes = require('./farthest_nodes');

describe('farthestNodes()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(farthestNodes(['a-b', 'b-c', 'b-d'])).toBe(2);

        expect(farthestNodes(['b-e', 'b-c', 'c-d', 'a-b', 'e-f'])).toBe(4);

        expect(farthestNodes(['b-a', 'c-e', 'b-c', 'd-c'])).toBe(3);

        expect(farthestNodes(['a-b'])).toBe(1);

        expect(farthestNodes(['b-a', 'a-c'])).toBe(2);

        expect(farthestNodes(['b-a', 'a-c', 'c-d'])).toBe(3);

        expect(farthestNodes(['a-b', 'b-c', 'c-e', 'a-d'])).toBe(4);

        expect(farthestNodes(['a-b', 'b-c', 'c-e', 'a-d', 'g-f', 'f-d'])).toBe(
            6
        );

        expect(
            farthestNodes([
                'a-b',
                'b-c',
                'c-e',
                'a-d',
                'g-f',
                'f-d',
                'h-i',
                'f-h'
            ])
        ).toBe(7);

        expect(
            farthestNodes([
                'b-a',
                'a-c',
                'c-d',
                'e-d',
                'e-f',
                'f-g',
                'g-h',
                'i-h',
                'i-j'
            ])
        ).toBe(9);
    });
});
