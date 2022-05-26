const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/UserModel");

// middleware

app.use(express.json());

app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://XXXXX:XXXXX@XXXXX.srhks.mongodb.net/XXXX?retryWrites=true&w=majority"
    );
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

connect();

// get all users
app.get("/getUser", (req, res) => {
  UserModel.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create a new user

app.post("/createUser", async (req, res) => {
  // capture info from front-end

  const user = req.body;

  const newUser = new UserModel(user);

  await newUser.save();

  res.json(user);
});

app.listen(5000, (req, res) => {
  console.log("Sever listening on port 5000");
});
