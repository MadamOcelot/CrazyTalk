const tables = require("../models/crazytalk");
const stories = require("../stories");

module.exports = function (app) {
    app.get("/", function (req, res) {
        var inputs = [];
        var inputNum = 0;
        var storyID = Math.floor(Math.random() * stories.length);
        var story = stories[storyID];

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

    app.post("/story", function (req, res) {
        // validation
        if (req.body.storyID >= stories.length) {
            res.status(400);
            res.end();
            return;
        }
        var story = stories[req.body.storyID];
        var inputCount = req.body.inputCount;
        if (isNaN(inputCount)) {
            res.staus(400);
            res.end();
            return;
        }

        // grab the inputs
        var inputs = [];
        for (var i = 0; i < inputCount; i++)
            inputs.push(req.body["input" + i]);

        // more validation
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
    });
}