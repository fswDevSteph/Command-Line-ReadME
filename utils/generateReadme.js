export function generateReadMe(answers) {
  const readMeFile = `
# ${answers.title} 
[//]: <> (Description)
## Description 
${answers.description}

![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}   

## Questions
For more information contact me here:
Email: ${answers.email}
GitHub link: [${answers.questions}](https://github.com/${answers.questions})

## License 
[This application is covered under ${answers.license}]()

  `;

  return readMeFile;
}
