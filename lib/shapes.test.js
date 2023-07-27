const { Triangle, Square, Circle } = require("./shapes.js");

describe('Triangle', () => {
    it('Should render a triangle with the given colors', () => {
        const shape = new Triangle('blue', 'Hello', 'green');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">Hello</text></svg>');
    });
});

describe('Square', () => {
    it('Should render a square with the given colors', () => {
        const shape = new Square('red', 'Square', 'yellow');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Square</text></svg>');
    });
});

describe('Circle', () => {
    it('Should render a circle with the given colors', () => {
        const shape = new Circle('purple', 'Circle', 'pink');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">Circle</text></svg>');
    });
});
