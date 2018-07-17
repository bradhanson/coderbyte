const vertexCovering = require('./vertex_covering');

describe('vertexCovering()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(
            vertexCovering(['(A,B,C,D)', '(A-B,A-D,B-D,A-C)', '(A,B)'])
        ).toBe('yes');

        expect(
            vertexCovering(['(A,B,C,D)', '(A-B,A-D,B-D,A-C)', '(C,B)'])
        ).toBe('(A-D)');

        expect(vertexCovering(['(A,B,C,D)', '(A-B,A-D,B-D,A-C)', '(C)'])).toBe(
            '(A-B,A-D,B-D)'
        );

        expect(vertexCovering(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z)', '(Z,Y,Q)'])).toBe(
            'yes'
        );

        expect(vertexCovering(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z,X-Q)', '(X)'])).toBe(
            '(Y-Q,Y-Z)'
        );

        expect(vertexCovering(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z,X-Q)', '(Q)'])).toBe(
            '(X-Y,Y-Z)'
        );

        expect(vertexCovering(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z,X-Q)', '()'])).toBe(
            '(X-Y,Y-Q,Y-Z,X-Q)'
        );

        expect(
            vertexCovering([
                '(A,B,C,D,E,F)',
                '(A-B,A-D,B-D,B-C,C-F,E-D)',
                '(B,F)'
            ])
        ).toBe('(A-D,E-D)');

        expect(
            vertexCovering([
                '(A,B,C,D,E,F)',
                '(A-B,A-D,B-D,B-C,C-F,E-D)',
                '(D,B,F)'
            ])
        ).toBe('yes');

        expect(
            vertexCovering([
                '(A,B,C,D,E,F,G)',
                '(A-B,A-D,B-D,B-C,C-F,E-D,F-E,G-F)',
                '(B,F)'
            ])
        ).toBe('(A-D,E-D)');
    });
});
