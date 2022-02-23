import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Login = () => {

    const [phone, setPhone] = useState()
    const [otp, setOtp] = useState()
    const [error, setError] = useState({
        phone: false,
        otp: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!phone) {
            return setError({ ...error, phone: true })
        }

        if (!otp) {
            return setError({ ...error, otp: true })
        }
    }

    return (
        <main>
            <Head>
                <title>DevHouse</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>

            <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white">
                <div className="card w-96 lg:border border-gray-600">
                    <div className="card-body">
                        <Image src="/logo.svg" height={80} width={70} objectFit="contain" alt="" />
                        <h2 className="card-title text-4xl">Login</h2>
                        <p className='mb-8 text-gray-400'>Continue with mobile number to reach number of developers waiting for you!</p>
                        <form onSubmit={handleSubmit}>
                            <label className='label'>
                                <span className="label-text  text-white">Your Mobile Number</span>
                            </label>
                            <input type="number" onChange={(e) => {
                                setPhone(e.target.value)
                                setError({ ...error, phone: false })
                            }}
                                placeholder="Type here" className={`input input-bordered ${error.phone ? "border-red-500" : "border-gray-600"} w-full bg-transparent`}></input>
                            {
                                error.phone && <label className="label">
                                    <span className="label-text text-red-500">Mobile Number is required!</span>
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

export default Login