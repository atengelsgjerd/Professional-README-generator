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
  
  * [About](#about)
  * [User Story](#userstory)
  * [Acceptance criteria](#AcceptanceCriteria)
  *  [Visuals](#visuals)
  *  [Build](#build)
  * [Installation](#installation)
  *  [Contributing](#contributing)
  *  [Tests](#tests)
  * [Authors and acknowledgment](#authorsandacknowledgment)
  ${renderLicenseLink(data.license)}
  
  ---
  ## About
  
    ${data.about}
  
  ---
  
  ## User Story
    
  
  ---
  
  ## Acceptance Criteria
    
    
  ---
  ## Visuals:
  
    ![]()
  
  ---
  
  ## Installation:
    ${data.installationSteps}
  
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
  
  ## Authors and Acknowledgments
    ${data.author}
  
  ---
  
  ## Contact Information:
  * GitHub Username: ${data.userName}
  * GitHub Email: ${data.userEmail}
  * 
  * ## Video
    
  `;
  }

  
  
  module.exports = generateMarkdown;