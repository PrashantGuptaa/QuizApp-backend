const { User } = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSignup = (req, res) => {
  const { email, admin, password, firstName, lastName } = req.body;
  User.find({ email })
    .then((response) => {
      if (response.length > 0) {
        console.log("Account exists with email", email);
        res.status(200).send({ message: "Existed" });
      } else {
        const hashedPassword = bcrypt.hashSync(password, 8);
        const newUser = new User({
          email,
          admin,
          password: hashedPassword,
          firstName,
          lastName, 
        });
        newUser.save().then((user) => {
          console.log("Account SuccessFully Created for user:", email);
          const token = jwt.sign(
            { id: user._id, admin: user.admin, auth: true },
            process.env.LOGIN_SECRET_KEY,
            {
              expiresIn: 86400, // expires in 24 hours
            }
          );
          res.status(200).send({ message: "Success", token });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = { userSignup };
