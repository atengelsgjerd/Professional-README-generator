// function to generate markdown for README
function renderLicenseBadge(license) {
  if  (license === "none") {
    return ''; 
}
  else {
    return `![License:](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } 
}

function renderLicenseLink(license) {
  if (license === "none") {
    return ''; 
}
  else {
    return `*[License](#license)`;
  } 

}

function renderLicenseSection(license) {
  if (license === "none") {
    return '';
} else {
  return ` ## License
  License used for this project - ${license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).`;
}
}

module.exports = renderLicenseBadge;


function generateMarkdown(data) {

    return `
    
  # ${data.projectTitle}
  
    ${data.projectDescription}
  
  ${renderLicenseBadge(data.license)}
    
  ---
  ## Contents
  Installation, Usage, License, Contributing, Tests, and Questions
  * [About](#about)
  * [User Story](#userstory)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  ---
  ## About
  
    ${data.about}
  
  ---
  
  ## User Story
    
  
  ---
  
  ## Installation:
    
      To install necessary dependencies, run the following command:
      
   \`\`\`
    ${data.installationSteps}
    \`\`\`
  
    To clone the repo:
    
        git clone ${data.clone}
    
  ---
  
  ${renderLicenseSection(data.license)}
  
  ---
  
  ## Contributing:
    
    To contribute to this application, create a pull request.
    Here are the steps needed for doing that:
    - Fork the repo
    - Create a feature branch (git checkout -b NAME-HERE)
    - Commit your new feature (git commit -m 'Add some feature')
    - Push your branch (git push)
    - Create a new Pull Request
  
    Following a code review, your feature will be merged.
  
  
  ---
  
  ## Tests:
    ${data.tests}
  
  ---
  
  ## Questions:
  * [GitHub Profile]:(#github.com/${data.userName})
  * GitHub Email: ${data.userEmail}
  * 
  * ## Video
    
  `;
  }

  
  
  module.exports = generateMarkdown;