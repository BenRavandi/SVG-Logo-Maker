// The Shape class serves as the base class for other geometric shapes
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

// The Circle class extends the Shape class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// The Triangle class extends the Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="125, 18 244, 182 10, 182" fill="${this.shapeColor}" />
                <text x="125" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// The Square class extends the Shape class
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="150" height="150" fill="${this.shapeColor}" />
                <text x="165" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

const shapes = { Circle, Triangle, Square };
module.exports = shapes;