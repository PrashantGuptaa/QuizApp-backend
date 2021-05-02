const { User } = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const verifyUser = (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: "No token provided." });
    }
    jwt.verify(token, process.env.LOGIN_SECRET_KEY, (err, decoded) => {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });
      console.log(decoded);
      res.status(200).send(decoded);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { verifyUser };
