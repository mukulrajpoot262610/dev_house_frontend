import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdPeopleAlt } from 'react-icons/md'

const RoomCard = ({ data }) => {

    const { topic, speakers, _id } = data

    return (
        <Link href={`/room/${_id}`} passHref>
            <div className='w-full rounded-lg shadow-lg h-56 border border-gray-600 p-6 hover:border-green-500 relative cursor-pointer'>
                <h1 className='text-lg font-bold'>{topic}</h1>
                <div className='my-4'>
                    {
                        speakers.map((e, i) => <div key={i} className='flex items-center gap-2 text-gray-300'>
                            <div className="avatar">
                                <div className="w-6 rounded-full border-2 border-green-500">
                                    <Image src={e.image} height={50} width={50} objectFit="cover" alt="" />
                                </div>
                            </div>
                            <h1 className='text-sm font-semibold'>{e.name}</h1>
                        </div>)
                    }
                </div>

                <div className='absolute bottom-3 right-4'>
                    <div className='flex items-center gap-2 text-gray-300'>
                        <MdPeopleAlt className='text-xl' />
                        <h1>12</h1>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default RoomCard