import {Router} from 'express'

const router = Router();
import * as authController from './controller/auth.controller.js'

router.post("/addUser",authController.addUser)



export default router;