import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from "next/link";
import Overlay from '../customComponents/Overlay';
// import { MdHowToVote } from 'react-icons/md';

 const HeaderCard = ({ images, logo }) =>{
    const VoteNowBtn = () =>{
        return(
            <Link href="/nimbus-aid-project/#form">
                <i className=' h-12 w-28 rounded-40 bg-aidProjectColor1 border-2 border-aidProjectColor1 text-white flex justify-center items-center fixed bottom-3 right-3 z-60 shadow-2xl drop-shadow-2xl transform hover:scale-110 cursor-pointer animate-bounce duration-700 text-center'><p className='text-sm font-bold inline text-center not-italic px-1'>Submit Entry</p></i>
            </Link>
        )
    }
        return(
            <div className="h-[calc(100vh_-_5rem)] min-h-660 mt-20 w-full relative">
                
                <div className='h-full w-full z-40 absolute top-0'>
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={7000}
                        showArrows={false}
                        stopOnHover={false}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                    >
                    {
                        images.map((image, index)=>{
                            return(
                                <>
                                { index+1  !== images.length &&
                                    <div className='absolute z-50 w-full xl:w-2/4 h-full flex justify-center items-center bg-charity-color10'>
                                        <div className="">
                                            <div className="w-28 h-28 sm:w-44 sm:h-40 relative">
                                                <Image src={logo} layout="fill" objectFit='contain' />
                                            </div>
                                            <div className="text-primary4 text-5xl sm:text-6xl xl:text-7xl text-left font-black">
                                                <h1 className="my-3">THE NIMBUS</h1>
                                                <h1 className="mb-3">AID PROJECT</h1>
                                                <h1 className="mb-6">2022</h1>
                                            </div>
                                        </div>
                                    </div>
                                }
                                    <div key={index+1} className="h-[calc(100vh_-_5rem)] min-h-660 relative ">
                                        <Image src={image} alt="Nimbus Aid Project" objectFit='cover' layout='fill' priority />
                                    </div>
                                </>
                                
                            )
                        })
                    }
                    </Carousel>
                </div>
                <Overlay position="absolute" opacity="0" zIndex="z-45" />
                {/* <VoteNowBtn /> */}
            </div>
        )
    }

export default HeaderCard