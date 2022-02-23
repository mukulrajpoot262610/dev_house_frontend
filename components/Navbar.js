import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full h-20 flex justify-center items-center'>
            <div className='w-9/12 flex justify-between items-center'>
                <div className='flex text-white items-center gap-3'>
                    <Image src="/logo.svg" height={50} width={70} objectFit="cover" alt="" />
                    <h1 className='text-2xl font-bold'>DevHouse</h1>
                </div>
                <button className='btn'>Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar