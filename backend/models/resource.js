import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        default : 0
    },
    classId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class",
        required : true
    }

})

const Resource = mongoose.model("Resource", resourceSchema)

export default Resource