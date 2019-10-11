const 
    express = require('express'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./routes")(app);

module.exports = app;
