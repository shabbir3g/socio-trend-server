const router = require("express").Router();
const User = require("../models/User");

// Register to database
router.post("/", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
  });
  try {
    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
