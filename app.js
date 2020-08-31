const express = require("express");

const app = express();

//Open Routes
app.use("/", require("./routes/open"));

//Secured Routes
app.use("/login", require("./routes/secured"));

app.use("/register", require("./routes/secured"));

const PORT = process.encPORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
