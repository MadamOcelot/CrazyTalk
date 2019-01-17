const Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
    module.exports = new Sequelize(JAWSDB_URL);
}
else {
    module.exports = new Sequelize("crazytalk_db", "root", "root", {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
}