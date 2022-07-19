# README
## Project Name: 
PMaster
## Member: 
Chen Wenxin, See Zhuo Rui Jorelle
## Product link: 
https://orbital-pmaster-backend.herokuapp.com/
## Project motivation: 
Project management is a practice as old as human culture. No matter the discipline, students cannot avoid project management. We found that lots of people have great project ideas, but are completely clueless about how to start a project, allowing their ideas to go to waste. We thus decided to create an app to help students/budding entrepreneurs get started and provide guidance for the process, using a proven project management framework developed by professors from Singapore’s leading university. As such, users can manage their project process more effectively and systematically
## Target group:
Students/budding entrepreneurs who have ideas and plan to start on real-world projects. 
## Product description and usage guide:
To create a web application which can help users construct their ideas, carry out and keep track of their project progress. 
This application consists of various features and four parts of content, namely a summary of the identified issue, cost management, task management and human resource management. These are main pillars of project management. 
### Login and Logout
First time users can register an account using their email.
After creating an account, users can proceed to login.
At any point of the web app, users can click on Logout at the top right corner to logout.
### Side Navigation Bar
Users can use the side navigation bar on the left of the web page to navigate the different sections of the app. As users insert more and more content, the web page will grow longer. Navigation bar helps them navigate to different sections easily. 
### Summary 
For the summary section, users are expected to specify the issue identified, their solutions, stakeholders involved and expected outcome. This is to mark the scope of their projects, help users keep in mind the aim of their projects and remind users to make decisions that align with the main aim of their projects.
### Cost Management 
This section is to help users manage their project budget and cost. 
Users can input their initial budget for the project, which can be updated along the way. 
It consists of a cost table in which users can add newly purchased items and delete outdated/wrong items. This is to keep the project spending more organised. 
Many users may not be very clear of the unit cost of the items they want to purchase. Our app provides users with a database in which they can search for the unit cost of many items they are interested in. This is to help them plan and allocate project budgets better. The available categories of items are specified as the followings:  
watches
home appliance
cameras
sports and outdoors
home and living
travel and luggage
shoes
apparel
computers and peripherals

The total cost of all items in the table will be calculated automatically. Based on the total budget and total cost, the amount of remaining budget will be calculated. This is to help users monitor their spendings and keep their spendings within their budget.
### Time Management
This section is to help users monitor the entire progress of their projects and help them complete their projects on time. 
This section consists of a time table in which users can add or delete activities/tasks. These activities will be automatically arranged in chronological order and a timeline will also be automatically generated to make activities more organised and help users visualise the sequence of their activities better.
### Human Resource Management
This section contains a human resource table to record information of relevant personnel involved in the project and making human resource management more organised.
## Technical set:
### Front-end
HTML, CSS, Javascript
ReactJS: 
Create virtual dom(react components) -> Real dom components get rendered on web page -> When changes are made, the entire virtual dom gets updated -> The updated virtual dom gets compared to what it looked like before update, figuring out which dom objects have been updated -> Update only the changed objects in the real dom -> Real dom is re-rendered and make changes on the screen. 
Javascript: 
Create front-end interactive features. 
Functions are triggered by events (e.g. onClick, onChange):
Simple front-end functions(e.g. calculation, sorting date etc)
Back-end API with a specific route is called to communicate data with back-end server
### Back-end
NodeJS, ExpressJS: 
Setting up the back-end server and API routes to communicate data between front-end and back-end. Each back-end route executes a particular command. 
Axios and Cors are used to communicate data between front-end and back-end. 
### Database
Database contains tables with user data being saved. 
The back-end server communicates with database using queries(e.g. SELECT, INSERT) to add data into database/retrieve data from database(which will then be sent to front-end) etc. 
### Deployment platform
Heroku
Cloud Database: ClearDB MySQL
## Github 
The public folder on main branch contains react build content for production.
The index.js file on main branch is the backend script, with the configuration of backend server and APIs.

The detailed frontend react script with relevant code-level documentation can be found on frontend branch. 
Unit test files can be found on frontend branch, src/test folder. 
## File structure
Component based file structure. 

Files are created and arranged as components. It is easier to manage and organise these smaller components. The relations of different components are clearer (e.g. the files of components involved in the main page are located in folder ‘componentMain.js’)

Certain components(e.g. topNavBar, headingContent) and functions(e.g. handleInput) are used multiple times. Such components and functions are extracted and saved in the folder ‘componentsCommon’ and ‘functions’ respectively. It allows the components and functions to be re-used by simply importing them. 

