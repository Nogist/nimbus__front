import React, { useContext, useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import CharityImage from "../../assets/images/nimbusCharityImage3.png";
import { AidProjectContext } from '../../context/AidProjectContext';
function Charity() {

    const { countDownDetails, getCountDown } = useContext(AidProjectContext);
    const { ref, inView } = useInView({
        threshold: 0,
    });
    
    useEffect(() =>{
        const interval = setInterval(getCountDown() , 5000);
        return(() =>{
            clearInterval(interval);
        })
    },[]);

  return (
    <>
        <div className="bg-primary4 relative">
            {/* <img className="background-image2 object-contain" src={HeaderBackGroundImage3} alt=""/> */}
            <div className='lg:w-70 w-4/5 xs:w-4/5 sm:w-70 mx-auto'>
                <div className="relative text-center pt-20">
                    <div className='w-full sm:w-fit mx-auto'>
                        <div className="relative h-4 w-350 bg-primary9 mx-auto hidden sm:block">
                            <h1 className="text-charity-color1 text-4xl font-bold -top-6 -left-3 absolute">Nimbus Aid Project</h1>
                        </div>
                        <h1 className="text-charity-color1 text-3xl font-bold block sm:hidden">Nimbus Aid Project</h1>
                    </div>
                    {/* <img className="background-image1 object-contain" src={HeaderBackGroundImage1} alt=""/> */}
                </div>
                <div className={`flex flex-col md:flex-row md:block lg:flex relative py-12 px-0`} ref={ref}>
                    <div className={`${inView ? "opacity-100 duration-1000 scale-100" : "opacity-0 duration-1000 scale-50"} w-45 relative pt-3 pr-7 lg:pr-5 pb-10  md:pb-5 lg:pb-0 float-none md:float-left block lg:float-none`}>
                    {/* <img className="background-image3" src={HeaderBackGroundImage1} alt=""/>
                    <img className="background-image5" src={HeaderBackGroundImage5} alt=""/>
                    <img className="background-image6" src={HeaderBackGroundImage6} alt=""/>
                    <img className="background-image7" src={HeaderBackGroundImage7} alt=""/>
                    <img className="background-image4" src={HeaderBackGroundImage4} alt=""/> */}
                    <div className='w-72 h-72 lg:w-400 lg:h-400 left-2/4 -ml-36 md:-ml-0 md:left-0 inline-block absolute z-20 overflow-hidden group rounded-md'>
                        <Image objectFit="cover" layout='fill' priority={true} src={CharityImage} alt="Digital out-of-home Advertising Agency in Nigeria" className='group-hover:scale-110 duration-700'/>
                    </div>
                    
                    
                    {/* <div className="charity-image">
                        <ReactPlayer width="100%" height="100%" controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div> */}
                    <div className="mt-11 md:mt-12 lg:mt-16 -ml-24 md:ml-12 lg:ml-16 w-64 h-64 left-2/4 lg:w-350 lg:h-350 rounded-br-100 bg-charity-color1 md:float-right md:static absolute z-10 hidden xs:block">
                    </div>
                    
                    </div>
                    <div className={`${inView ? "opacity-100 duration-1000 scale-100" : "opacity-0 duration-1000 scale-50"} pb-10 pl-0 xl:pl-8 md:pl-5 mt-72 md:mt-0 text-justify text-white w-full`}>
                        <p className='text-lg leading-10 pb-7'>Since its launch in 2016, the Nimbus Aid Project has supported businesses and non-profit organisations committed in educating, enabling, and empowering their communities.</p>
                        <p className='text-lg leading-10 pb-7'>The Nimbus Aid Project, formerly known as "Nominate A Charity," is part of Nimbus Media Ltd's commitment to giving back to the community and society.</p>
                        <p className='text-lg leading-10'>Every year, Nigerians are invited to nominate an organisation that has demonstrated a dedication to educating, enabling, and empowering their communities. A winner is selected via public voting and rewarded with marketing and awareness support on Nimbus digital screens across Nigeria...
                            <Link href="/nimbus-aid-project">
                                <a className="charity-btn text-lg underline cursor-pointer">read more</a>
                            </Link>
                        </p>
                    </div>
                </div>
                {
                    countDownDetails.button === "on" && 
                    <div className="charity-btn-wrapper w-full text-center pt-3 pb-16">
                        <Link href="/vote">
                            <a className="charity-btn font-bold text-brand-color1 hover:bg-brand-color1 bg-charity-color1 hover:text-charity-color1 py-4 rounded-3xl px-10 text-lg">Vote Now</a>
                        </Link>
                    </div>
                } 
            </div>
        </div>
       
        
    </>
  )
}

export default Charity