const shapes = require('./shapes');

function generateSVG(data) {
    const { text, textColor, shape, shapeColor } = data;

    // Using an object mapping technique to dynamically select the correct shape class based on the input
    const shapeInstance = new shapes[shape](text, textColor, shape, shapeColor);

    const shapeEl = shapeInstance.render();

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeEl}
    </svg>`;
}

module.exports = generateSVG;