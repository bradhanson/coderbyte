const weightedPath = require('./weighted_path');

describe('weightedPath()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(weightedPath(['3', 'A', 'B', 'C', 'B|C|13', 'A|B|2'])).toBe(
            'A-B-C'
        );

        expect(
            weightedPath([
                '6',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'B|A|2',
                'A|F|12',
                'A|C|4',
                'B|D|1',
                'D|E|1',
                'C|D|4',
                'F|E|1'
            ])
        ).toBe('A-B-D-E-F');

        expect(
            weightedPath([
                '6',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'B|A|2',
                'A|F|3',
                'A|C|4',
                'B|D|1',
                'D|E|1',
                'C|D|4',
                'F|E|1'
            ])
        ).toBe('A-F');

        expect(
            weightedPath([
                '6',
                'D',
                'B',
                'C',
                'A',
                'E',
                'F',
                'B|A|2',
                'A|F|3',
                'A|C|4',
                'B|D|1',
                'D|E|12',
                'C|D|4',
                'F|E|1'
            ])
        ).toBe('D-B-A-F');

        expect(weightedPath(['3', 'AA', 'BB', 'CC', 'CC|BB|102'])).toBe(-1);

        expect(
            weightedPath([
                '8',
                'C',
                'B',
                'A',
                'D',
                'E',
                'F',
                'G',
                'H',
                'C|D|1',
                'D|F|2',
                'G|F|2',
                'G|E|1',
                'E|B|1',
                'H|B|1',
                'C|A|13',
                'B|A|2',
                'C|E|9'
            ])
        ).toBe('C-D-F-G-E-B-H');

        expect(
            weightedPath([
                '7',
                'D',
                'A',
                'N',
                'I',
                'E',
                'L',
                'B',
                'D|A|1',
                'A|N|2',
                'L|B|22'
            ])
        ).toBe(-1);

        expect(
            weightedPath([
                '3',
                'GG',
                'HH',
                'JJ',
                'GG|JJ|6',
                'GG|HH|2',
                'JJ|HH|2'
            ])
        ).toBe('GG-HH-JJ');

        expect(
            weightedPath([
                '5',
                'c',
                'a',
                'b',
                'd',
                'e',
                'c|a|3',
                'a|b|2',
                'a|d|34',
                'b|e|15',
                'e|d|2'
            ])
        ).toBe('c-a-b-e');

        expect(
            weightedPath([
                '8',
                'C',
                'B',
                'A',
                'D',
                'E',
                'F',
                'G',
                'H',
                'C|D|1',
                'D|F|2',
                'G|F|2',
                'G|E|1',
                'E|B|1',
                'H|B|1',
                'C|A|13',
                'B|A|2',
                'C|E|1'
            ])
        ).toBe('C-E-B-H');
    });
});
