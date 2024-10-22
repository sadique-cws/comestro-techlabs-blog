import Link from "next/link"


const page = () => {
  return (
    <div className="flex-1 text-white">
        <div className="flex flex-1 items-center justify-between py-5">
            <h2>Manage Lesson (4)</h2>
            <Link href="/admin/lesson/create" className="bg-green-700 text-xs rounded-lg text-white px-3 py-2">Add Lesson</Link>
        </div>
        <table className="border w-full">
            <thead>
                <tr>
                    <th className="border px-2">Id</th>
                    <th className="border px-2">Name</th>
                    <th className="border px-2">Course Name</th>
                    <th className="border px-2">Instructor</th>
                    <th className="border px-2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="border px-3"></th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default page