import {Router} from 'express';
const router = Router();
import * as userController from './controller/user.controller.js';

router.post("/addStory",userController.addStory)
router.post("/addReview",userController.addReview)


export default router;