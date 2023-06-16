const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const verify = require("./verifyToken");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email address already exists");

  const salt = await bcrypt.genSalt(10);
  hashedPassword = await bcrypt.hash(req.body.password, salt);

  let Id = Math.floor(Math.random()*10000);
  let alreadyId = await User.findOne({id:Id})
  while(alreadyId){
    Id = Math.floor(Math.random()*10000);
    alreadyId = await User.findOne({id:Id})
  }

  const user = new User({
    id: Id,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const dbSavedUser = await user.save();
    res.send({ user: dbSavedUser._id });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username is wrong");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Password is wrong");
  }

  const refreshToken = jwt.sign(
    { name: user.name },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  const token = refreshToken;
  await User.updateOne(
    { email: req.body.email },
    { refreshToken: refreshToken }
  );

  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.json({ token });
});

router.delete("/logout", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log(refreshToken);
  await User.updateOne({ email: req.body.email }, { refreshToken: null });
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
});

router.get("/token", async (req, res) => {
  const refreshToken = req.headers.authorization;
  if (!refreshToken) return res.sendStatus(401);
  console.log(refreshToken);
  const user = await User.findOne({ refreshToken: refreshToken });
  console.log(user);
  res.json({ token: user });
});

module.exports = router;