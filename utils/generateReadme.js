export function generateReadMe(answers) {
  const readMeFile = `

# ${answers.title} 
[//]: <> (Description)
## Description 
${answers.description}

![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Table of Contents
${answers.toc}

## Installation
 ${answers.title.toLowerCase().replaceAll(' ', '-')}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}   

## Questions

For more information contact me here:
Email: email: ${answers.email}
GitHub link: (https://github.com/${answers.questions})

## License 
${answers.license}


    `;
  return readMeFile;
}


