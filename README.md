# Torque-n-Drag
A Reactive Web-based Torque and Drag Analysis Application

* Project Lead & Git Master: Reza Rastegar
* Deployed Project: TBD
* GitHub repository: https://github.com/rastarastegar/Torque-n-Drag

# PROJECT PROPOSAL : Torque-n-Drag App
### Introduction
This project will be to create a desktop app used to run torque and drag analysis. There will be a user interface to capture the data and return graphs, numerical data, ability to print report for each well and manage all well data and outputs in a dashboard page which is secured with only authenticated accese.


### Goals/Objectives:
* Simple, easy to use app to manage lists
* Sign up to create an account or sign in to an existing account
* View list of owned wishlists or subscribed wishlist
* Add a new wishlist
* Access owned wishlist with capabilities to add/delete items
* Access subscribed wishlist with capabilities to check items on list as purchased/completed
* Extra features:
   * API for items to add to list ()
    
   * Add comments to wishlist
   * Up 

  
### Requirements
Item | Description | Comments
-----|-------------|---------
Node and Express Web Server | Server |
MySQL DB with Sequelize ORM | Database |
GET and POST routes | Used to retrieve and add new data |
Heroku | Used to deploy app | Under Determination ??????!!!!!!!*****
New library/package/technology | Passportjs & Canvajs & 3.js & webgl & usgis API | 

Polished frontend/UI | React |
MVC Paradigm | Folder structure |
Coding standards | Good quality | Indentation, scoping, naming (ESLint)
API keys in node with environment variables |
Incorporate authentication | Passportjs |
Existing public dataset to power database | Casing Data | From casing data handbooks 
Create a migration strategy | Share data across team members | Schema/seed.sql file   
 
### Key Personnel
Name | Role(s) | Contribution(s)
-----|---------|---------------
Austin Plumly | Team Member | Routing, Backend Coding
Leo Ndichu | Team Member | Graphing Technology
Luis Luna | Team Member | Landing Page and UI
Reza Rastegar | Project Manager/git Master | Cloud Computing and Mathematics 
Wilson Prevette | Team Member | Security Lead
Alex Federovitch | Team Member | Node Express Lead 
Paul Viola | TA
Michael Morfessis | TA
Buddy | Instructor/Advisor 

### Step 1 
Create a sign in and sign up page with a slick intro into our app. Add things such as copyright statement and link to LinkedIn and other professional promotional website

### Step 2
Create the dashboard page for when a new person or business wants to sign in:
Information such as name, address, email address and cellphone.
Think about creating an option that will allow a person with a specific email and cellphone number to have a trial access for  one month. Capture the credit card info and aftre a month start charging. Set an email authentication in place before providing access to the dashboard.

### Step 3
Afre sign in or sign up, clients will have access to the dashboard. Dashboard page is a management board for all the wells they have had torque and drag done on or going to do so. A list of all previous wells sortable by well name. and a new well button to start acquiring info about the well that they want torque and drag done on. 
On this page we can accomodate a map that shows all the wells on based one wells longitude and altitude. 

### Step 4
When new well button clicled, page reacts in creatin a form which will ask about well information such as, operator's name 
