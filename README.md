# Rent-Scout

![Project Screenshot](screenshot.png)

## Description
Rent-Scout is a full-stack web application designed to help users find rental listings in their desired location. The application allows users to browse through available listings, view detailed information about each property, and contact the property owner for more information.

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- Sequelize ORM
- PostgreSQL
- Express-session
- Multer
- Heroku

## Features
- User authentication with express-session and cookies
- Browse through rental listings
- View detailed information about each property
- Contact property owners for more information
- Responsive design for optimal viewing on various devices

## Installation
1. Clone the repository: `git clone https://github.com/Nutechgy/Rent-Scout.git `
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add environment variables for sensitive information such as database credentials and API keys
4. Set up the database:
   - Create a PostgreSQL database
   - Run Sequelize migrations to create the necessary tables: `npx sequelize-cli db:migrate`
5. Start the server: `npm start`
6. Visit `http://localhost:3001` in your web browser to view the application

## Usage
- Register for an account or log in if you already have one
- Browse through the available rental listings
- Click on a listing to view detailed information
- Contact the property owner if you're interested in a particular property

## Deployed Application
The application is deployed on Heroku: [Rent-Scout] https://rent-scout-94bb07c0c354.herokuapp.com/

