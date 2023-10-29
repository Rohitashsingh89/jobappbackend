const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");
const JobRoutes = require("./routes/JobRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const jobCategoryRoutes = require("./routes/jobCategoryRoutes");

const app = express();

app.use(cors());
dotenv.config();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "JobApp-session",
    keys: ["COOKIE_SECRET"],
    httpOnly: true
  })
);

const db = require("./models");
const Role = db.role;
const url = process.env.database;

db.mongoose
  .connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Real Time JobApp application." });
});

// routes
app.use("/api/auth", AuthRoutes);
app.use("/api/access", UserRoutes);
app.use("/api/jobs", JobRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/job-category", jobCategoryRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => { 
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "employer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'employer' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
