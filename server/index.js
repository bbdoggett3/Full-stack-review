require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require('./controllers/authController');
const postCtrl = require('./controllers/postController');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 * 24 * 14},
    secret: SESSION_SECRET
}));

//Endpoints 

//Auth:
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//Post:
app.get('/api/posts', postCtrl.getPost)
app.post('/api/post', postCtrl.newPost)
app.put('/api/posts/:post_id', postCtrl.editPost)
app.delete('/api/posts/:post_id', postCtrl.removePost)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database is connected')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
}).catch(error => console.log(error));
