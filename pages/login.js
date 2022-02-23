import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Step_1 from '../components/Login/Step_1'
import Step_2 from '../components/Login/Step_2'
import Navbar from '../components/Navbar'

const Login = () => {

    const [activeTab, setActiveTab] = useState(1)
    const [phone, setPhone] = useState()
    const [otp, setOtp] = useState()
    const [error, setError] = useState({
        phone: false,
        otp: false,
        msg: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!phone) {
            return setError({ ...error, phone: true })
        }

        if (activeTab === 1) {
            return setActiveTab(2)
        }

        if (!otp) {
            return setError({ ...error, otp: true })
        }

        console.log({ phone })

    }

    return (
        <main>
            <Head>
                <title>DevHouse</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>

            <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white">
                {
                    activeTab === 1 && <Step_1 error={error} setError={setError} setPhone={setPhone} phone={phone} setActiveTab={setActiveTab} />
                }
                {
                    activeTab === 2 && <Step_2 error={error} setError={setError} setOtp={setOtp} otp={otp} setActiveTab={setActiveTab} />
                }
            </div>
        </main>
    )
}

export default Login