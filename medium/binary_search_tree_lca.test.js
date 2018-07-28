const binarySearchTreeLca = require('./binary_search_tree_lca');

describe('binarySearchTreeLca()', () => {
    test('correctly finds lowest common ancestor', () => {
        expect(binarySearchTreeLca(['[10, 5, 1, 7, 40, 50]', '1', '7'])).toBe(
            5
        );

        expect(
            binarySearchTreeLca(['[3, 2, 1, 12, 4, 5, 13]', '5', '13'])
        ).toBe(12);
    });

    test('passes Coderbyte.com tests', () => {
        expect(binarySearchTreeLca(['[10, 5, 1, 7, 40, 50]', '1', '7'])).toBe(
            5
        );

        expect(binarySearchTreeLca(['[10, 5, 1, 7, 40, 50]', '1', '50'])).toBe(
            10
        );

        expect(binarySearchTreeLca(['[10, 5, 1, 7, 40, 50]', '5', '10'])).toBe(
            10
        );

        expect(
            binarySearchTreeLca(['[3, 2, 1, 12, 4, 5, 13]', '5', '13'])
        ).toBe(12);

        expect(binarySearchTreeLca(['[3, 2, 1, 12, 4, 5, 13]', '5', '4'])).toBe(
            4
        );

        expect(binarySearchTreeLca(['[3, 2, 1, 12, 4, 5, 13]', '5', '2'])).toBe(
            3
        );

        expect(binarySearchTreeLca(['[3, 1, 4]', '1', '4'])).toBe(3);

        expect(
            binarySearchTreeLca(['[5, 3, 1, 7, 6, 12, 45, 32]', '6', '45'])
        ).toBe(7);

        expect(
            binarySearchTreeLca(['[5, 3, 1, 7, 6, 12, 45, 32]', '5', '32'])
        ).toBe(5);

        expect(
            binarySearchTreeLca(['[5, 8, 10, 12, 78, 102]', '102', '12'])
        ).toBe(12);
    });
});
