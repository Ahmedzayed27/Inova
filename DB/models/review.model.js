import mongoose from "mongoose";

const reviewSchema =  mongoose.Schema(
  {

    rating: {
        type: Number,
        required: [true, 'Please enter a rating'],
        min: 1,
        max: 5, 
        default: 1
      },
      comment:String,


    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
  
    },
    storyId:{
        type:mongoose.Types.ObjectId,
        ref:"Story"
    }


 
  },
  {
    timestamps: true,
  }
);

const reviewModel = mongoose.model("Review", reviewSchema);
export default reviewModel;