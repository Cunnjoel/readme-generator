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
const generateReadMe = (answers) =>
` # ${answers.title}

  ## Table of Contents
    1. [Description](#description)
    2. [Installation Instructions](#installation)
    3. [Usage Information](#contribution)
    4. [Contributions Guidelines](#test)
    5. [Test Instructions](#license)
    6. [Questions](#questions)

  ## Description:<a name="description"></a>
    ${answers.description}

  ## Installation Instructions:<a name="installation"></a>
    ${answers.installation}

  ## Usage Information:<a name="contribution"></a>
    ${answers.contribution}

  ## Contribution Guidelines:<a name="test"></a>
    ${answers.test}

  ## Test Instructions:<a name="license"></a>
    ${answers.license}

  ## Questions:<a name="questions"></a>
    http://www.github.com/${answers.github}
    E-mail me here for any further questions: ${answers.email}
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
