// Dependant packages
var inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
var writeToFile = util.promisify(fs.writeFile);

// Array of questions and answers
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
      // License Info Section
     {
        type: 'list',
        message: 'Choose a license type below:',
        choices: ['ISC','MIT','BSD 2-Clause'],
        name: 'iLicense'
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

// Function prompting the user and passing responses to ReadMe template
function init() {
   inquirer.prompt(questions)
   .then (({
      iTitle,
      iMotivation,
      iWhy,
      iProblem,
      iLearn,
      iInstall,
      iHow,
      iWhoCollab,
      iAppCollab,
      iTest,
      iLicense,
      iUser,
      iEmail
   })=>{

// ReadMe formatting
const readMe = `# ${iTitle}

## Motivation for this app
${iMotivation}

## Reason this app was developed
${iWhy}

## Problems this app solves
${iProblem}

## What was learned developing this app
${iLearn}

## Steps to install this app
${iInstall}

## How to us this app
${iHow}

## Additional collaborators on this app
${iWhoCollab}

## App dependencies
${iAppCollab}

## App test procedures
${iTest}

## App licencing details
${iLicense}

## Developer GitHub username
${iUser}

## Developer Email address
${iEmail}
`
      // Call the function that generates the ReadMe using fs
      writeToFile(iTitle,readMe)
      }
   )
}

// Function call to initialize app
init();

// Function to generate the ReadMe file using fs
function writeToFile(fileName,data){
   fs.writeFile(`./${fileName}.md`,data,(err)=>{
      if(err){
         console.log(err)
      }
      console.log("Success!!! Your ReadMe file was generated!!!")
   })
}
