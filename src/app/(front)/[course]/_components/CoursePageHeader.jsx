import Header from '@/app/components/Header'



const TopBanner = () => {
  return (
    <div className="flex flex-col gap-10 py-10 justify-center items-center">
          <img src="https://www.programiz.com/sites/all/themes/programiz/assets/python_inverted.svg" className='border-2 border-gray-700'/>
          <h1 className='text-3xl font-semibold'>Let's Start Python Programming</h1>
    </div>
  )
}


const CoursePageHeader = () => {
  return (
    <div className="bg-[#ccedff]">
        <Header bg="bg-[#ccedff]"/>
        <TopBanner/>
    </div>
  )
}

export default CoursePageHeader