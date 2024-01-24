export function generateReadMe(answers) {
  const readMeFile = `
[//]: <> (title)
# ${answers.title} 
[//]: <> (Description)
## Description 
${answers.description}

## Table of Contents
${answers.toc}

## Installation
 ${answers.title.toLowerCase().replaceAll(' ', '-')}

## Usage
${answers.usage}

## Contributing
${answers.contributions}

## Tests
${answers.tests}   

## Questions
${answers.questions}

## License 
${answers.license}
![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

For more information contact me here:
GitHub link: (https://github.com/${answers.questions})
    
    `;
  return readMeFile;
}


