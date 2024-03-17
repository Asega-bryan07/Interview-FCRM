This is a Repository for the Fans-CRM Technical interview performed by Bryan Asega on using the <br>Nest.js framework, MySQL, and JWT authentication.
<br>
The steps performed are as follows:

### Environment Setup
1. Install Node.js 
2. Set up development environment in Visual Studio Code (VSCode)<br><br>

### Project Initialization
2. Initialize a new Nest.js project using the Nest CLI:
   
   ```npm install -g @nestjs/cli```
   ```nest new nestjs-rest-api```
   <br><br>
   
3. Navigate to the newly created project directory and start the Nest.js server:
   
   ```cd nestjs-rest-api```
   ```npm run start```
   <br><br>

### Install Dependencies
1. Install Sequelize ORM and MySQL dialect for Sequelize:
   
   ```npm install --save @nestjs/sequelize sequelize mysql2 ```
   <br><br>
   
2. Install JWT module for authentication:
   
   ```npm install --save @nestjs/jwt passport passport-jwt```
   

### Configuration
1. Set up MySQL database connection in the `config` directory.
2. Configure Sequelize to connect to MySQL database in the `config` directory.

### Create User Module
1. Generating a new module for users:
   
   ```nest generate module user```
   
2. Generate a user controller and service:
   
   ```nest generate controller user```
   ```nest generate service user```
   <br><br>

### Defining User Entity
1. Define a user entity using Sequelize model in the `user` directory.
2. Define attributes : `id`, `name`, `email`, `email`
<br>
### Implementing Authentication

1. Create an authentication module with JWT token generation and validation.
2. Implementing the JWT strategy using Passport.js.
<br>
### Implementing REST Endpoints

1. Defining a POST endpoint to add a user (`/api/v1/add-user`).
2. Defining a GET endpoint to get a user by ID (`/api/v1/get-user/:id`).
3. Implementing corresponding controller method to handle requests and interact with  database.
<br>
### Test the Application

1. Performing unit tests for services, controllers, and authentication logic.
2. Using curl; testing REST API endpoints.
<br><br>
### Runing Application

1. Starting Nest.js server:
   
   ```npm run start:dev```   
<br>
### Future Development steps

1. Deploy the application to a production server.
2. Monitor and maintain the application ensuring its reliability and performance.
