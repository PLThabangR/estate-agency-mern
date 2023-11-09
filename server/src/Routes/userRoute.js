import express from 'express';
import { testController, updateUserController } from '../controller/userController.js';

//router object
const router =express.Router();

router.get('/test',testController);
router.post('/update',updateUserControllererController)

export  {router as userRoutes} 