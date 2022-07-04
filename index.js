// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
     // Title Section
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'iTitle'
     },
     // Description Section
     {
        type: 'input',
        message: 'What is the motivation for your application?',
        name: 'iMotivation'
     },
     {
        type: 'input',
        message: 'Why did you build this application?',
        name: 'iWhy'
     },
     {
        type: 'input',
        message: 'What problem does this application solve?',
        name: 'iProblem'
     },
     {
        type: 'input',
        message: 'What did you learn while building this application?',
        name: 'iLearn'
     },
     // Install Instructions Section
     {
        type: 'input',
        message: 'What are the installation steps for this application?',
        name: 'iInstall'
     },
     // Usage Instructions Section
     {
        type: 'input',
        message: 'How do you use this application?',
        name: 'iHow'
     },
     // Collaboration Info Section
     {
        type: 'input',
        message: 'Who were additional collaborators on this application?',
        name: 'iWhoCollab'
     },
     {
        type: 'input',
        message: 'Was any additonal software or code used in this application?',
        name: 'iAppCollab'
     },
     // Test Procedure Section
     {
        type: 'input',
        message: 'How can the user test this application?',
        name: 'iTest'
     },
    // Author Info Section
     {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'iUser'
     },
     {
        type: 'input',
        message: 'What email can you be contacted at?',
        name: 'iEmail'
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Work")
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
    });
}

// Function call to initialize app
init();