import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    size : {
        type : Number
    },
    category : {
        type : String
    }

})

const Class = mongoose.model("Class", classSchema)

export default Class