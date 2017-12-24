# Notes for future projects:

### Starting express-generator server with nodemon
add this to the servers package json <br />
`  "scripts": {
     "start": "PORT=3001 nodemon ./bin/www"
   }`

### Setting env variables for use with process.env.<i>BLAH</i>
Use the `dotenv` package <br />
Create server root level .env file <br />
`require('dotenv').config({path: '/custom/path/to/your/env/vars'})` <br />
variables now accessible under process.env.VARIABLE  

### Remove files / directories from GIT remote but keep local
`git rm [-r] --cached [file | folder]`<br />
`git commit -m "message"`<br />
`git push origin <branch>`