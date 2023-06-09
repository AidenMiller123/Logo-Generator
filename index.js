// imports inquirer, fs, and generateLogo function
const inquirer = require('inquirer');
const fs = require('fs');
const {generateLogo} = require('./lib/shapes');


inquirer
// Array of question the user will be asked
.prompt ([{
    type: 'input',
    message: 'What would you like the text to be? Max 3 characters',
    name: 'text',
    },
    {
    type: 'input',
    message: 'What color would you like your text?',
    name: 'textColor',
    },
    {
    type: 'list',
    name: 'shape',
    message: 'What kind of shape would you like your logo to have?',
    choices: [
          { title: 'circle', value: 'circle' },
          { title: 'triangle', value: 'triangle'},
          { title: 'square', value: 'square'},
            ],
    initial: 1
    },
    {
    type: 'input',
    message: 'What color would you like your shape?',
    name: 'shapeColor',
    },
])
.then((data) => {
  // Sets data thats ran through to generateLogo function and returns it to a variable
   logoPageContent = generateLogo(data);
// Writes a SVG file called logo.svg and puts the results of the generateLogo in the body
    fs.writeFile(`logo.svg`, logoPageContent, (err) =>
     err ? console.error(err) : console.log('Generated logo.svg'))
    
  })
