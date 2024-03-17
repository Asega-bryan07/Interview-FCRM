import { Sequelize } from 'sequelize';

// Configure Sequelize to connect to the MySQL database 
export const sequelize = new Sequelize('users_db', '', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true,
});

// Test the database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDatabaseConnection();
