// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // semi-colens are not your friend
  return `#${data.primus} 
    
  
      ## User Story
      ${data.sextus}
  
  
      ## Description
      ${data.secundus}
  
      ## Links to Repo and Deployed Site
      Link to repo: ${data.tertius}
      Link to deployed app: ${data.quartus}
  
      ### Technologies Used
      ${data.quintus}`;
}

module.exports = generateMarkdown;
