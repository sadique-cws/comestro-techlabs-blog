import Link from 'next/link'


const Header = (props) => {
  return (
    <div className={`${props.bg ?? "bg-white shadow-xl"} flex justify-between  px-[15%] py-5`}>
        <h2 className='font-bold text-xl'><span className='text-orange-600'>Comestro</span> <span className='text-blue-600'>TechLabs</span></h2>

        <div className="flex gap-10 text-sm items-center font-semibold text-gray-600">
          <Link className='' href="#">Home</Link>
          <Link className='' href="#">Our Course</Link>
          <Link className='' href="#">Free Content</Link>
          <Link className='' href="#">Register</Link>
          <Link className='' href="#">Login</Link>
        </div>
    </div>
  )
}

export default Header