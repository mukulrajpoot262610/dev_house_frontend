import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main>
            <Head>
                <title>DevHouse</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>

            <div className="min-h-screen w-full flex justify-center items-center bg-black text-white flex-col">
                <Image src="/not_found.svg" height={500} width={600} alt="" objectFit='cover' />
                <Link href="/" passHref>
                    <button className='btn bg-black border-gray-600 hover:text-black hover:bg-white'>Go Back</button>
                </Link>
            </div>

        </main>
    )
}

export default NotFound