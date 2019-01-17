const tables = require("../models/crazytalk");
const helpers = require("../helpers");

module.exports = function (app) {
    app.get("/", function (req, res) {
        helpers.getRandomStory(function (storyID, story) {
            var inputs = helpers.getInputsArray(story);
            res.render("inputs", {
                storyID: storyID,
                input: inputs,
                inputCount: inputs.length
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

        helpers.getStoryWithID(req.body.storyID, function (story) {
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

            // render story
            helpers.replaceStoryInputs(story, inputs, function (completeStory) {
                res.render("story", {
                    storyID: req.body.storyID,
                    entries: JSON.stringify(inputs),
                    story: completeStory
                });
            }, function () {
                res.status(400);
                res.end();
            });
        }, function (err) {
            res.status(400);
            res.end();
        });
    });

    app.post("/saveStory", function (req, res) {
        // TODO: add validation
        tables.entries.insertOrUpdate({
            storyId: req.body.storyID,
            username: req.body.username,
            entries: req.body.entries
        });

        res.redirect("/");
    });

    app.get("/newStory", function (req, res) {
        res.render("newStory");
    });

    app.post("/saveNewStory", function (req, res) {
        if (!req.body.story || req.body.story.length > 750)
        {
            res.status(400);
            res.end();
            return;
        }

        tables.stories.insertOrUpdate({
            story: req.body.story
        });

        res.redirect("/");
    })
}