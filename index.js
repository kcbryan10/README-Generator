// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "checkbox",
        name: "license",
        message: "Choose a licenese for the project:",
        choices: ["MIT", "Apache", "GNU", "None"],
        validate: LicInput => {
            if (LicInput) {
                return true;
            }
            else {
                console.log("please choose a licenese");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "title",
        message: "whats the title of the project?:",
        validate: TitleInput => {
            if (TitleInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Give a description for the project:",
        validate: DescriptionInput => {
            if (DescriptionInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "How should you install your application?:",
        validate: InstallInput => {
            if (InstallInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use this application?:",
        validate: UsageInput => {
            if (UsageInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Contributions for the project?:",
        validate: ContInput => {
            if (ContInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "test",
        message: "how do you test this application?:",
        validate: TestInput => {
            if (TestInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "github",
        message: "Enter github username:",
        validate: GithubInput => {
            if (GithubInput) {
                return true;
            }
            else {
                console.log("please enter your github username");
                return false;
            }
        }
    },

    {
        type: "input",
        name:"email",
        message:"If you would like to display your email put it here:"
    },
    


];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
            throw err;
        console.log("README file created!")
    });
};

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then (function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app

init();
