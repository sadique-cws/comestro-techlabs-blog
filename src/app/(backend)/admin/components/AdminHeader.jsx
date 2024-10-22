import Link from 'next/link'


const AdminHeader = () => {
  return (
    <div className='bg-gray-900 flex flex-1 px-[10%] shadow-2xl border-b border-gray-600 py-5 text-white items-center justify-between'>
            <h2>Admin Panel</h2>
            <Link href="" className='bg-red-500 px-3 py-2 rounded text-xs text-white'>Logout</Link>
    </div>
  )
}

export default AdminHeader