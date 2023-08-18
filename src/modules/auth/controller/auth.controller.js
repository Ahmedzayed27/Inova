import userModel from "../../../../DB/models/user.model.js";
import { asyncHandler } from "../../../services/asyncHandler.js";


const addUser = asyncHandler(async(req,res) =>{
    const {userName} = req.body;
    const addedUser = await userModel.insertMany({userName})
    res.status(201).json({messsage:"Created",addedUser})
})


export {
    addUser
}