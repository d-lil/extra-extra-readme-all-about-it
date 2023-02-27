// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([  
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "author",
            message: "What is the author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What your GitHub username?"
            },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }, 
        {
            type: "input",
            name: "year",
            message: "Please enter current year to add to license:"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a description of your project:"
            },
       
        {
            type: "input",
            name: "installation",
            message: "What (if any) command should be run to install dependencies?"
        }, 
        {
            type: "input",
            name: "usage",
            message: "What is necessary for the user to know about the usage of the app/repo?"
            }, 
        {
            type: "list",
            name: "license",
            message: "What type of license would you like for your project?",
            choices: ["MIT","Apache 2.0","BSD 3","GNU GPL v3.0","None"]
        },
        {
            type: "input",
            name: "contribute",
            message: "How can the user contribute to the project?"
            },
        {
            type: "input",
            name: "tests",
            message: "What command should be entered to run tests? (if any)"
            },
    ])
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
