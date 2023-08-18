import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    title:String,
    body:String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    
      },
},
{
    timestamps: true,
}
)

const storyModel = mongoose.model("Story",storySchema)
export default storyModel;