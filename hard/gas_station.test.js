const gasStation = require('./gas_station');

describe('gasStation()', () => {
    test('passes Coderbyte.com tests', () => {
        expect(gasStation(['4', '1:1', '2:2', '1:2', '0:1'])).toBe(
            'impossible'
        );

        expect(gasStation(['4', '0:1', '2:2', '1:2', '3:1'])).toBe('4');

        expect(gasStation(['4', '0:1', '2:2', '1:2', '1:1'])).toBe(
            'impossible'
        );

        expect(gasStation(['3', '2:3', '2:1', '4:4'])).toBe('2');

        expect(gasStation(['5', '3:3', '1:2', '2:2', '3:2', '4:3'])).toBe('3');

        expect(gasStation(['5', '0:1', '2:1', '3:2', '4:6', '4:3'])).toBe('2');

        expect(gasStation(['2', '1:2', '3:2'])).toBe('2');

        expect(gasStation(['2', '1:2', '1:2'])).toBe('impossible');

        expect(
            gasStation(['6', '3:2', '2:2', '10:6', '0:4', '1:1', '30:10'])
        ).toBe('1');

        expect(gasStation(['5', '2:3', '2:3', '2:3', '500:1', '0:495'])).toBe(
            '4'
        );
    });
});
