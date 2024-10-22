import Link from 'next/link'


const MenuHeader = () => {
  return (
    <div className='bg-transparent flex items-center justify-around flex-1 py-3 px-[10%] border-b border-gray-800 bg-gray-700'>
        <Link href="/admin" className='text-slate-300'>Home</Link>
        <Link href="/admin/courses/manage" className='text-slate-300'>Manage Courses</Link>
        <Link href="" className='text-slate-300'>Manage Chapters</Link>
        <Link href="" className='text-slate-300'>Manage Lessons</Link>
        <Link href="" className='text-slate-300'>Manage Users</Link>
        <Link href="" className='text-slate-300'>Compiler</Link>
        <Link href="" className='text-slate-300'>Settings</Link>
    </div>
  )
}

export default MenuHeader