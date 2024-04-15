const { Circle, Triangle, Square } = require('../lib/shapes');

const normalizeSVGString = (svgString) => {
    return svgString.replace(/\s/g, ''); // Remove all whitespace characters
};

// The purpose of this function is to test whether an instance of a given ShapeClass produces the expected SVG output.
const testShape = (ShapeClass, expectedSVG) => {
    it(`should return a ${ShapeClass.name.toLowerCase()} that takes user input and applies a font, font color, and shape color based on that input`, () => {
        const shape = new ShapeClass('Hello', 'black', ShapeClass.name.toLowerCase(), 'red');
        const result = normalizeSVGString(shape.render());
        expect(result).toEqual(normalizeSVGString(expectedSVG));
    });
};

describe('Circle', () => {
    testShape(Circle, `<circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Hello</text>`);
});

describe('Triangle', () => {
    testShape(Triangle, `<polygon points="125, 18 244, 182 10, 182" fill="red" /><text x="125" y="150" font-size="60" text-anchor="middle" fill="black">Hello</text>`);
});


describe('Square', () => {
    testShape(Square, `<rect x="90" y="40" width="150" height="150" fill="red" /><text x="165" y="125" font-size="60" text-anchor="middle" fill="black">Hello</text>`);
});