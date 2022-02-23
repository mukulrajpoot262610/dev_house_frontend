import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Head>
        <title>DevHouse</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <div className="min-h-screen w-full flex justify-center items-center bg-black text-white">
        <Navbar />

        <section className="mt-20 w-9/12 flex items-center">
          <div className="w-full lg:w-2/3 z-30">
            <h1 className="text-5xl lg:text-7xl font-black">Find and Listen <br /> your favorite</h1>
            <h1 className="text-5xl lg:text-7xl font-black text-green-500">developer here</h1>

            <p className="my-8 text-xl w-full lg:w-2/3">The best audio website communicate a feel and make it easy for visitors to discover developers</p>

            <Link href="/login" passHref>
              <button className='btn bg-black border-green-500 text-green-500 hover:bg-white'>Get Started</button>
            </Link>
          </div>
          <div className="w-1/3 hidden lg:block">
            <Image src="/logo.svg" height={600} width={700} objectFit="cover" alt="" />
          </div>
        </section>

      </div>

    </main>
  )
}