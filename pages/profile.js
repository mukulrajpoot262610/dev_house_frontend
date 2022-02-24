import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { activate } from '../services/apiClient'
import { setAuth } from '../redux/authSlice'

const Profile = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [image, setImage] = useState("/male_avatar.jpg")
    const [error, setError] = useState({
        name: false,
        gender: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()


        if (!name) {
            return setError({ ...error, name: true })
        }

        if (!gender) {
            return setError({ ...error, gender: true })
        }

        const payload = {
            name,
            gender,
            image
        }

        try {
            const res = await activate(payload)
            dispatch(setAuth(res.data))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main>
            <Head>
                <title>Create Profile - DevHouse</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>

            <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white">
                <div className="card w-96 lg:border border-gray-600">
                    <div className="card-body">
                        <Link href="/" passHref>
                            <Image src="/logo.svg" height={80} width={70} objectFit="contain" alt="" />
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <div className='flex-col my-6 flex justify-center items-center'>
                                <div className="avatar">
                                    <div className="w-40 rounded-full border-green-500 border-4">
                                        <img src={image} />
                                    </div>
                                </div>
                            </div>
                            <label className='label'>
                                <span className="label-text  text-white">You Name Please</span>
                            </label>
                            <input type="text" value={name} onChange={(e) => {
                                setName(e.target.value)
                                setError({ ...error, name: false })
                            }}
                                placeholder="Type here" className={`input input-bordered ${error.name ? "border-red-500" : "border-gray-600"} w-full bg-transparent`} ></input>
                            {
                                error.name && <label className="label">
                                    <span className="label-text text-red-500">Name is required!</span>
                                </label>
                            }
                            <label className='label mt-2'>
                                <span className="label-text  text-white">You Gender Please</span>
                            </label>
                            <select value={gender} onChange={(e) => {
                                setGender(e.target.value)
                                setImage(gender === "Male" ? "/female_avatar.png" : "/male_avatar.jpg")
                                setError({ ...error, gender: false })
                            }}
                                placeholder="Choose your Gender" className={`input input-bordered ${error.gender ? "border-red-500" : "border-gray-600"} w-full bg-transparent`} >
                                <option disabled selected>Choose your Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {
                                error.gender && <label className="label">
                                    <span className="label-text text-red-500">Name is required!</span>
                                </label>
                            }
                            <div className="justify-end card-actions mt-2">
                                <button className='btn bg-black border-gray-600 hover:text-black hover:bg-white'>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile