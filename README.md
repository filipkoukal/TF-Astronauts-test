# TF Astronauts
This is a test web app that allows you to manage a list of astronauts using a simple and intuitive web interface. Features include managing a list of astronauts, creating astronauts, editing existing astronauts and deleting astronauts.  

## Technologies
- Database - Postgres
- Backend - Express.js, Sequelize
- Frontend - Vue.js, TailwindCSS

## Deployment
The app includes dockerfiles for every component (database, frontend, backend), and was made with the intention to be deployed via Azure App Services. 

An online preview is available at:
https://tftest-frontend.azurewebsites.net/

Preview backend and frontend have been deployed as App Services within the same App Service Plan using Docker images built from Docker files included in this repository. Preview database has been deployed via an Azure Container Instance (ACI). 

