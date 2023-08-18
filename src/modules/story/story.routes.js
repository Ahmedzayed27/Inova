import {Router} from 'express';
const router = Router();
import * as storyController from './controller/story.controller.js';

router.get("/topPosts",storyController.topPosts)
router.get("/getUserPost/:userId",storyController.userPosts)



export default router;

//VqyInMHqjqYh6p5K