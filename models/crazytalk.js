const Sequelize = require("sequelize");
const connection = require("../config/connection");

const stories = connection.define("stories", {
    story: Sequelize.TEXT
});
stories.sync();

const entries = connection.define("entries", {
    storyId: Sequelize.INTEGER,
    username: Sequelize.STRING,
    entires: Sequelize.TEXT
});
entries.sync();

module.exports = {
    stories: stories,
    entries: entries
};