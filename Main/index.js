// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title, mainModule } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of the project.',
    },
    {
        type: 'input',
        name: 'installation ',
        message: 'What are the installation instructions for the project?',
      },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidlinesfor for the project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for the project?',
      },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license is the project under?',
      choices: ["MIR", "Apache 2.0", "BSD"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
      },
];
const generateReadMe = (answers) =>`
    ${answers.title};
    Description: ${answers.description};
    Installation Instructions: ${answers.installation};
    Usage Information: ${answers.contribution};
    Contribution Guidelines: ${answers.test};
    Test Instructions: ${answers.license};
    Questions: <a href = "github.com/${answers.github}">Github</a>; <a href = "${answers.email}">${answers.email}</a>; 
`

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
inquirer
  .prompt(questions)
    .then((answers) => {
     const ReadMePageContent = generateReadMe(answers);

        fs.writeFile('ReadMe.md', ReadMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created ReadMe.md!')
        );
    });
  
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
