const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes')
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'put three chracters',
      validate: function(input){
        if(input.length > 3){
            console.log("\nMust enter a value of no more than 3 chracters")
            return;
        }else{
            return true;
        }
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want your text',
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'what color do you want the background to be',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'what shape do you want your logo to be',
      choices: ['circle', 'triangle', 'square'],
    },
  ])

  .then((data) => {
    let shape;
    if (data.shape === 'circle') {
      shape = new Circle(data.textColor, data.text.toUpperCase(), data.shapeColor)
    } if (data.shape === 'triangle') {
      shape = new Triangle(data.textColor, data.text.toUpperCase(), data.shapeColor)
    } if (data.shape === 'square') {
      shape = new Square(data.textColor, data.text.toUpperCase(), data.shapeColor)
    }
    fs.writeFile("./examples/logo.svg", shape.render(), (err, result)=>{
      if (err) throw err;
      console.log('svg has been created!')
    });
  });