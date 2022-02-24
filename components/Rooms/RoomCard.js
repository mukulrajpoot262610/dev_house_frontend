import Image from 'next/image'
import React from 'react'
import { GiPublicSpeaker } from 'react-icons/gi'
import { MdPeopleAlt } from 'react-icons/md'

const RoomCard = () => {
    return (
        <div className='w-full rounded-lg shadow-lg h-56 border border-gray-600 p-6 hover:border-green-500 relative'>
            <h1 className='text-lg font-bold'>Which framework is best for full-stack developement?</h1>
            <div className='my-4'>
                <div className='flex items-center gap-2 text-gray-300'>
                    <div className="avatar">
                        <div className="w-8 rounded-full border-2 border-green-500">
                            <Image src={"/male_avatar.jpg"} height={50} width={50} objectFit="cover" alt="" />
                        </div>
                    </div>
                    <h1>Mukul Rajpoot</h1>
                </div>
            </div>

            <div className='absolute bottom-3 right-4'>
                <div className='flex items-center gap-2 text-gray-300'>
                    <MdPeopleAlt className='text-xl' />
                    <h1>12</h1>
                </div>
            </div>

        </div>
    )
}

export default RoomCard