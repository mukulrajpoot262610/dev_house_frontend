import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full h-20 flex justify-center items-center'>
            <div className='w-10/12 lg:w-9/12 flex justify-between items-center'>
                <div className='flex text-white items-center gap-3'>
                    <Image src="/logo.svg" height={30} width={50} objectFit="cover" alt="" />
                    <h1 className='hidden lg:block text-2xl font-bold'>DevHouse</h1>
                </div>
                <Link href="/login" passHref>
                    <button className='btn btn-sm lg:btn-md bg-black border-white hover:bg-white hover:text-black'>Get Started</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar