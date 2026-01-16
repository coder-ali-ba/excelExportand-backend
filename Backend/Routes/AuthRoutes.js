import express from "express";
import {signUpController, loginController } from "../Controllers/signUpController.js";

const authRouter = express.Router()

authRouter.post("/signup" , signUpController)
authRouter.post("/login" , loginController)

export default authRouter