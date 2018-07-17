const hamiltonianPath = require('./hamiltonian_path');

describe('hamiltonianPath()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(
            hamiltonianPath(['(A,B,C,D)', '(A-B,A-D,B-D,A-C)', '(C,A,D,B)'])
        ).toBe('yes');

        expect(
            hamiltonianPath(['(A,B,C,D)', '(A-B,A-D,B-D,A-C)', '(D,A,B,C)'])
        ).toBe('B');

        expect(hamiltonianPath(['(A,B,C)', '(B-A,C-B)', '(C,B,A)'])).toBe(
            'yes'
        );

        expect(
            hamiltonianPath(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z)', '(Z,Y,Q,X)'])
        ).toBe('Q');

        expect(
            hamiltonianPath(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z,X-Q)', '(Z,Y,Q,X)'])
        ).toBe('yes');

        expect(
            hamiltonianPath(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z,X-Q)', '(Q,Y,Z,X)'])
        ).toBe('Z');

        expect(
            hamiltonianPath(['(X,Y,Z,Q)', '(X-Y,Y-Q,Y-Z,X-Q)', '(Q,X,Y,Z)'])
        ).toBe('yes');

        expect(
            hamiltonianPath([
                '(A,B,C,D,E,F)',
                '(A-B,A-D,B-D,B-C,C-F,E-D)',
                '(F,C,B,A,D,E)'
            ])
        ).toBe('yes');

        expect(
            hamiltonianPath([
                '(A,B,C,D,E,F)',
                '(A-B,A-D,B-D,B-C,C-F,E-D)',
                '(E,F,C,B,D,A)'
            ])
        ).toBe('E');

        expect(
            hamiltonianPath([
                '(A,B,C,D,E,F,G)',
                '(A-B,A-D,B-D,B-C,C-F,E-D,F-E,G-F)',
                '(G,F,E,D,B,C,A)'
            ])
        ).toBe('C');
    });
});
