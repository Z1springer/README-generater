//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return (`/n*[License](#license)/n`)
  }
  return ""
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  // semi-colens are not your friend
  return `#${data.primus} 
      ${renderLicenseBadge(data.license)}
      ${renderLicenseLink(data.license)}
  
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
