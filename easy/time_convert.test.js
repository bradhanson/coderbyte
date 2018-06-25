const timeConvert = require('./time_convert');

describe('timeConvert()', () => {
    test('converts minutes to hours:minutes', () => {
        expect(timeConvert(63)).toBe('1:3');
    });

    test('handles minutes < 60', () => {
        expect(timeConvert(35)).toBe('0:35');
    });

    test('handles minute == 60', () => {
        expect(timeConvert(60)).toBe('1:0');
    });

    test('handles multiple hours', () => {
        expect(timeConvert(120)).toBe('2:0');
        expect(timeConvert(150)).toBe('2:30');
    });
});
