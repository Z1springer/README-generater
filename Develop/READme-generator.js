function generateREADME({ primus, secundus, tertius, quartus, quintus, sextus }) {
    return
    `#${primus} 
    

    ## User Story
    ${sextus}


    ## Description
    ${secundus}

    ## Links to Repo and Deployed Site
    Link to repo: ${tertius}
    Link to deployed app: ${quartus}

    ### Technologies Used
    ${quintus}
    `
}

module.export = generateREADME()