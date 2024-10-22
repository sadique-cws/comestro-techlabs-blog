


const Card = ({color,title, count}) => {
    return (
        <div className={`p-4 rounded-md shadow-lg ${color} text-white`}>
            <p className='text-3xl font-bold'>{count}</p>
            <h2 className='text-xl font-normal'>{title}</h2>
        </div>
    )
}

const StaticFacts = () => {
  return (
    <div className='grid grid-cols-4 gap-5  py-10'>
        <Card color="bg-red-500" title="Total Courses" count={10}/>
        <Card color="bg-green-500" title="Total Chapters" count={10}/>
        <Card color="bg-blue-500" title="Total Lessons" count={10}/>
        <Card color="bg-purple-500" title="Total Users" count={10}/>
    </div>
  )
}

export default StaticFacts