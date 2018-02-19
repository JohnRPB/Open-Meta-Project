# The Open Meta Project

A website where scientists can conduct, comment on, and share meta-analyses. A meta-analysis asseses the weight of evidence for a research proposition by aggregating the results of a set of studies that address that proposition; it is common in the social, clinical, and pyschological sciences, and is often used to settle important debates. 

With the Open Meta Project, scientists have a platform where R's considerable statistical libraries can be harnessed to conduct meta-analyses through an accessible user interface. No coding expertise required. And to expand the project's statistical capabilities (beyond the provided functions), users only need to know R, not JavaScript.

Distributed, reproducible, and interactive scientific analyses are the goal of the Open Meta project. For a quick overview of what has been accomplished, see the "Project Showcase" section; for a more in-depth explanation of the underlying architercture, see "Rationale and technical concepts".

#### Note: This project is under active development, and documentation is being added every day.

## Rationale and technical concepts

[Meta-analyses](https://en.wikipedia.org/wiki/Meta-analysis) are among the most useful techniques available today for resolving scientific debates, but despite the profusion of tools available for conducting them, the technical simplicity of the analyses themselves, and their essentially *social* nature---in that they evaluate the work of peers and colleagues---there is as yet no central repository where scientists and academics can conduct and share these analyses. Such a repository would provide the basis for improved reprodubility, faster dissemination of research, and rapid feedback, which are the goals of the Open Meta Project.

In order to make the process of conducting a meta-anlaysis interactive and desconstructable, as well as available to those not steeped in the world of scientific computing, our website uses R packages, accessible through a simple drag-and-drop interface, as the analytical/graphical units. These R packages are referenced as API calls inside React *modules*---layers of code, accessible through a JavaScript GUI, which control parameters of the analyses (e.g. studies included)---and these API calls are sent to a public server hosted by OpenCPU, on which the R packages are installed. 

In our system, every component of a meta-analysis (the actual effect size and confidence interval calculations, the forest plot, etc) is represented as an instruction to run a single R function, and sends all the data required to run that function with each call, in accordance with the decisions of the meta-analyst. These conditional API calls, made in sequence, fully define a meta-analysis, and every meta-analysis is fully redubile to those calls---therefore we can assemble the calls into a script, in the form of an R Markdown document (for further customization), or we can simply store them inside JavaScript objects for later dissemination, editing, and retrieval. 

The encapsulation of every meta-analytic procedure as a single API call, moreover, allows R-savy contributors to add procedures to our site without knowing any JavaScript. This gives the Open Meta Project considerable opportunity for horizontal growth, through the addition of new R packages, and allows it to rapidly support the newest procedures, making them available to the scientific community as they are developed.

## Project Showcase
(as of February 16th, 2018)

Currently, we stand at five collaborators, three weeks, and over 10,000 lines of original code. Our website allows users to register an account, save and edit collections of studies that address a particular research question, and conduct and edit a simple drag-and-drop analysis with three demonstration modules. This requires a considerable range of features "under the hood". Below, you will find a listing of these original features, as well as some visual demonstrations of them functioning.

These are the features that are complete in some form:

* SQL database for storing meta-analytically useful information about studies, as well as associations and attributes that make studies conveniently searchable (published journal, authors, year, scientific field, etc)
* Form pages where new studies can be located, submitted, and/or added to publicly available user "collections"
* Web crawler that indexes terms that identify studies by keywords found in their abstracts (by searching the provided study URLs)
* MongoDB database for storing information pertinent to the actual site function (user profiles, meta-analysis documents, etc)
* MongoDB "mirror-image" reflection of SQL models for storing non-standard attributes of studies found in the SQL database
* Hybrid SQL-Mongo access functions that retrieve the same studies from both databases and combine them into single objects
* Drag-and-drop interface for selecting modules and rendering their computations in an editable document
* Modules that allow for dynamic inclusion/exclusion of studies
* Modules that allow for exploration of rendred plots through `ggplotly` webpages generated by OpenCPU
* Showcase of meta-analysis documents in single-resource pages available publicly
* Profile pages that display a user's `collections` and `analyses`
* A home page that explains OpenMeta's mission and purpose, and invites user participation
* The ability to add an account to OpenMeta and log in
* User flows for creating a new collection or analysis from the "My analyses" page.

Features that are under development:

* Ability to download meta-analyses as R Markdown documents
* Support for multiple effect size measures when conducting standard meta-analytic procedures
* Support for inclusion of non-standard variables in meta-analytic regressions or mixed-effect models
* User dashboard that shows analyses related to user interests, conducted by other users

Features that will be developed in the future:

* Ability to browse profiles of other users
* Ability to "fork" a user's analysis and edit it
* Support for changing parameters of analyses on another user's page (in non-permanent, exploratory way)
* Support for following other users
* "Activity feed" that allows users to see recent submissions
* Many more features...

Preview [the site](https://www.openmeta.surge.sh).

#### Note: The website is currently down for bug fixes, but will be back up shortly.

============================ Notes to the developers on this project >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Note from Gene:

Push to heroku with the following:

    git subtree push --prefix api heroku master

That way it will only send the back end and not the whole thing.

Note from Johann:

.env file at project root now contains environmental property, REACT_APP_HEROKU_URL; set this to the URL
you use to deploy the back-end
To deploy the front-end, it is now necessary to use "npm run deploy-front-[gene/johann]"

Current URLs:
Front: openmeta.surge.sh (Gene) / open-meta-project.surge.sh (Johann)
Back: openmeta.herokuapp.com (Gene) / open-meta-project.herokuapp.com (Johann)

Note from Steven:

For the authentification to any route
  - add the token from the redux store to props using a container (it is located under the "Token" key in the redux store )
  - make a fetch request and add the token to the request body like so:
    ```
    fetch("http://localhost:8000/api/tokentest", {
      method: "get",
      headers: new Headers({
        "x-access-token": this.props._token
      })
    }).then(data => {
      this.props.history.push("/profile");
    });
    ```
  - now in the route the request will have a decoded object with the email and passHash (check the console for the server for this)
  ^^ that can now be used for any database accessing via req.decoded.email and req.decoded.passHash

  feel free to slack me for any questions on this -> I can also set the authentification up for a route after you set up the route as well
  
============================ Notes to the developers on this project >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
