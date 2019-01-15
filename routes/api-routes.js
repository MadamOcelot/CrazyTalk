const tables = require("../models/crazytalk");

module.exports = function (app) {
    app.get("/api/randomStory", function (req, res) {
        res.send({ story: "Alyssa's favorite movie star, Tom Cruise, came into class today. He was so <verb ending in -ed> to see us. He walked right up to Alyssa and said '<noun><verb> my <noun>,' all while <verb ending in -ing> his <noun-body part>. With that, he took his leave, <verb ending in -ing> off into the sunset." });
    });
}