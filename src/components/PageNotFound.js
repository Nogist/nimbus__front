import React, { useEffect } from 'react'
import Link from "next/link";
export default function PageNotFound() {

    useEffect(()=>{
        window,scrollTo(0,0)
    },[])
  return (
    <>
        <div className='bg-white h-screen w-full flex justify-center items-center'>
            <div className='text-center font-medium'>
                <h1 className='text-6xl pb-3'>404</h1>
                <p  className='text-xl pb-3'>Ooops!!</p>
                <p className='pb-5'>THAT PAGE DOESNT EXIST OR IS UNAVAILABLE.</p>
                <Link href="/">
                    <a className='bg-charity-color2 text-gray-50 rounded-md py-3 px-4 cursor-pointer border-2 border-charity-color2 hover:bg-white hover:text-charity-color2'>
                        Go Back to Home
                    </a>
                </Link>
            </div>
        </div>
    </>
  )
}
