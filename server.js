const PORT = process.env.PORT || 8080;

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

if (process.argv[2] === "init") {
    require("./init");
} else {
    app.listen(PORT, function () {
        console.log("App listening at http://localhost:" + PORT);
    });
}