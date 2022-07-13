// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.iTitle}

  ## Description

  # Motivation
  ${questions.iMotivation}

  # Reason for this program
  ${questions.iWhy}

  # Problem this application solves
  ${quetions.iProblem}

  # Lessons this application taught the author
  ${questions.iLearn}

  ## Installation Instructions
  ${questions.iInstall}

`;
}

module.exports = generateMarkdown;
