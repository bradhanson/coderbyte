const lineOrdering = require('./line_ordering');

describe('lineOrdering()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(lineOrdering(['A>B', 'A<C', 'C<Z'])).toBe(1);

        expect(lineOrdering(['A>B', 'B<R', 'R<G'])).toBe(3);

        expect(lineOrdering(['J>B', 'B<S', 'D>J'])).toBe(3);

        expect(lineOrdering(['A>B', 'B<C'])).toBe(2);

        expect(lineOrdering(['A>B', 'B>C', 'C>D'])).toBe(1);

        expect(lineOrdering(['A>B', 'B>C', 'C>D', 'G>D'])).toBe(4);

        expect(lineOrdering(['A>B', 'B>C', 'C>D', 'D>E', 'G>E'])).toBe(5);

        expect(lineOrdering(['A>B', 'C>B', 'A<Q'])).toBe(3);

        expect(lineOrdering(['A<B', 'B>A'])).toBe(1);

        expect(lineOrdering(['A>C'])).toBe(1);
    });
});
