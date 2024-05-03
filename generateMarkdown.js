// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
  # ${data.projectTitle}
  
    ${data.projectDescription}
  
    ${data.licenseBadge}
    
  ---
  ## Contents
  
  1. [About](#about)
      1. [User Story](#userstory)
      2. [Acceptance criteria](#AcceptanceCriteria)
      3. [Visuals](#visuals)
      4. [Build](#build)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and acknowledgment](#authorsandacknowledgment)
  
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
  
  ## License
    License used for this project - ${data.license}
    * For more information on license types, please reference this website
    for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
  
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
    
  `;
  }
  
  module.exports = generateMarkdown;