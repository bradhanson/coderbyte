const wordCount = require('./word_count');

describe('wordCount()', () => {
    test('correctly returns word count', () => {
        expect(wordCount('Never eat shredded wheat or cake')).toBe(6);
        expect(wordCount('1 2 3')).toBe(3);
    });

    test('correctly returns word count for empty string', () => {
        expect(wordCount('')).toBe(0);
    });

    test('correctly returns word count for single word', () => {
        expect(wordCount('foo')).toBe(1);
    });
});
