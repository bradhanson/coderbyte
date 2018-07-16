const treeConstructor = require('./tree_constructor');

describe('treeConstructor()', () => {
    test('correctly determines of nodes can form a valid binary tree', () => {
        expect(
            treeConstructor(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])
        ).toBe('true');

        expect(treeConstructor(['(1,2)', '(3,2)', '(2,12)', '(5,2)'])).toBe(
            'false'
        );
    });

    test('passes Coderbyte.com tests', () => {
        expect(treeConstructor(['(1,2)', '(2,4)', '(7,2)'])).toBe('true');

        expect(
            treeConstructor(['(1,2)', '(2,4)', '(5,7)', '(7,2)', '(9,5)'])
        ).toBe('true');

        expect(treeConstructor(['(1, 2)', '(3,2)', '(2, 12)', '(5,2)'])).toBe(
            'false'
        );

        expect(treeConstructor(['(2,5)', '(2,6)'])).toBe('false');

        expect(treeConstructor(['(10,20)'])).toBe('true');

        expect(
            treeConstructor([
                '(2,3)',
                '(1,2)',
                '(4,9)',
                '(9,3)',
                '(12,9)',
                '(6,4)'
            ])
        ).toBe('true');

        expect(
            treeConstructor([
                '(2,3)',
                '(1,2)',
                '(4,9)',
                '(9,3)',
                '(12,9)',
                '(6,4)',
                '(1,9)'
            ])
        ).toBe('false');

        expect(treeConstructor(['(1,2)', '(2,4)', '(7,4)'])).toBe('true');

        expect(treeConstructor(['(5,6)', '(6,3)', '(2,3)', '(12,5)'])).toBe(
            'true'
        );

        expect(treeConstructor(['(10,20)', '(20,50)'])).toBe('true');
    });
});
