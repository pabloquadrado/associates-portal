module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'associatesportal'
    },
    migrations: {
      directory: './src/Database/Migration'
    }
  },

  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'associatesportaltest'
    },
    migrations: {
      directory: './src/Database/Migration'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'associatesportal'
    },
    migrations: {
      directory: './src/Database/Migration'
    }
  }
};
