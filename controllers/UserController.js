const User = require("../models/User");

const register = async (req, res) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).json({ ok: true, user: user });
  } catch (error) {
    return res.status(503).json({ ok: false, msg: "something happened" });
  }
};

module.exports = { register };
