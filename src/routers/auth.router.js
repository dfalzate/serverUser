import { Router } from "express";
import * as AuthController from "../controllers/auth.controller.js";
import { loginValidation } from "../middlewares/validations.js";

const router = new Router();

router.post("/login", loginValidation, AuthController.login);
router.get("/logout", AuthController.logout);

export default router;
