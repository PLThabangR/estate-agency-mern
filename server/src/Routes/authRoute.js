import express from 'express';
import { signIn, signUp } from '../controller/authController.js';

const router = express.Router();

router.post("/sign-up",signUp);
router.post("/sign-in",signIn);

export  {router as authRoute} 