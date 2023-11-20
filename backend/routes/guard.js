import {
    adminAuth,
    authenticate,
    guardAuth,
    restrict,
  } from "../auth/verifyToken.js";
  import {
    deleteGuard,
    getAllGuard,
    getGuardProfile,
    getSingleGuard,
    updateGuard,
  } from "../controllers/guardController.js";
  import express from "express";
  // import { createReview } from "../controllers/reviewController.js";
  import reviewRouter from "../routes/review.js";
  
  const router = express.Router();
  
  router.use("/:guardId/reviews", reviewRouter);
  
  // get all guards
  router.get("/", getAllGuard);
  router.get("/:id", getSingleGuard);
  router.put("/:id", authenticate, guardAuth, updateGuard);
  router.delete("/:id", authenticate, guardAuth, deleteGuard);
  router.get("/profile/me", authenticate, restrict(["guard"]), getGuardProfile);
  
  export default router;