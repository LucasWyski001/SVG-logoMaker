// added packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
// prompt the user a set of questions in order to pick there logo
function Prompt(){
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'put three chracters',
        },
        {
            type: 'input',
            name: 'text color',
            message: 'What color do you want your text',
        },
        {
            type: 'input',
            name: 'background color',
            message: 'what color do you want the background to be',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'what shape do you want your logo to be',
            choices: ['circle', 'triangle', 'square'],
        },
    ])
    .then((answers) => {
        // should handle any error if text prompt is more than 3 chracters
        if (answers.text.length > 3) {
        console.error("Must enter a value of no more than 3 characters", error);
        } else {
        writeToFile("logo.svg", answers);
        }
    });
}
Prompt();
