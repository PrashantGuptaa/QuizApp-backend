const { User } = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSignIn = (req, res) => {
  const { email, password } = req.body;
  User.find({ email })
    .then((response) => {
      if (response.length === 0) {
        console.log("Account does not exists with", email);
        res.status(404).send({ message: "Account does not Exist" });
      } else {
        const { password: hashedPassword } = response[0];
        const passwordMatched = bcrypt.compareSync(password, hashedPassword);
        if (!passwordMatched) {
          res.status(401).send({ message: "Invalid Password" });
        } else {
          console.log("Email and Password Successfully Verfied");
          const token = jwt.sign(
            { id: response[0]._id, admin: response[0].admin, auth: true, },
            process.env.LOGIN_SECRET_KEY,
            {
              expiresIn: 86400, // expires in 24 hours
            }
          );
          res.status(200).send({ message: "Success", token });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = { userSignIn };
