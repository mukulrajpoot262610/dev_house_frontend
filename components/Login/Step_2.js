import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import { verifyOtp } from '../../services/apiClient'

const Step_2 = ({ otp, setOtp, setError, error, setActiveTab }) => {

    const dispatch = useDispatch()
    const { phone, hash } = useSelector(state => state.auth.otp)

    const handleNext = async (e) => {
        e.preventDefault()

        if (!otp) {
            return setError({ ...error, otp: true })
        }

        try {
            const { data } = await verifyOtp({ otp, phone, hash })
            dispatch(setAuth(data))
            console.log(data)
        } catch (err) {
            setError({ ...error, otp: true, msg: err?.response?.data?.msg })
        }
    }

    const handleBack = () => {
        setOtp("")
        setError({ otp: false, phone: false })
        setActiveTab(1)
    }


    return (
        <div className="card w-96 lg:border border-gray-600">
            <div className="card-body">
                <Image src="/logo.svg" height={80} width={70} objectFit="contain" alt="" />
                <h2 className="card-title text-4xl">OTP</h2>
                <p className='mb-8 text-gray-400'>Continue with mobile number to reach number of developers waiting for you!</p>
                <form onSubmit={handleNext}>
                    <label className='label'>
                        <span className="label-text  text-white">Your One-Time-Verification Code</span>
                    </label>

                    <input type="number" className={`input input-bordered ${error.otp ? "border-red-500" : "border-gray-600"} w-full bg-transparent`} onChange={(e) => {
                        setOtp(e.target.value)
                        setError({ ...error, otp: false })
                    }}
                        placeholder="Type here"></input>

                    {
                        error.otp && <label className="label">
                            <span className="label-text text-red-500">{error.msg ? error.msg : "OTP is required!"}</span>
                        </label>
                    }
                    <div className="justify-end card-actions mt-2">
                        <button className='btn bg-black border-gray-600 hover:text-black hover:bg-white' onClick={handleBack} >Go Back</button>
                        <button type='submit' className='btn bg-black border-gray-600 hover:text-black hover:bg-white'>Verify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Step_2