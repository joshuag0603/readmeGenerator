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
        const readmeTitle = "# Title";
        const readmeDes = "## Description";
        let readmeToC = ["## Table of Contents", "[Description](#description)", "[Installation](#installation)", "[Usage](#usage)", "[License](#license)", "[Contributors](#contributors)", "[Questions](#questions)" ];
        readmeToC = readmeToC.join('\n');
        const readmeIns = "## Installation";
        const readmeUse = "## Usage";
        const readmeLic = "## License";
        const readmeCont = "## Contributors";
        const readmeQs = "## Questions";

        const readmeFull = [readmeTitle, res.title, readmeDes, res.description, readmeToC, readmeIns, res.installation, readmeUse, res.usage, readmeLic, res.license, readmeCont, res.contributors, readmeQs, res.username, res.email];

        const readmeText = readmeFull.join('\n');

        fs.writeFile("README.txt", readmeText, (err) => {
            if (err) console.log(err);
            else {
                console.log("README written");
            }
        });

        
        







    }
  );