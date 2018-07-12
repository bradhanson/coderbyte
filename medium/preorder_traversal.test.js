const preorderTraversal = require('./preorder_traversal');

describe('preorderTraversal()', () => {
    test('correctly returns preorder traversal given binary heap', () => {
        expect(preorderTraversal(['4', '1', '5', '2', '#', '#', '#'])).toBe(
            '4 1 2 5'
        );
        expect(preorderTraversal(['2', '6', '#'])).toBe('2 6');
    });
});
