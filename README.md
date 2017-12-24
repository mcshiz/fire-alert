# Notes for future projects:

### Starting express-generator server with nodemon
add this to the servers package json <br />
`  "scripts": {
     "start": "PORT=3001 nodemon ./bin/www"
   }`

### Setting env variables for pg package  <br />
Use the `dotenv` package <br />
Create server root level .env file <br />
`require('dotenv').config({path: '/custom/path/to/your/env/vars'})` <br />
variables now accessible under process.env.VARIABLE  

### Remove files / directories from GIT remote but keep local
`git rm [-r] --cached [file | folder]`
`git commit -m "message"`
`git push origin <branch>`