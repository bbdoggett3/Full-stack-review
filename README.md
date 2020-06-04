# REVIEW DAY-FULL STACK-WR1-6/4/2020

## MVP
<ul>
    <li>Login Functionality</li>
    <li>Post comments</li>
    <li>Delete/edit posts</li>
    <li>Control the view based on authorization</li>
</ul>

**icebox**
<ul>
    <li>Delete account</li>
    <li>Play music</li>
    <li>Customize</li>
    <li>Datamine customers</li>
    <li>Fav Five List</li>
</ul> 

## Database
User:
```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password TEXT
)'
```

Post:
```SQL
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    content VARCHAR(250),
    created_at DATE
);
```
## Server-BACKEND
**Dependencies**:
NPM INSTALL THESE...
<ul> 
    <li>express</li>
    <li>express-session</li>
    <li>massive</li>
    <li>dotenv</li>
    <li>bcrypt</li>
</ul>

**Endpoints**:
- auth: (authorization for the user)
    - app.post('/auth/login')
    - app.post('/auth/register')
    - app.delete('/auth/logout')
    - app.get('/auth/user')

- post:
    - app.get('/api/posts')
    - app.post('/api/post')
    - app.put('/api/posts/:post_id')
    - app.delete('/api/posts/:post_id')

## Client-FRONTEND
**Dependencies**:
NPM INSTALL THESE...
<ul> 
    <li>axios</li>
    <li>react-router-dom</li>
    <li>redux</li>
    <li>react-redux</li>
    <li>redux-promise-middleware</li>
</ul>

**Routes** (top level children in your planning tree)
- landing (/)
- register (/register)
- dashboard (/dashboard)
- porfile (/profile)

**file structure**
- src/ (Folder)
    - App.js
    - App.css
    - index.css
    - reset.css
    - redux/ (Folder)
        - store
        - reducer
    - components/ (Folder)
        - Landing.js /.css
        - Register.js /.css
        - Dashboard.js /.css
        - Profile.js /.css
        - PostContainer.js /.css
        - Post.js /.css
        - Edit.js /.css
        - Header.js /.css
        - AuthHeader.js /.css