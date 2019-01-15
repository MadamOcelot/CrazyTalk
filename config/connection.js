const Sequelize = require("sequelize");

const connection = new Sequelize("crazytalk_db", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = connection;