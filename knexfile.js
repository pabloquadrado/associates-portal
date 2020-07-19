require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA
    },
    migrations: {
      directory: './src/Database/Migration'
    },
    seeds: {
      directory: './src/Database/Seed'
    }
  },

  test: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA
    },
    migrations: {
      directory: './src/Database/Migration'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA
    },
    migrations: {
      directory: './src/Database/Migration'
    }
  }
};
