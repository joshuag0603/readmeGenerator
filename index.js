import inquirer from "inquirer";

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
])