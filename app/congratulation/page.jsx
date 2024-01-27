'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const Congratulation = () => {
  const {data: session} = useSession()
  return (
    <div className='flex items-center justify-center gap-x-10'>
        <h1 className='text-3xl text-bolder'>Congratulation :<span>{session?.user?.email} logged successfully</span></h1>

        <button onSubmit={signOut} className="px-7 py-2 bg-blue-500 text-white shadow-sm  rounded-md"><Link href='/register'>Sign out</Link></button>
    </div>
  )
}

export default Congratulation