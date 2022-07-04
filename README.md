![License](https://img.shields.io/badge/License-ISC-ff69b4)

# **Tech Blog**

## **Description**
The purpose of this project was build a CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This project is a full-stack web application with both a front end and a back end. 

<br>

## **Table of Contents**
[User Story](#user-story)<br>
[Acceptance Criteria](#acceptance-criteria)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Built With](#built-with)<br>
[Sample Screen Shots](#sample-screen-shots)<br>
[Deliverables](#deliverables)<br>
<br>

### **User Story**
AS A developer who writes about tech<br>
I WANT a CMS-style blog site<br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions<br>

### **Acceptance Criteria**
GIVEN a CMS-style blog site<br>
WHEN I visit the site for the first time<br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br>
WHEN I click on the homepage option<br>
THEN I am taken to the homepage<br>
WHEN I click on any other links in the navigation<br>
THEN I am prompted to either sign up or sign in<br>
WHEN I choose to sign up<br>
THEN I am prompted to create a username and password<br>
WHEN I click on the sign-up button<br>
THEN my user credentials are saved and I am logged into the site<br>
WHEN I revisit the site at a later time and choose to sign in<br>
THEN I am prompted to enter my username and password<br>
WHEN I am signed in to the site<br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out<br>
WHEN I click on the homepage option in the navigation<br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br>
WHEN I click on an existing blog post<br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br>
WHEN I enter a comment and click on the submit button while signed in<br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br>
WHEN I click on the dashboard option in the navigation<br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br>
WHEN I click on the button to add a new blog post<br>
THEN I am prompted to enter both a title and contents for my blog post<br>
WHEN I click on the button to create a new blog post<br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br>
WHEN I click on one of my existing posts in the dashboard<br>
THEN I am able to delete or update my post and taken back to an updated dashboard<br>
WHEN I click on the logout option in the navigation<br>
THEN I am signed out of the site<br>
WHEN I am idle on the site for more than a set time<br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments<br>

<br>

### **License**
This project is covered under the following license: ISC<br>
https://opensource.org/licenses/ISC


<br>

### **Contributing**
This project does not include any contributors

<br>

### **Tests**
This application's helper of date format was tested via Jest. 
<br>
<br>
### **Built With**
* Bcrypt
* connect-session-sequelize
* CSS
* dotenv 
* Express.js
* express-handlebars
* express-session
* HTML
* JavaScript
* Jest
* Node.js
* mysql2
* Sequelize

<br>

### **Sample Screen Shots**
(1) The following screen shot depicts the home page:
![alt text](public/images/homepage.png)

(2) The following screen shots depict the sign up / login pages:
![alt text](public/images/signup-page.png)

![alt text](public/images/login-page.png)

(3) The following screen shot depicts the dashboard:
![alt text](public/images/dashboard-page.png)

(5) The following screen shot depicts the create post page:
![alt text](public/images/create-post.png)

(6) The following screen shot depicts the edit post page:
![alt text](public/images/edit-post.png)

(7) The following screen shot depicts the add a comment page:
![alt text](public/images/add-comment.png)

### **Deliverables**

**Tech Blog Webpage:**<br>
https://damp-ravine-62752.herokuapp.com/

**Tech Blog GitHub Repository:**<br>
https://github.com/SD-github21/tech-blog