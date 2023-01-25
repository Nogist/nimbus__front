import React from 'react'
import Link from 'next/link'

function ServicesFooter() {
  return (
    <div className='w-full bg-charity-color2 py-10 text-center'>
        <h1 className='text-white text-4xl pb-2'>Need Visibility</h1>
        <Link href="/contact-us">
            <button className="text-brand-color1 rounded-3xl h-14 bg-charity-color1 w-48 font-bold text-3xl">Reach Out</button>
        </Link>
    </div>
  )
}

export default ServicesFooter