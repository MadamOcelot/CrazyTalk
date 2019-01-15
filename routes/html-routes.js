const tables = require("../models/crazytalk");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });
}