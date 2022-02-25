import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'

const Account = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <main>
            <Head>
                <title>Account - DevHouse</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>

            <div className="min-h-screen w-full flex justify-center items-start bg-black text-white">
                <Navbar />

                <section className="mt-20 w-9/12 flex items-center justify-center">

                    <div className='flex flex-col md:flex-row items-center gap-4 lg:gap-16 justify-between w-full lg:my-10 mb-10'>

                        <div>
                            <div className="avatar mb-6">
                                <div className="w-56 rounded-full border-8 border-green-500 p-1">
                                    <Image src={user?.image} height={250} width={250} alt="" className='rounded-full' />
                                </div>
                            </div>

                            <h1 className="text-4xl font-black">Hello, {user?.name}</h1>
                            <hr className='w-1/2 border-green-500' />
                        </div>

                        <button className='btn flex items-center gap-2 bg-green-400 w-full md:w-fit'>Start a Room</button>
                    </div>

                </section>

            </div>

        </main>
    )
}

export default Account