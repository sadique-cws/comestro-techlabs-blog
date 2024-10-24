import CourseGrid from "./CourseGrid"


const CourseSection = () => {
  return (
    <div className="grid grid-cols-3  gap-10 mt-10 px-[10%]">
        <div className="flex flex-1 flex-col gap-3">
            <h2 className="text-3xl font-black text-teal-600">
              Popular Courses by Comestro techLabs
            </h2>
            <p className="text-teal-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cum at ab reprehenderit minus mollitia sint quia tenetur eligendi corporis velit excepturi. Cumque quis hic aspernatur est explicabo, inventore voluptas.</p>
        </div>
        <div className="flex col-span-2 self-start">
          <CourseGrid/>
        </div>
    </div>
  )
}

export default CourseSection