import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import slide1 from "../../assets/images/Slides/slide7.png";
import slide2 from "../../assets/images/Slides/slide3.png";
import slide3 from "../../assets/images/Slides/tecnoNightIg.jpeg";
import slide4 from "../../assets/images/Slides/slide8.png";


import { Carousel } from 'react-responsive-carousel';
import Overlay from "../../components/customComponents/Overlay";
import Typewriter from 'typewriter-effect';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import ContactBtn from '../customComponents/ContactBtn'

function LandingPageSlider() {

    const Images = [
        slide1,
        slide2,
        slide3,
        slide4
    ];

    const container = {
        hidden:{
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                staggerChildren: 0.5,
                delayChildren: 0.5
            }
        }
      };
   
    
    return (
        <div className="h-[calc(100vh_-_5rem)] min-h-660 mt-20 w-full relative">
            <div className='w-full h-full flex justify-center items-center relative'>
                <div className='text-white text-center absolute z-50 md:w-95'>
                <motion.div
                    initial="hidden"
                    animate={"visible"}
                    variants={container}
                    >
                    <h1 className="text-white text-3xl md:text-5xl font-semibold sm:font-bold leading-normal">
                        <Typewriter
                            options={{
                                strings: [
                                    "Be Where Your Customers Are", 
                                    "Reach Over 1.5 Million People Across All Platforms Monthly",
                                    "We Are the Leading Digital Out-of-home Advertising Company in Nigeria",
                                    "Engage Your Audiences with Digital Outdoor Advertising Where They are Most Relaxed"
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    
                    <p className="mx-auto font-normal w-85 md:w-700 md:text-xl mb-7 text-sm pt-7">With our outstanding digital out-of-home advertising opportunities, you are directly in the face of your target audience.</p> 
                    </motion.div>
                    <div className="">
                        <Link href="/about/#opportunities" scrollSmooth>
                            <button className=" bg-primary4 rounded-40 w-48 py-4 text-lg hover:scale-110 duration-300">Explore</button>
                        </Link>
                    </div>
                    <div className="text-center flex items-center justify-center">
                        <Link href="#whoWeAre" scrollSmooth>
                            <a className='animate-bounce rounded-full w-10 mt-10 h-10 text-primary2 bg-gradient-to-r from-primary5 to-primary1 text-center text-3xl flex items-center justify-center'>
                                <i className=''>{<IoIosArrowDown />}</i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-full w-full z-40 absolute top-0'>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}
                    showArrows={false}
                    stopOnHover={false}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                >
                {
                    Images.map((image, index)=>{
                        return(
                            <div key={index} className="h-[calc(100vh_-_5rem)] min-h-660 relative">
                                <Image src={image} alt="Digital out-of-home Advertising Agency in Nigeria" objectFit='cover' layout='fill' priority />
                            </div>
                        )
                    })
                }
                    
                </Carousel>
            </div>
            <Overlay position="absolute" zIndex="z-45" />
            <ContactBtn />
        </div>
    )
}

export default LandingPageSlider;