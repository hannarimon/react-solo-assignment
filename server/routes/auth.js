const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({
        status: "Failure",
        message: "Email or password needs to be filled in.",
      });
      return;
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password, user.password))) {
      res.status(401).json({
        status: "Failure",
        message: "Incorrect email or password.",
      });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failure",
    });
  }
  res.status(200).json({
    status: "Success!",
    message: "Logged in :)",
  });
});

router.post("/create", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    res.status(201).json({
      status: "Success!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failure",
    });
  }
});

module.exports = router;
