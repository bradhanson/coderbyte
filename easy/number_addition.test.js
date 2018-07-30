const numberAddition = require('./number_addition');

describe('numberAddition()', () => {
    test('adds separated single digits in string', () => {
        expect(numberAddition('5fad4fadfa6')).toBe(15);
    });

    test('treats consecutive digits as one number', () => {
        expect(numberAddition('28ad 11 fd as22dfa19')).toBe(80);
    });
});
