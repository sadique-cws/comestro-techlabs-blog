import mongoose from "mongoose"

const CourseSchema = mongoose.Schema({
    title: {type:String, unique:true},
    instructor: {type:String, required:true},
    duration: {type:Number, required:true}, 
    description : {type:String, required:true},
    short_description: {type:String, required:true},
    slug : {type:String, required:true, unique:true},
    image: {type:String, required:true},
})


export default mongoose.models.Course || mongoose.model("Course",CourseSchema);