import storyModel from "../../../../DB/models/story.model.js";
import userModel from "../../../../DB/models/user.model.js";
import { asyncHandler } from "../../../services/asyncHandler.js";
import { paginate } from "../../../services/pagination.js";

 const topPosts = asyncHandler(async (req, res, next) => {
    let {limit,skip} = paginate(req.query.page, req.query.size);
    let topPosts = await storyModel.find({}).sort({rating:-1}).limit(limit).skip(skip);
    res.status(200).json({ message: "Done", topPosts });
  });


   const userPosts = asyncHandler(async (req, res, next) => {
    const userId = req.params.userId; // Extract user ID from request params
    const { page, size } = req.query;
  
    const { limit, skip } = paginate(page, size);
  
    // Assuming you have a user field in your Story model
    const totalPosts = await storyModel.countDocuments({ user: userId });
    const userPosts = await userModel.find({ user: userId })
      .sort({ createdAt: -1 }) // You might want to sort by some criteria
      .limit(limit)
      .skip(skip);
  
    res.status(200).json({
      message: 'Done',
      userPosts,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
    });
  });


  export {
    topPosts,
    userPosts
  }