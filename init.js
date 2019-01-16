const stories = require("./stories");
const tables = require("./models/crazytalk");

//tables.stories.destroy({});
tables.stories.bulkCreate([
    { story: stories[0] },
    { story: stories[1] },
    { story: stories[2] },
    { story: stories[3] },
    { story: stories[4] },
    { story: stories[5] },
    { story: stories[6] },
    { story: stories[7] },
    { story: stories[8] },
]);