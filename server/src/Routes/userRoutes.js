import express from 'express';
import { testController } from '../controller/userController.js';

//router object
const router =express.Router();

router.get('/test',testController);

export  {router as userRoutes} 