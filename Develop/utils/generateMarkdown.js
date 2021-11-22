// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Licensing:
  [![License](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contibution](#contribution)
  - [Testing](#testing)

  ## Descritpion:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Testing:
  ${data.test}

  ## Contribution:
  ${data.contribution}

  ## Creators Information:
  - github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
};

module.exports = generateMarkdown;
