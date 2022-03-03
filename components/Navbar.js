import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineLogout } from 'react-icons/hi'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { logout } from '../services/apiClient'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/authSlice'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const { isAuth, user } = useSelector(state => state.auth)

    const handleLogout = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
            router.replace('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <nav className='fixed top-0 w-full h-20 flex justify-center items-center z-50'>
            <div className='w-10/12 lg:w-9/12 flex justify-between items-center'>
                <Link href={isAuth ? "/rooms" : "/"} passHref>
                    <div className='flex text-white items-center gap-3 cursor-pointer'>
                        <Image src="/logo.svg" height={30} width={50} objectFit="cover" alt="" />
                        <h1 className='hidden lg:block text-2xl font-bold'>Dev<span className='text-green-400 font-black'>House</span></h1>
                    </div>
                </Link>
                {
                    isAuth ? <div className='dropdown dropdown-end'>
                        <div tabIndex="0" className="avatar flex items-center gap-2">
                            <div className="w-12 rounded-full border-2 border-green-500">
                                {
                                    user.image && <Image src={user?.image} height={50} width={50} objectFit="cover" alt="" />
                                }
                            </div>
                            <BsFillCaretDownFill />
                        </div>
                        <ul tabIndex="0" className="p-2 mt-3 shadow bg-black menu dropdown-content rounded-box w-52 border-gray-600 border">
                            <Link href="/account" passHref>
                                <li><a><CgProfile className='text-2xl' /> Profile </a></li>
                            </Link>
                            <li onClick={handleLogout}><a><HiOutlineLogout className='text-2xl' /> Logout</a></li>
                        </ul>
                    </div> : <Link href="/login" passHref>
                        <button className='btn btn-sm lg:btn-md bg-black border-white hover:bg-white hover:text-black'>Get Started</button>
                    </Link>
                }

            </div>
        </nav>
    )
}

export default Navbar