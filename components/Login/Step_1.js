import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Step_1 = ({ phone, setPhone, setError, error, setActiveTab }) => {


    const handleNext = (e) => {
        e.preventDefault()

        if (!phone || phone.length !== 10) {
            return setError({ ...error, phone: true })
        }

        setActiveTab(2)
        console.log("+91" + phone)
    }

    return (
        <div className="card w-96 lg:border border-gray-600">
            <div className="card-body">
                <Link href="/" passHref>
                    <Image src="/logo.svg" height={80} width={70} objectFit="contain" alt="" />
                </Link>
                <h2 className="card-title text-4xl">Login</h2>
                <p className='mb-8 text-gray-400'>Continue with mobile number to reach number of developers waiting for you!</p>
                <form onSubmit={handleNext}>
                    <label className='label'>
                        <span className="label-text  text-white">Your Mobile Number</span>
                    </label>
                    <div className={`input input-bordered ${error.phone ? "border-red-500" : "border-gray-600"} w-full bg-transparent flex items-center gap-3`}>
                        <Image src="/in.png" height={25} width={25} alt="" objectFit='contain' />
                        <span className='font-bold'>+91 </span>
                        <input type="number" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                            setError({ ...error, phone: false })
                        }}
                            placeholder="Type here" className={`input w-full bg-transparent`}></input>
                    </div>
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
    )
}

export default Step_1