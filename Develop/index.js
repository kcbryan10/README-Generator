// TODO: Include packages needed for this application
const { fstat } = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "whats the title of the project?",
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
        name: "Description",
        message: "Give a description for the project",
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
        name: "Installation",
        message: "How should you install your application?",
        validate: InstalInput => {
            if (InstalInput) {
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
        name: "Usage",
        message: "How do you use this application?",
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
        name: "Contribution",
        message: "Contributions for the project?",
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
        type: "checkbox",
        name: "License",
        message: "Choose a licenese for the project",
        Choices: [1,2,3,4],
        validate: LicInput => {
            if (LicInput) {
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
        name: "Test",
        message: "how do you test this application?",
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
        name: "Questions",
        message: "",
        validate: QuestionInput => {
            if (QuestionInput) {
                return true;
            }
            else {
                console.log("please enter a title");
                return false;
            }
        }
    }
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
        writeToFile("README.md", genReadme(userInput));
    });
};

// Function call to initialize app
init();
