// DONE: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// DONE: Create an array of questions for user input

//these are the questions that will be prompted to the user

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project ?',
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project.',
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project ?',
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators, if any.',
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license did you use ?',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your Github username?',
            validate: (value) => { if(value) {return true} else{return 'I need a value to continue'}},
        }
    ]
)//.then(({
//     title,
//     description,
//     installation,
//     usage,
//     credits,
//     license,
//     githubUsername,
// }) =>{
// const template = `# ${title}`
// }
// )

// line 16 is an arrow funtion taking the argument 'value' and validates the argument. 
// the function is checking if the argument is true or false 
//in this case it is checking to make sure that the user made an input and if so it will read true. if not it will read false.

const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
