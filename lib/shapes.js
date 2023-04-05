function renderShape (shape) {
    switch (shape) {
      case 'circle':
        shape = `<circle cx="150" cy="110" r="90"`
          break;
      case 'triangle': 
        shape = `<polygon points="145, 2 20,160 290,160"`
          break;
      case 'square': 
        shape = `<rect x="75" y="40" width="150" height="130"`
          break;
      default:
        shape = [];
    }
    return shape;
  }



function generateLogo(data) {
  
    return  `
    
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    ${renderShape(data.shape)} fill="${data.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>


    </svg>
    `
}

module.exports = generateLogo