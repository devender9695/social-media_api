const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get Token from header
      token = authorization.split(" ")[1];

      // Verify Token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Get User from Token
      req.user = await User.findById(userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  } else {
    res
      .status(401)
      .send({ status: "failed", message: "Unauthorized User, No Token" });
  }
};

module.exports = checkUserAuth;
