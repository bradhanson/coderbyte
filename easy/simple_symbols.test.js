const simpleSymbols = require('./simple_symbols');

describe('simpleSymbols()', () => {
    test('correctly returns string true for all letters surrounded by a "+"', () => {
        expect(simpleSymbols('++d+===+c++==+a+')).toBe('true');
    });

    test('correctly returns string false if all letters not surrounded by a "+"', () => {
        expect(simpleSymbols('+d===+a+')).toBe('false');
        expect(simpleSymbols('++d+===+c++==a')).toBe('false');
    });

    test('correctly returns string false for empty string', () => {
        expect(simpleSymbols('')).toBe('false');
    });
});
