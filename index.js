// TODO: Include packages needed for this application
import inquirer from 'inquirer'; //gives functionality to prompt questions
// const inquirer = require('inquirer') older way
import { generateReadMe } from './utils/generateReadme.js';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Repository name:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a project description:',
  },
  {
    type: 'input',
    name: 'toc',
    message: 'Table of contents',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation steps:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License:',
    choices: ['MIT', 'APACHEv2.0', 'GPLv3.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Contributors:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What is your git username?',
  },
];

// TODO: Create a function to write README file
function promptQuestions() {
  //playing with this to learn / trying to assign answers.title as a markdown title
  //let readMeTitle = '';
  // read the questions and prompt the user for an answer
  inquirer.prompt(questions).then((answers) => {
    const readMeFile = generateReadMe(answers);
    console.log(readMeFile);
    fs.writeFile('./output/readme.md', readMeFile, function () {
      console.log('Successfull!');
    });
    // if answers.title is not equal to an empty string then assign the input to readMeTitle with a hashtag else log no title
    //   if (answers.title !== '') {
    //     // console.log(answers.title.split[' ']);
    //     readMeTitle = `# ${answers.title}`;
    //   } else {
    //     console.log('no title');
    //   }
    //   console.log(readMeTitle.replaceAll(' ', '-'));
  });
}
// const test = ['#', 'hello', 'world'];
promptQuestions();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
