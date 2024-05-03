// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installationSteps"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide any guidelines on how to contribute to this project",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide any tests written for your application and provide examples on how to run them",
        name: "tests"
    },
    {
        type: "list",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache", "GPL"],
        name: "license"
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err){
//         console.log(err ? err : "Success!");
//     })
// }

async function init() {
    try {
      const answers = await inquirer.prompt(questions);
    //   answers.licenseBadge = licenseBadge(answers.license);
      let readMeData = generateMarkdown(answers);
      await writeFileAsync("created-README.md", readMeData);
    } catch (err) {
      throw err;
    }
  }

init();

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app


// inquirer.prompt([
    

// ]).then(function(answers){
//     fs.appendFile("README.md", JSON.stringify(answers, null, "\t"), function(err){
//         console.log(err ? err : "Success!");
//     })
   
// });

