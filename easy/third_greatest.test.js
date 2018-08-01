const thirdGreatest = require('./third_greatest');

describe('thirdGreatest()', () => {
    test('correctly returns third larget word', () => {
        expect(thirdGreatest(['hello', 'world', 'before', 'all'])).toBe(
            'world'
        );

        expect(thirdGreatest(['hello', 'world', 'after', 'all'])).toBe('after');
    });
});
