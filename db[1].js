let Sequelize = require("sequelize");

let db = new Sequelize(
    "connectionString:'postgres: // gjcnwwanbsdcie : a06c96355867802a7c7dacc3630988d97f9c514b459aaf205d88f6b8859204ed @ ec2-34-239-33-57.compute-1.amazonaws.com : 5432 / ddn273jh6di4hb4h",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        }
    });

    module.exports = db;