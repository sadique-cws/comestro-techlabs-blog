"use client"
import Course from "@/models/Course"
import DbConnect from "@/models/DbConnect"
import Image from "next/image"
import { useEffect, useState } from "react"

const CourseCard = () => {
  return (
    <div className="flex gap-3 border-2 hover:scale-105 transition-all duration-500 hover:cursor-pointer items-center border-blue-600 px-3 py-2 rounded-lg">
      <Image src="https://picsum.photos/50/50" className="rounded-full" alt="course title" width={50} height={50} />
      <h2 className="text-md">Python Programming</h2>
    </div>
  )
}

const CourseGrid = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [courses, setCourses] = useState([]);

  const loadCourse = async () => {
    DbConnect();
    let courseData =await Course.find();
    setCourses(courseData);
  }

  useEffect(
      loadCourse(),[]);
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        courses.slice(0, seeMore ? courses.length : 5).map(course => (
          <CourseCard key={course._id} />
        ))
      }
     
      <div className="flex gap-3 border-2 items-center border-blue-600 px-3 py-2 rounded-lg">
        <button type="button" onClick={() => setSeeMore(!seeMore)} className="text-lg text-center w-full text-blue-600 hover:underline">View {seeMore ? "Less"  : "All"} Courses</button>
      </div>

    </div>
  )
}

export default CourseGrid