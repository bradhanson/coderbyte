const shortestPath = require('./shortest_path');

describe('shortestPath()', () => {
    test('finds shortest path', () => {
        expect(
            shortestPath([
                '5',
                'A',
                'B',
                'C',
                'D',
                'F',
                'A-B',
                'A-C',
                'B-C',
                'C-D',
                'D-F'
            ])
        ).toBe('A-C-D-F');

        expect(
            shortestPath(['4', 'X', 'Y', 'Z', 'W', 'X-Y', 'Y-Z', 'X-W'])
        ).toBe('X-W');
    });

    test('passes Coderbyte.com tests', () => {
        expect(
            shortestPath([
                '6',
                'Z',
                'B',
                'C',
                'A',
                'Y',
                'Q',
                'B-C',
                'A-B',
                'A-Z',
                'C-Y',
                'Z-Y',
                'C-Q'
            ])
        ).toBe('Z-Y-C-Q');

        expect(shortestPath(['2', 'First Street', 'Third Street'])).toBe(-1);

        expect(
            shortestPath([
                '7',
                'D',
                'A',
                'N',
                'I',
                'E',
                'L',
                'B',
                'D-A',
                'A-N',
                'E-B',
                'E-L'
            ])
        ).toBe(-1);

        expect(
            shortestPath([
                '9',
                'Z',
                'B',
                'C',
                'D',
                'R',
                'A',
                'Y',
                'Q',
                'E',
                'A-Z',
                'A-R',
                'Z-Y',
                'Z-C',
                'C-B',
                'Y-Q',
                'Q-D',
                'D-E',
                'R-E'
            ])
        ).toBe('Z-A-R-E');

        expect(
            shortestPath([
                '5',
                'N1',
                'N2',
                'N3',
                'N4',
                'N5',
                'N1-N3',
                'N3-N4',
                'N4-N5',
                'N5-N2',
                'N2-N1'
            ])
        ).toBe('N1-N2-N5');
    });
});
