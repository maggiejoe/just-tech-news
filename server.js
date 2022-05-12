const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { application } = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});


// {
// 	"username": "linda",
// 	"email": "linda@school.ca",
// 	"password": "password1233454"
// }

// {
// 	"id": 1,
// 	"title": "title",
// 	"post_url": "https://github.com/maggiejoe/just-tech-news",
// 	"user_id": 1
// }

// {
// 	"user_id": 1,
// 	"post_id": 1
// }