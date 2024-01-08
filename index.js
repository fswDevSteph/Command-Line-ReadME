// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { generateReadMe } from './utils/generateReadme.js';

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
    message: 'table of contents',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installlation steps:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'how to use',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Contributors',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions:',
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
