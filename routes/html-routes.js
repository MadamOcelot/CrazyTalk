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
            res.render("error", {
                statusCode: 400,
                message: "Invalid data"
            });
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
                    res.render("error", {
                        statusCode: 400,
                        message: "Invalid data"
                    });
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
                res.render("error", {
                    statusCode: 400,
                    message: "Invalid data"
                });
            });
        }, function (err) {
            res.status(400);
            res.render("error", {
                statusCode: 400,
                message: "Invalid data"
            });
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
            res.render("error", {
                statusCode: 400,
                message: "Invalid data"
            });
            return;
        }

        tables.stories.insertOrUpdate({
            story: req.body.story
        });

        res.redirect("/");
    });

    app.get("/test", function (req, res) {
        helpers.getStoryWithID(1, function (story) {
            var inputs = helpers.getInputsArray(story);
            res.render("inputs", {
                storyID: 1,
                input: inputs,
                inputCount: inputs.length
            });
        }, function (err) {
            res.status(500);
            res.render("error", {
                statusCode: 500,
                message: "Server error"
            });
        });
    });

    app.get("/testError/:code", function (req, res) {
        //res.status(req.params.code);
        res.render("error", {
            statusCode: req.params.code,
            message: "Test"
        });
    });

    app.get("/viewRandomStory", function (req, res) {
        helpers.getRandomEntry(function (entry) {
            helpers.getStoryWithID(entry.storyId, function (story) {
                helpers.replaceStoryInputs(story, JSON.parse(entry.entries), function (completeStory) {
                    res.render("randomStory", {
                        story: completeStory
                    });
                }, function () {
                    res.status(500);
                    res.render("error", {
                        statusCode: 500,
                        message: "Server error"
                    });
                });
            }, function (err) {
                res.status(500);
                res.render("error", {
                    statusCode: 500,
                    message: "Server error"
                });
            });
        }, function (err) {
            res.status(400);
            res.render("error", {
                statusCode: 400,
                message: "Invalid data"
            });
        })
    });
}