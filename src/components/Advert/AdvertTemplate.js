import React, { useState } from 'react'
import digitalScreen from "../../assets/images/servicesImg/digitalScreen.JPG";
import ceilingDangler from "../../assets/images/servicesImg/ceilingDangler.jpg";
import escalator from "../../assets/images/servicesImg/guerillaAdvertising.png";
import cinemaAd from "../../assets/images/servicesImg/cinemaAd.png";
import kios from "../../assets/images/servicesImg/kios.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import { IoIosCall } from 'react-icons/io';
import parse from 'html-react-parser';

function AdvertTemplate({data}) {

    const About = ({ header, content }) =>{
        return(
            <div className='w-full md:w-2/4 pb-10 cursor-default'>
                <div className='mx-auto w-90 sm:w-4/5 group'>
                    <div className=" h-2 bg-white w-28 group-hover:w-2/4 duration-500"></div>
                    <div className="">
                        <h1 className="text-yellow-400 pt-2 pb-4 text-xl sm:text-2xl font-semibold">{header}</h1>
                        {
                            content.map((data, index) =>{
                                return(
                                    <p key={index} className='text-white pb-4 text-lg text-justify md:text-left'>{parse(data)}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    const Card = ({ header, text, img }) =>{
        return(
            <div className="w-full md:w-2/4 lg:w-1/3 px-3 py-7">
                <div className="shadow-xl">
                    <div className='relative w-full h-300 sm:h-350 shadow-lg '>
                       <Image src={img} layout="fill" objectFit='cover' alt="Shopping Mall Advertising Agency in Nigeria" className='hover:scale-110 duration-500' priority={true} /> 
                    </div>
                </div>
                <div className='pt-5 text-center'>
                    <h1 className='text-xl font-bold text-primary2'>{header}</h1>
                    {/* <p className='text-black text-base md:text-lg'>{parse(text)}</p> */}
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="h-[calc(100vh_-_5rem)] mt-20 w-full relative">
                <div className='w-full h-full relative'>
                    <Image src={data.backgroundImg} alt="Shopping Mall Advertising Agency in Nigeria" layout='fill' objectFit='cover' priority={true}/>
                </div>
                <div className="bg-white w-90 md:w-85 lg:w-9/12 xl:w-3/5 ml-45% md:ml-42.5% lg:ml-37.5% xl:ml-30_% py-10 pl-7 pr-7 md:pl-10 md:pr-16 lg:pl-14 lg:pr-20 text-white flex justify-center items-center absolute left-2/4 -bottom-32 md:-bottom-20 shadow-2xl z-40">
                    <div className=" w-full px-0 md:px-0 text-justify md:text-left">
                        <h1 className=' text-primary2 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold pb-5 text-center md:text-left'>{data.title}</h1>
                        {
                            data.adText.map((data, index) =>{
                                return(
                                    <p key={index} className=" text-gray-600 text-lg font-medium pb-5">{parse(data)}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bg-primary2 relative">
                <div className="w-90 sm:w-85 md:w-90 lg:w-85 xl:w-4/5 mx-auto flex flex-wrap pt-56 pb-28">
                    {
                        data.aboutData.map((data, index) =>{
                            return(
                                <About key={index} header={data.header} content={data.content} />
                            )
                        })
                    }
                </div>
                <Link href="/outdoor-advertising">
                    <a className="bg-yellow-400 text-black hover:scale-110 duration-500 w-3/5 sm:w-72 md:w-96 h-14 sm:h-20 rounded-40 cursor-pointer justify-center flex items-center text-xl lg:text-2xl font-bold absolute left-2/4 ml-30_% sm:-ml-36 md:-ml-48 -bottom-7">
                    <i className='text-2xl lg:text-4xl font-extrabold pr-3'>{<IoIosCall />}</i>
                        BOOK A CALL
                    </a>
                </Link>
            </div>
            <div className='bg-white py-24'>
                <div className='w-85 md:w-4/5 lg:w-85 xl:w-4/5 mx-auto flex flex-wrap'>
                    {
                        data.cardData.map((data, index) =>{
                            return(
                                <Card key={index} text={data.content} header={data.title} img={data.img}/>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default AdvertTemplate