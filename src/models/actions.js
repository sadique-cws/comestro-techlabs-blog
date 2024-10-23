"use server"

import { redirect } from "next/navigation";
import DbConnect from "./DbConnect";
import CourseModel from "./CourseModel";
import {join} from "path";
import {writeFile} from "fs/promises";


export const handleCourseInsertion = async (formData) => {
    try{
        DbConnect();
        let image = formData.get("image");

        let bytes = await image.arrayBuffer();
        let buffer = Buffer.from(bytes);
        let path = join("./public/course/images", image.name);
        await writeFile(path, buffer); 

        let data = {
            title: formData.get("title"),
            instructor: formData.get("instructor"),
            duration: 1,
            description: formData.get("description"),
            short_description: formData.get("shortDescription"),
            slug: formData.get("slug"),
            image: image.name
        }

        const course = await CourseModel.create(data);
        redirect("/admin/courses/manage");
    }
    catch(e){
        console.error(e);
        return {message: "Error inserting course", success: false}
    }
}