const tables = require("./models/crazytalk");

module.exports.getRandomStory = function (cb) {
    tables.stories.findAll({}).then(function (data) {
        var randomStoryID = data[Math.floor(Math.random() * data.length)].id;

        module.exports.getStoryWithID(randomStoryID, function (story) {
            cb(randomStoryID, story);
        });
    });
};

module.exports.getStoryWithID = function (id, cb, error) {
    tables.stories.findOne({
        where: { id: id }
    }).then(function (data) {
        cb(data.story);
    }).catch(function (err) {
        error(err);
    })
};

// returns an array containing objects of the form:
// {id, type}
module.exports.getInputsArray = function (storyContent) {
    var inputs = [];
    var inputNum = 0;
    for (var i = 0; i < storyContent.length; i++) {
        // If this character isn't a '<', skip it
        if (storyContent[i] !== "<")
            continue;

        // get the input type (the text between angle brackets)
        i++;
        var input = "";
        while (storyContent[i] !== ">") {
            input += storyContent[i];
            i++;
        }

        inputs.push({
            id: inputNum,
            type: input
        });
        inputNum++;
    }
    return inputs;
};

module.exports.replaceStoryInputs = function(story, inputs, cb, errorCb) {
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
            errorCb();
            return;
        }
    }

    cb(completeStory);
}