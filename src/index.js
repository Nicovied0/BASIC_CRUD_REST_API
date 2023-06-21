const express = require("express");
const morgan = require("morgan");
const indexRoutes = require("./routes/index.js");
const moviesRoutes = require("./routes/movies.js");
const usersRoutes = require("./routes/users.js");


const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(indexRoutes);
app.use("/api/movies", moviesRoutes);
app.use("/api/users", usersRoutes);

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});