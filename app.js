import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connection from './DB/connection.js';
const app = express();
import * as allRoutes from './index.routes.js'

app.use(express.json())

app.use("/api/v2/auth",allRoutes.authRouter)
app.use("/api/v2/user",allRoutes.userRouter)
app.use("/api/v2/story",allRoutes.storyRouter)

connection()




app.listen(7050, ()=>{
    console.log("Server Running")
})