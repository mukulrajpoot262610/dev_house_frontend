import Head from 'next/head'
import React from 'react'
import Navbar from '../../components/Navbar'
import { MdBackHand } from 'react-icons/md'
import Image from 'next/image'

const SingleRoom = () => {
    return (
        <main>
            <Head>
                <title>Rooms - DevHouse</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>

            <div className="min-h-screen w-full flex justify-center items-start bg-black text-white">
                <Navbar />

                <section className="mt-28 w-11/12 lg:w-9/12">

                    <div className='flex flex-col md:flex-row items-center gap-4 lg:gap-16 justify-between w-full lg:my-10 mb-10'>
                        <div>
                            <h1 className="text-4xl font-black">Mukul&apos;s Rooms</h1>
                            <hr className='w-1/2 border-green-500' />
                            <h2 className='mt-3 font-bold'>Topic: AI</h2>
                        </div>

                        <div className='flex gap-2'>
                            <button className='btn bg-yellow-500 hover:bg-yellow-600 w-full md:w-fit'><a className='flex items-center gap-2'><MdBackHand className='text-2xl' /></a></button>
                            <button className='btn bg-red-500 hover:bg-red-600 w-full md:w-fit'><a className='flex items-center gap-2'>Leave Quietly</a></button>
                        </div>

                    </div>

                    <div className='bg-gray-900 w-full rounded-lg p-6'>

                        <div className='flex items-center justify-center gap-8 mb-6'>

                            <div className="avatar flex flex-col justify-center items-center">
                                <div className="w-24 rounded-full border-4 border-green-500 p-1">
                                    <Image src="/male_avatar.jpg" height={250} width={250} alt="" className='rounded-full' />
                                </div>
                                <h2 className='mt-2 text-xs'>Mukul Rajpoot</h2>
                            </div>


                        </div>

                        <hr className='border-gray-600' />

                        <div className='mt-6 flex items-center justify-center flex-wrap gap-8'>

                            <div className="avatar flex flex-col justify-center items-center">
                                <div className="w-24 rounded-full border-4 border-green-500 p-1">
                                    <Image src="/male_avatar.jpg" height={250} width={250} alt="" className='rounded-full' />
                                </div>
                                <h2 className='mt-2 text-xs'>Mukul Rajpoot</h2>
                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    )
}

export default SingleRoom