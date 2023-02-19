const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, "sarunnani", (err, decoded) => {
    if (err) {
      res.send({ msg: "Please Login" });
    } else {
      req.body.userID = decoded.userID;
      req.body.id = decoded.length;
      next();
    }
  });
};

module.exports = { Auth };
