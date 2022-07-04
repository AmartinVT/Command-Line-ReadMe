// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your application?", // Title
    "What is the motivation for your application?", // Description
    "Why did you build this application?",
    "What problem does this application solve?",
    "What did you learn while building this application?",
    "What are the installation steps for this application?", // Install instructions 
    "How do you use this application?", // Usage instructions
    "Who were additional collaborators on this application?", // Contribution
    "Was any additonal software or code used in this application?",
    "How can the user test this application?", // Testing
    "What is your GitHub username?", // Author info
    "What email can you be contacted at?"
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
