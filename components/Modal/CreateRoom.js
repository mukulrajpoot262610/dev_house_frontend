import React, { useState } from 'react'
import { GiWorld } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'
import { createRoom } from '../../services/apiClient'

const CreateRoom = ({ setShowModal }) => {

    const [topic, setTopic] = useState()
    const [roomType, setRoomType] = useState("open")
    const [error, setError] = useState({
        topic: false,
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!topic) {
            return setError({ ...error, topic: true })
        }

        const payload = {
            topic,
            type: roomType
        }

        try {
            const { data } = await createRoom(payload)
            setShowModal(false)
        } catch (err) {
            setShowModal(false)
            console.log(err)
        }
    }

    return (
        <div className="backdrop-blur-sm fixed h-screen w-full top-0 left-0 z-50 bg-black/[.3] flex justify-center items-center">
            <div className="bg-black border border-gray-600 rounded-lg p-10 text-white">

                <form onSubmit={handleSubmit}>
                    <label className='label mb-3'>
                        <h3 className="font-bold text-2xl">Enter a topic to be discussed!</h3>
                    </label>
                    <input type="text" value={topic} onChange={(e) => {
                        setTopic(e.target.value)
                        setError({ ...error, topic: false })
                    }}
                        placeholder="Type here" className={`input input-bordered ${error.topic ? "border-red-500" : "border-gray-600"} w-full bg-transparent flex items-center gap-3`}></input>
                    {
                        error.topic && <label className="label">
                            <span className="label-text text-red-500">This Field is required!</span>
                        </label>
                    }

                    <h3 className="font-bold text-2xl mt-6 mb-3">Room Type?</h3>
                    <div className='grid grid-cols-3 gap-3'>
                        <span className={`w-full border hover:border-green-500 flex justify-center flex-col items-center p-6 rounded-lg cursor-pointer ${roomType === "open" ? "border-green-500" : "border-gray-600"}`} onClick={() => setRoomType("open")}>
                            <GiWorld className='text-4xl mb-2' />
                            <h6>Open</h6>
                        </span>
                        <span className={`w-full border hover:border-green-500 flex justify-center flex-col items-center p-6 rounded-lg cursor-pointer ${roomType === "social" ? "border-green-500" : "border-gray-600"}`} onClick={() => setRoomType("social")}>
                            <FaUsers className='text-4xl mb-2' />
                            <h6>Social</h6>
                        </span>
                        <span className={`w-full border hover:border-green-500 flex justify-center flex-col items-center p-6 rounded-lg cursor-pointer ${roomType === "closed" ? "border-green-500" : "border-gray-600"}`} onClick={() => setRoomType("closed")}>
                            <HiLockClosed className='text-4xl mb-2' />
                            <h6>Closed</h6>
                        </span>
                    </div>

                    <button className='btn mt-6 border border-green-500 btn-ghost hover:bg-green-500' type='submit'>
                        Create a Room
                    </button>

                </form>
            </div>
        </div>
    )
}

export default CreateRoom