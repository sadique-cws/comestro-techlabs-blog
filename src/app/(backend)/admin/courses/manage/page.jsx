import CourseModel from "@/models/Course";
import DbConnect from "@/models/DbConnect"
import Link from "next/link"


const page = async () => {
    DbConnect();
    let courses = await CourseModel.find();

    return (
        <div className="flex-1 text-white">
            <div className="flex flex-1 items-center justify-between py-5">
                <h2>Manage Courses (4)</h2>
                <Link href="/admin/courses/create" className="bg-green-700 text-xs rounded-lg text-white px-3 py-2">Add Course</Link>
            </div>
            <table className="border w-full">
                <thead>
                    <tr>
                        <th className="border px-2">Id</th>
                        <th className="border px-2">Name</th>
                        <th className="border px-2">Instructor</th>
                        <th className="border px-2">Duration</th>
                        <th className="border px-2">Description</th>
                        <th className="border px-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <th className="border px-3">{course._id}</th>
                            <th className="border px-3">{course.title}</th>
                            <th className="border px-3">{course.instructor}</th>
                            <th className="border px-3">{course.duration}</th>
                            <th className="border px-3">{course.short_description}</th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default page