const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/create", async (req, res) => {
  const user = await User.create({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  res.status(201).json({
    status: "Success!",
  });
});

module.exports = router;
