module.exports = {
  "development": {
    "username": "TF_Astronauti",
    "password": "ahoj",
    "database": "TF_Astronauti",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "TF_Astronauti",
    "password": "ahoj",
    "database": "TF_Astronauti",
    "host": process.env.DB_NAME,
    "port": process.env.DB_PORT,
    "dialect": "postgres"
  }
}