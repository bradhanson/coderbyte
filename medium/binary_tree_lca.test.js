const binaryTreeLca = require('./binary_tree_lca');

describe('binaryTreeLca()', () => {
    test('correctly returns least common ancestor', () => {
        expect(
            binaryTreeLca([
                '[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]',
                '6',
                '4'
            ])
        ).toBe(5);

        expect(binaryTreeLca(['[5, 2, 6, 1, #, 8, #]', '2', '6'])).toBe(5);

        expect(
            binaryTreeLca([
                '[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]',
                '3',
                '12'
            ])
        ).toBe(12);
    });

    test('returns -1 for no common ancestor', () => {
        expect(binaryTreeLca(['[#, 3, 8]', '3', '8'])).toBe(-1);
    });

    test('returns -1 for specifying a non-existent node', () => {
        expect(binaryTreeLca(['[#, 3, 8]', '1', '8'])).toBe(-1);
    });

    test('passes Coderbyte.com tests', () => {
        expect(
            binaryTreeLca([
                '[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]',
                '6',
                '4'
            ])
        ).toBe(5);

        expect(binaryTreeLca(['[5, 2, 6, 1, #, 8, #]', '2', '6'])).toBe(5);

        expect(
            binaryTreeLca([
                '[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]',
                '3',
                '12'
            ])
        ).toBe(12);

        expect(
            binaryTreeLca([
                '[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]',
                '3',
                '8'
            ])
        ).toBe(6);

        expect(
            binaryTreeLca([
                '[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]',
                '1',
                '8'
            ])
        ).toBe(5);

        expect(binaryTreeLca(['[1, 2, 3]', '2', '3'])).toBe(1);

        expect(binaryTreeLca(['[1, 2, 3]', '1', '3'])).toBe(1);

        expect(
            binaryTreeLca([
                '[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]',
                '6',
                '0'
            ])
        ).toBe(12);

        expect(
            binaryTreeLca([
                '[12, 5, 9, 6, 2, 0, 8, #, #, 15, 22, #, #, #, #]',
                '15',
                '22'
            ])
        ).toBe(2);

        expect(binaryTreeLca(['[5, 8, 10, 12, #, #, 18]', '12', '18'])).toBe(5);
    });
});
