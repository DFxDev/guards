import jwt from "jsonwebtoken";
import GuardSchema from "../models/GuardSchema.js";
import UserSchema from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // Get token from header
  const authToken = req.headers.authorization;

  // Check if token exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const token = authToken.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = payload.id;
    req.role = payload.role;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token has expired" });
    }

    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const restrict = roles => async (req, res, next) => {
  const userId = req.userId;

  let user;
  // Check the user's role and retrieve from the appropriate collection
  const client = await UserSchema.findById(userId);
  const guard = await GuardSchema.findById(userId);

  if (client) {
    user = client;
  } else if (guard) {
    user = guard;
  } else {
    return res.status(404).json({ message: "User not found" });
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized" });
  }

  next();
};

// Middleware to authenticate admin access
export const adminAuth = restrict(["admin"]);

// Middleware to restrict guard access
export const guardAuth = restrict(["guard"]);

// Middleware to restrict client access
export const clientAuth = restrict(["client", "admin"]);