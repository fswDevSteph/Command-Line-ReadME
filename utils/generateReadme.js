export function generateReadMe(answers) {
  const readMeFile = `
    # ${answers.title}

    ## Description 
    ${answers.description}

    ## Installation
    npm install ${answers.title.toLowerCase().replaceAll(' ', '-')}
    `;
  return readMeFile;
}
