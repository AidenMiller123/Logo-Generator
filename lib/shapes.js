// function renderShape (shape) {
//     switch (shape) {
//       case 'circle':
//         shape = `<circle cx="150" cy="110" r="90"`
//           break;
//       case 'triangle': 
//         shape = `<polygon points="145, 2 20,160 290,160"`
//           break;
//       case 'square': 
//         shape = `<rect x="75" y="40" width="150" height="130"`
//           break;
//       default:
//         shape = [];
//     }
//     return shape;
//   }


  class Shape {
    constructor(color) {
      this.color = color
  }
  setColor(color){
    this.color = color
  }
  }
   
class Circle extends Shape {
  constructor(color){
    super(color)
  }
  render(){
    return `<circle cx="150" cy="110" r="90"`
  }
}



class Triangle extends Shape {
  constructor(color){
    super(color)
  }
  render(){
    return `<polygon points="145, 2 20,160 290,160"`
  }
}
  
class Rectangle extends Shape {
  constructor(color){
    super(color)
  }
  render(){
    return `<rect x="75" y="40" width="150" height="130"`
  }
}
  



function generateLogo(data) {
  const { text, textColor, shape, shapeColor } = data
  let logoShape;
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
  logoShape.setColor(shapeColor);
  const shapeElement = logoShape.render();
  
    return  `
    
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    ${shapeElement} fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>


    </svg>
    `
}

module.exports = {generateLogo, Shape, Circle, Triangle, Rectangle};