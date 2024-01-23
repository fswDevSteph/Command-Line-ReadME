export function generateReadMe(answers) {
  const readMeFile = `
 # ${answers.title}
 ![License Badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description 
    ${answers.description}

## License 
${answers.license}

## Installation
    npm install ${answers.title.toLowerCase().replaceAll(' ', '-')}
    `;
  return readMeFile;
}
