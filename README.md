# Description
It's just a simple *hello-world web-api* app. You could use it as a *boilerplate* for your simple web-api/ui app.

# Configuration
- Port number: Update in index.js.

# Run
I've created a Dockerfile so there's no need to install node. This means you need to have docker installed on your machine.
 ```
 docker build -t webapi-nodejs-helloworld .
 docker run -p 3000:3000 webapi-nodejs-helloworld
 ```
PS - You need to put the appropriate port numbers with -p flag.

 In case you want to run it directly with node:
 ```
 npm install
 npm start
 ```
