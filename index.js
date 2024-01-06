// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    question: 'Repository name',
  },
  {
    type: 'input',
    name: 'description',
    question: 'Provide a project description',
  },
  {
    type: 'input',
    name: 'toc',
    question: 'table of contents',
  },
  {
    type: 'input',
    name: 'installation',
    question: 'installlation steps',
  },
  {
    type: 'input',
    name: 'usage',
    question: 'how to use',
  },
  {
    type: 'input',
    name: 'installation',
    question: 'installation steps',
  },
  {
    type: 'input',
    name: 'contributions',
    question: 'Contributors',
  },
  {
    type: 'input',
    name: 'tests',
    question: 'tests',
  },
  {
    type: 'input',
    name: 'questions',
    question: 'questions',
  },
];

// TODO: Create a function to write README file
function promptQuestions() {
  // read the questions and prompt the user for an answer
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}
promptQuestions();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
