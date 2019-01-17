const tables = require("../models/crazytalk");

module.exports = function (app) {
    app.get("/", function (req, res) {
        tables.stories.findAll({}).then(function (data) {
            // get id of random row in DB
            var storyID = data[Math.floor(Math.random() * data.length)].id;

            tables.stories.findOne({
                where: { id: storyID }
            }).then(function (storyData) {

                var story = storyData.story;

                // build "inputs"
                var inputs = [];
                var inputNum = 0;
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
                        id: inputNum,
                        type: input
                    });
                    inputNum++;
                }

                res.render("inputs", {
                    storyID: storyID,
                    input: inputs,
                    inputCount: inputNum
                });
            });
        });
    });

    app.post("/story", function (req, res) {
        // validation
        var inputCount = req.body.inputCount;
        if (isNaN(inputCount)) {
            res.staus(400);
            res.end();
            return;
        }

        tables.stories.findOne({
            where: { id: req.body.storyID }
        }).then(function (data) {
            var story = data.story;

            // grab the inputs
            var inputs = [];
            for (var i = 0; i < inputCount; i++)
                inputs.push(req.body["input" + i]);

            // ensure all inputs are provided
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i] === "" || inputs[i] === undefined) {
                    res.status(400);
                    res.end();
                    return;
                }
            }

            var completeStory = "";
            var curInput = 0;
            for (var i = 0; i < story.length; i++) {
                if (story[i] !== "<") {
                    completeStory += story[i];
                    continue;
                }

                // skip until '>'
                while (story[i] !== ">")
                    i++;

                // add the input
                completeStory += inputs[curInput];
                curInput++;

                if (curInput > inputs.length) {
                    res.status(400);
                    res.end();
                    return;
                }
            }

            res.render("story", {
                story: completeStory
            });

            tables.entries.insertOrUpdate({
                storyID: req.body.storyID,
                username: "",
                entries: JSON.stringify(inputs)
            });
        }).catch(function (err) {
            res.status(400);
            res.end();
        });
    });
}