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
    
## Questions
${answers.questions}

## Usage


## Contributing
    

## Tests    
    
    //!EVERYTHING ABOVE
    `;
  return readMeFile;
}


