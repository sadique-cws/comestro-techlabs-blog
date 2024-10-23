import { handleCourseInsertion } from "@/models/actions"
import Form from "next/form"

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex flex-1">
        <h2 className="text-2xl font-bold text-white">Insert Course</h2>
      </div>
        <Form action={handleCourseInsertion}  className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1 border border-gray-600 px-3 py-2">
              <label className="text-slate-200" htmlFor="courseName">Course Name:</label>
              <input type="text" id="courseName" name="title" className="border px-3 py-2 rounded w-full bg-gray-800 border-gray-600 text-white" required />
            </div>
            <div className="flex flex-col gap-1 border border-gray-600 px-3 py-2">
              <label className="text-slate-200" htmlFor="slug">Course slug:</label>
              <input type="text" id="slug" name="slug"className="border px-3 py-2 rounded w-full bg-gray-800 border-gray-600 text-white" required />
            </div>
            <div className="flex flex-col gap-1 border border-gray-600 px-3 py-2">
              <label className="text-slate-200" htmlFor="instructor">Course Instructor:</label>
              <input type="text" id="instructor" name="instructor"className="border px-3 py-2 rounded w-full bg-gray-800 border-gray-600 text-white" required />
            </div>
            <div className="flex flex-col gap-1 border border-gray-600 px-3 py-2">
              <label className="text-slate-200" htmlFor="courseDescription">Course Description:</label>
              <textarea id="courseDescription" name="description"className="border px-3 py-2 rounded w-full bg-gray-800 border-gray-600 text-white" rows="5" required />
            </div>
            <div className="flex flex-col gap-1 border border-gray-600 px-3 py-2">
              <label className="text-slate-200" htmlFor="shortDescription">Course Short Description:</label>
              <textarea id="shortDescription" name="shortDescription"className="border px-3 py-2 rounded w-full bg-gray-800 border-gray-600 text-white" rows="5" required />
            </div>
            <div className="flex flex-col gap-1 border border-gray-600 px-3 py-2">
              <label className="text-slate-200" htmlFor="courseImage">Course Image:</label>
              <input type="file" id="courseImage" name="image"className="border px-3 py-2 rounded w-full bg-gray-800 border-gray-600 text-white" accept="image/*" required />
            </div>
           
            <div className="flex flex-col col-span-2">
              <input type="submit" className="bg-teal-600 text-white w-full px-3 py-2 text-xl" value="Add Course"/>
            </div>
        </Form>
    </div>
  )
}

export default page