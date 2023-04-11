// Imports classes from the shapes.js file
const {Shape, Circle, Triangle, Rectangle} = require('../lib/shapes');

describe('generateLogo', () => {
    // A test is created to check that the Circle class does in fact set color and render the shape.
    describe('circle', () => {
      it('should create a circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="110" r="90"');

      });
    });
    // A test is created to check that the Triangle class does in fact set color and render the shape.
    describe('triangle', () => {
        it('should create a triangle', () => {
          const shape = new Triangle();
           shape.setColor("blue")
          expect(shape.render()).toEqual(`<polygon points="145, 2 20,160 290,160"`);
        });
      });
      // A test is created to check that the Rectangle class does in fact set color and render the shape.
      describe('rectangle', () => {
        it('should create a rectangle', () => {
          const shape = new Rectangle();
           shape.setColor("blue")
          expect(shape.render()).toEqual(`<rect x="75" y="40" width="150" height="130"`);
        });
      });
  });