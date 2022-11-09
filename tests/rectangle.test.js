import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from '../js/rectangle';

test('should properly count rectangle perimeter', () => {
    const countedPerimeter = getRectanglePerimeter(23, 33);
    expect(countedPerimeter).toBe(112);
});

test('should properly count rectangle area', () => {
   const countedArea = getRectangleArea(23, 33);
   expect(countedArea).toBe(759);
});

test('should provide info about rectangle perimeter and area', () => {
    const givenInfo = getRectangleInfo(23, 33);
    expect(givenInfo).toBe(console.log(`The perimeter of a rectangle is 112 and the area is 759`));
 });