import express from "express";

import {
    adminAuth,
    authenticate,
    guardAuth,
    restrict,
  } from "../auth/verifyToken.js";
import { 
    getBookmeDetails,
    postBookmeDetails,
    deleteBookMeDetails,
}  from "../controllers/bookMeController.js";



const router = express.Router() 

router.post("/:guardId",authenticate, postBookmeDetails)
router.get("/", authenticate, getBookmeDetails)
router.delete("/:id", deleteBookMeDetails )

export default router;