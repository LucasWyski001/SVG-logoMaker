// this imports the variables from shapes.js
const {Triangle, Square, Circle} = require("./shapes.js");

describe('Triangle', () =>{
    describe('proper color', ()=>{
        it('Should check to test color of triangle', ()=>{
            const Shape = new Triangle();
            Shape.setColor('blue');
            expect(Shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    });
});

describe('Square', () =>{
    describe('proper color', ()=>{
        it('Should check to test color of Square', ()=>{
            const Shape = new Square();
            Shape.setColor('red');
            expect(Shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />')
        });
    });
});

describe('Circle', () =>{
    describe('proper color', ()=>{
        it('Should check to test color of Circle', ()=>{
            const Shape = new Circle();
            Shape.setColor('pink');
            expect(Shape.render()).toEqual('<circle cx ="150" cy="115" r="80" fill="pink" />')
        });
    });
});