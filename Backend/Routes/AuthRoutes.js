import express from "express";
import signUpController from "../Controllers/signUpController.js";

const authRouter = express.Router()

authRouter.post("/signup" , signUpController)

export default authRouter