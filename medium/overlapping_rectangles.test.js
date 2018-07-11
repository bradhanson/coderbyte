const overlappingRectangles = require('./overlapping_rectangles');

describe('overlappingRectangles()', () => {
    test('correctly number of times overlapped area can fit in first rectangle', () => {
        expect(
            overlappingRectangles([
                '(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)'
            ])
        ).toBe(2);

        expect(
            overlappingRectangles([
                '(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)'
            ])
        ).toBe(6);

        expect(
            overlappingRectangles([
                '(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)'
            ])
        ).toBe(3);
    });

    test('passes Coderbyte.com tests', () => {
        expect(
            overlappingRectangles([
                '(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)'
            ])
        ).toBe(6);

        expect(
            overlappingRectangles([
                '(0,0),(2,0),(0,4),(2,4),(0,1),(2,1),(0,4),(2,4)'
            ])
        ).toBe(1);

        expect(
            overlappingRectangles([
                '(0,0),(0,-2),(3,0),(3,-2),(2,-2),(3,-2),(2,20),(3,20)'
            ])
        ).toBe(3);

        expect(
            overlappingRectangles([
                '(0,0),(1,0),(0,1),(1,1),(0,0),(2,0),(0,-1),(2,-1)'
            ])
        ).toBe(0);

        expect(
            overlappingRectangles([
                '(0,0),(5,0),(0,2),(5,2),(3,1),(5,1),(3,-1),(5,-1)'
            ])
        ).toBe(5);

        expect(
            overlappingRectangles([
                '(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)'
            ])
        ).toBe(3);

        expect(
            overlappingRectangles([
                '(1,0),(1,1),(4,0),(4,1),(3,0),(4,0),(3,1),(4,1)'
            ])
        ).toBe(3);

        expect(
            overlappingRectangles([
                '(1,0),(1,1),(4,0),(4,1),(2,0),(4,0),(2,1),(4,1)'
            ])
        ).toBe(1);

        expect(
            overlappingRectangles([
                '(1,0),(1,1),(4,0),(4,1),(5,0),(27,0),(5,-25),(27,-25)'
            ])
        ).toBe(0);

        expect(
            overlappingRectangles([
                '(5,0),(-2,0),(5,-1),(-2,-1),(3,-1),(5,-1),(3,56),(5,56)'
            ])
        ).toBe(3);
    });
});
