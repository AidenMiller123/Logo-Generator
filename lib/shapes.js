// Sets a Parent class that has a method of setColor
class Shape {
  constructor(color) {
    this.color = color
  }
  // Method allows you to set the color of a shape
  setColor(color) {
    this.color = color
  }
}
// Circle class that can set color or render shape
class Circle extends Shape {
  constructor(color) {
    // inherents from parent class setColor
    super(color)
  }
  // Renders shape into a circle 
  render() {
    return `<circle cx="150" cy="110" r="90"`
  }
}

// Triangle class that sets color and render shape
class Triangle extends Shape {
  constructor(color) {
    // inherents from parent class setColor
    super(color)
  }
  // renders shape into a triangle
  render() {
    return `<polygon points="145, 2 20,160 290,160"`
  }
}
// Rectangle class that sets color and render shape
class Rectangle extends Shape {
  constructor(color) {
    // inherents from parent class setColor
    super(color)
  }
  // renders shape into a rectangle
  render() {
    return `<rect x="75" y="40" width="150" height="130"`
  }
}
// generateLogo functon will take in the data and return a SVG file with the user inputs
function generateLogo(data) {
  // Sets data to variables 
  const { text, textColor, shape, shapeColor } = data
  let logoShape;
  // switch case that takes in the shape the user chooses and returns class
  switch (shape) {
    case 'circle':
      logoShape = new Circle(shapeColor);
      break;
    case 'triangle':
      logoShape = new Triangle(shapeColor);
      break;
    case 'square':
      logoShape = new Rectangle(shapeColor);
      break;
    default:
      logoShape = new Shape(shapeColor);
      break;
  }
  // sets color based on users input using the setColor method
  logoShape.setColor(shapeColor);
  // sets render method to a user shape input and sets it to a varibale
  const shapeElement = logoShape.render();
// returning SVG file using template literals
  return `
    
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    ${shapeElement} fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>


    </svg>
    `
}
// Exporting the object containing the class shape and its children classes

module.exports = {  Shape, Circle, Triangle, Rectangle, generateLogo };

