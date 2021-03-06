import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { BiSearchAlt } from 'react-icons/bi'

import { MdOutlineGroupAdd } from 'react-icons/md'
import RoomCard from '../components/Rooms/RoomCard'
import CreateRoom from '../components/Modal/CreateRoom'
import { getAllRooms } from '../services/apiClient'

const Rooms = () => {

    const [showModal, setShowModal] = useState(false)
    const [loader, setLoader] = useState(true)
    const [rooms, setRooms] = useState()

    useEffect(() => {
        const fetchRoom = async () => {

            try {
                const { data } = await getAllRooms()
                setRooms(data.rooms)
                setLoader(false)
            } catch (err) {
                setLoader(false)
                console.log(err)
            }
        }

        fetchRoom()
    }, [])

    console.log(rooms)

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
                            <h1 className="text-4xl font-black">All Voice Rooms</h1>
                            <hr className='w-1/2 border-green-500' />
                        </div>
                        <div className="border flex items-center rounded-lg border-gray-600 w-full lg:flex-1">
                            <input type="text" placeholder="Search…" className="input input-bordered bg-transparent w-full" />
                            <button className="btn btn-ghost">
                                <BiSearchAlt className='text-2xl' />
                            </button>
                        </div>
                        <button className='btn bg-green-500 hover:bg-green-600 w-full md:w-fit' onClick={() => setShowModal(!showModal)}><a className='flex items-center gap-2'><MdOutlineGroupAdd className='text-2xl' /> Start a Room</a></button>

                    </div>

                    <div className='w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8'>
                        {
                            loader ? "Loading..." : rooms?.map((e, i) => <RoomCard key={i} data={e} />)
                        }
                    </div>
                </section>

            </div>

            {
                showModal && <CreateRoom setShowModal={setShowModal} />
            }

        </main>
    )
}

export default Rooms