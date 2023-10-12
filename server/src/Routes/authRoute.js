import express from 'express';
import { signUp } from '../controller/authController.js';

const router = express.Router();

router.post("/sign-up",signUp);

export  {router as authRoute} 