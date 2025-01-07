import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt([
    {
        type: 'input', 
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input', 
        message: 'What is a description of your project?',
        name: 'description',
    },
    {
        type: 'input', 
        message: 'What other installations are required to run your project?',
        name: 'installation',
    },
    {
        type: 'input', 
        message: 'How is your project used?',
        name: 'usage',
    },
    {
        type: 'list', 
        message: 'What license should be used for your project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: 'input', 
        message: 'Who contributed to the project?',
        name: 'contributors',
    },
    {
        type: 'input', 
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input', 
        message: 'What is your email?',
        name: 'email',
    },
]).then((res) =>
    {
        let readmeText = 
`# ${res.title} ${renderLicenseBadge(res.license)}

## Description
${res.description}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributors](#contributors)
[Questions](#questions)

## Installation
${res.installation}
        
## Usage
${res.usage}

## License
The license being used for this project is the ${res.license} license. 

## Contributors
${res.contributors}

## Questions
My Github username is [${res.username}](https://www.github.com/${res.username})

I can be contacted at ${res.email} if you have any questions regarding the project.`;

        fs.writeFile("README2.md", readmeText, (err) => {
            if (err) console.log(err);
            else {
                console.log("README written");
            }
        });
        function renderLicenseBadge(license) {
            if (license !== 'None') {
              return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
                ' ',
                '_'
              )}-blue.svg)`;
            }
            return '';
          }
    }
  );