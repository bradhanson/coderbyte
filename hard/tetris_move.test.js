const tetrisMove = require('./tetris_move');

describe('tetrisMove()', () => {
    test('returns correct number of horizontal lines that can be cleared', () => {
        expect(
            tetrisMove([
                'L',
                '3',
                '4',
                '4',
                '5',
                '6',
                '2',
                '0',
                '6',
                '5',
                '3',
                '6',
                '6'
            ])
        ).toBe(3);

        expect(
            tetrisMove([
                'I',
                '5',
                '5',
                '5',
                '5',
                '5',
                '5',
                '0',
                '7',
                '6',
                '7',
                '6',
                '7'
            ])
        ).toBe(4);
    });
});
