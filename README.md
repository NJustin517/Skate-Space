# Welcome to my project: Skate-Space!

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

<p>The main idea behind Skate-Space was to create an application that skateboarders could use to share their photos, art, culture, and experiences. As a kid, I loved skateboarding. It kept me out of trouble, and provided a healthy output for all of my stresses and energy. Since then, the sport has skyrocketed in popularity, going so far as to become an Olympic sport. The community of skateboarders is HUGE, and having a dedicated social media app would be a welcomed resource to keeping up with everything going on in the industry.</p>

<h3>As far as the functionality of the site goes, as a user you can:</h3>
<ul>
  <li>Create an account</li>
  <li>Login and Logout of a created account (uses sessions/cookies to enable auto sign-in)</li>
  <li>Search for users, and get a match of all users containing the entered string</li>
  <li>Follow users to see their posts on your main homepage, and unfollow them to remove their posts</li>
  <li>View a list of all the users you currently follow</li>
  <li>Create a post with a picture (using a URL link) and description</li>
  <li>Delete your own posts</li>
  <li>Comment on posts</li>
  <li>Like/unlike posts</li>
  <li>Click on the username of a comment to go to that user's page</li>
</ul>

This project is built using React.js for the frontend, with additionaly styling from Bootstrap, while the backend relies on PostgresSQL by way of Ruby on Rails.

### To install and set up:

If you fork and clone the repo onto your system, all you need to do is run:
`bundle install` to get the backend dependencies taken care of, and then:
`npm install --prefix client` to install the frontend dependencies and packages.

You can then run `rails s` to start the backend server before running:
`npm start --prefix client` to start the frontend server and launh the app in your browser!
