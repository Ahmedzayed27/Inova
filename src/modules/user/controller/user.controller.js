import reviewModel from "../../../../DB/models/review.model.js";
import storyModel from "../../../../DB/models/story.model.js";
import { asyncHandler } from "../../../services/asyncHandler.js";


const addStory = asyncHandler(async(req,res) =>{
    const {title,body} = req.body;
    const addedStory = await storyModel.insertMany({title,body})
    res.status(201).json({message:"Story added",addedStory})
});

const addReview = asyncHandler(async(req,res) =>{
    const {rating,comment,storyId} = req.body;
    const addedReview = await reviewModel.insertMany({rating,comment,storyId})
    const existingStory = await storyModel.findById(storyId);
    if (!existingStory) {
       res.status(404).json({ message: "Sorry, story is not found" });
    }
    res.status(201).json({message:"Review Added",addedReview})
})





export {
    addStory,
    addReview
}