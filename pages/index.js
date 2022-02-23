import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Head>
        <title>DevHouse</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <div className="h-screen w-full flex justify-center items-center bg-black">
        <Navbar />
      </div>

    </main>
  )
}