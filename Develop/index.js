// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "whats the title of the project?",
    },

    {
        type: "input",
        name: "Description",
        message: "Give a description for the project",
    },

    {
        type: "input",
        name: "Installation",
        message: "How should you install your application?",
    },

    {
        type: "input",
        name: "Usage",
        message: "How do you use this application?",
    },
    {
        type: "input",
        name: "Contribution",
        message: "Contributions for the project?",
    },

    {
        type: "checkbox",
        name: "License",
        message: "Choose a licenese for the project",
        Choices: [1,2,3,4]
    },

    {
        type: "input",
        name: "Test",
        message: "how do you test this application?",
    },

    {
        type: "input",
        name: "Questions",
        message: "",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
