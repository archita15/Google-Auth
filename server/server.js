const cors = require("cors")
const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
app.use(cors());

const usersRoute = require("./routes/userRoute");
const moviesRoute = require("./routes/moviesRoute");
const theatresRoute = require("./routes/theatresRoute");

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theatres", theatresRoute);


const port = process.env.PORT || 5000;


const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () =>
  console.log(`Node JS Server is running on port ${port}`)
);