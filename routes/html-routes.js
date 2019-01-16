const tables = require("../models/crazytalk");

const story = "Alyssa's favorite movie star, Tom Cruise, came into class today. He was so <verb ending in -ed> to see us. He walked right up to Alyssa and said '<noun><verb> my <noun>,' all while <verb ending in -ing> his <noun-body part>. With that, he took his leave, <verb ending in -ing> off into the sunset.";

module.exports = function (app) {
    app.get("/", function (req, res) {
        var inputs = [];
        var inputID = 0;
        
        for (var i = 0; i < story.length; i++) {
            // If this character isn't a '<', skip it
            if (story[i] !== "<")
                continue;

            // get the input type (the text between angle brackets)
            i++;
            var input = "";
            while (story[i] !== ">") {
                input += story[i];
                i++;
            }

            inputs.push({
                id: inputID,
                type: input
            });

            inputID++;
        }

        res.render("inputs", {
            storyID: 0,
            input: inputs,
            inputCount: inputID
        });
    });
}