// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utilities/generateMarkdown");
// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    default: "Project Name",
    name: "primus",
  },
  {
    type: "input",
    message: "Describe your project",
    default: "Project Description",
    name: "secundus",
  },
  {
    type: "input",
    message: "Please Link your project repository",
    default: "Repository Link",
    name: "tertius",
  },
  {
    type: "input",
    message: "Please Link your deployed application",
    default: "Deployed App Link",
    name: "quartus",
  },
  {
    type: "checkbox",
    message: "Which technologies were used?",
    name: "quintus",
    choices: ["HTML", "CSS", "JavaScript", "jQuery", "Node", "Python"],
  },
  {
    type: "input",
    message: "Please Enter a User Story",
    default: "Here be User Stories",
    name: "sextus",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
