import express from 'express';
import { goolgeLogin, signIn, signUp } from '../controller/authController.js';

const router = express.Router();

router.post("/signup",signUp);
router.post("/signin",signIn);
router.post("/google",goolgeLogin)

export  {router as authRoute} 