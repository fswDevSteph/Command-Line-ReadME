export function generateReadMe(answers) {
  const readMeFile = `
  ${answers.title}
 (https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description 
    ${answers.description}

## License 
${answers.license}

## Table of Contents
${answers.toc}

## Installation
    npm install ${answers.title.toLowerCase().replaceAll(' ', '-')}
    
## Questions
${answers.questions}

For more information contact me here:
GitHub link: (https://github.com/${answers.questions})

## Usage


## Contributing
    

## Tests    
    
    
    `;
  return readMeFile;
}


