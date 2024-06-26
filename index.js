// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// const writeFileAsync = util.promisify(fs.writeFile);
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
        message: "Please tell us about your project",
        name: "about"
    },
    {
        type: "input",
        message: "What are the steps in order to use any dependencies?",
        name: "installationSteps"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide any tests written for your application and provide examples on how to run them",
        name: "tests"
    },
    {
        type: "list",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache", "GPL", "none"],
        name: "license"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "userName"
    },
    {
        type: "input",
        message: "Enter your GitHub email",
        name: "userEmail"
    },
    {
        type: "input",
        message: "Enter the link to clone this repo",
        name: "clone"
    },
    
];
function init() {
inquirer.prompt(questions).then(function(answers){
 fs.writeFileSync("Sample-README.md", generateMarkdown(answers), function(err){
        console.log(err ? err : "Created README.md!");
    });
});
}

init();
// const answers = inquirer.prompt(questions);
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data, function(err){
//         console.log(err ? err : "Created README.md!");
//     })
// }

// writeToFile("README.md", generateMarkdown(answers));


// async function init() {
//     try {
//       const answers = await inquirer.prompt(questions);
//       let readMeData = generateMarkdown(answers);
//       await writeFileAsync("created-README.md", readMeData);
//     } catch (err) {
//       throw err;
//     }
//   }

// init();

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app


// inquirer.prompt([
    

// ]).then(function(answers){
//     fs.appendFile("README.md", JSON.stringify(answers, null, "\t"), function(err){
//         console.log(err ? err : "Success!");
//     })
   
// });

