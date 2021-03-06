// Dependant packages
var inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['Mozilla-Public-2.0','MIT','Unicode'],
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

![License Badge](https://img.shields.io/static/v1?label=license&message=${iLicense}&color=red)

## Table of Contents
* [Description Section](#iMotivation)
* [Installation Instructions](#iInstall)
* [Usage Instructions](#iHow)
* [Collab and Dependency Info](#iWhoCollab)
* [Test Procedure](#iTest)
* [License Information](#iLicense)
* [Developer and Contact Information](#iUser)

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

## Questions?

* Check Out the GitHub Repo:
![Link to Repo](https://github.com/${iUser})
* Email the Developer: ${iEmail}
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