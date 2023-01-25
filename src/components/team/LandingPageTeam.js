import React from 'react'
import Link from "next/link";
import Image from "next/image";
import teamImage from "../../assets/images/nimbusTeamImage.png";

function LandingPageTeam() {
  return (
    <div className="bg-background-logo bg-repeat bg-110px relative text-center pt-12 pb-20 sm:py-20 bg-white">
        <div className='absolute w-full h-full opacity-70 top-0 bg-primary11'></div>
        <div className='relative z-60'>
            <div className="pt-12 lg:pb-5 px-12">
                <h1 className='m-0 text-4xl font-bold text-primary6 pb-5'>Our Team</h1>
                <div className='mx-auto w-full sm:w-490 px-2 lg:px-0 lg:w-500 sm:pb-4'>
                    <p className='text-primary10 text-xs sm:text-base'>We are a team of experts working collaboratively to empower you with opportunities to reach your customers and grow your bottom line</p>
                </div>
            </div>
            <div className="w-full">
                <div className="mx-auto h-40 sm:h-60 lg:h-80 w-11/12 sm:w-85 relative">
                    <Image objectFit='contain' layout='fill' src={teamImage} alt="Digital out-of-home Advertising Agency in Nigeria" priority={true}/>
                </div>
            </div>
            <div className="pt-3 sm:pt-10">
                <Link href="/team">
                    <button className="border-2 bg-primary2 text-gray-50 rounded-40 w-40 h-14 border-primary2 hover:scale-110 duration-500 z-10 text-base sm:text-lg">View Full Profile</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default LandingPageTeam