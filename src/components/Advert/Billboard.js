import React, { useState } from 'react'
import billboard1 from "../../assets/images/billboard/billboard1.jpeg";
import mainBillboard from "../../assets/images/billboard/billboard.jpeg";
import vinylBillboard from "../../assets/images/servicesImg/vinylBillboard.png";
import mobileAd from "../../assets/images/billboard/mobileAd.jpeg";
import staticBillboard from "../../assets/images/servicesImg/staticBillboard.png";
import Image from 'next/image';
import Link from 'next/link';
import { IoIosCall } from 'react-icons/io';
import parse from 'html-react-parser';

function Billboard() {


    const billboardata = [
        {
            header: "Billboard Advertising",
            content: [
                "Nimbus Media is the leading billboard<a href='https://nimbus.com.ng' target='_blank' rel='noreferrer noopener' className='text-white cursor-pointer underline'> advertising agency in Lagos </a> with an out-of-home media network in high traffic locations and shopping malls across Nigeria.",
                "We use large scale print and digital signages on billboards (or hoardings) to promote a brand, offering, or a campaign at strategic high traffic locations nationwide. This has proven to be very efficient in getting the most number of views and long-term brand impressions."
            ]
        },
        {
            header: "Why Billboard Advertising",
            content: [
                "Billboard advertising is an effective outdoor advertising strategy for building brand awareness and achieving maximum exposure for your business (services, product or campaign) to as many consumers as possible. ",
                "Because our billboards and digital signage are located in busy areas with high daily footfalls across Nigeria, they tend to have the highest number of views and impressions by actual human beings when compared to other marketing methods like digital advertising."
            ]
        },
        {
            header: "Cost of Billboard Advertising",
            content: [
                "Cost of <a href='https://media.timeout.com/images/105796548/image.jpg' target='_blank' rel='noreferrer noopener' className='text-white cursor-pointer underline'> billboard advertising in Nigeria </a> depends on the size of the OOH advertising media, daily traffic at the location and format (digital or static) of the ad placement. ",
                "For instance, the cost of billboard advertising in Ikeja City Mall will be different from Novare Mall, Lekki and Novare Gateway Mall in Abuja even for the same ad format due to variations in daily traffic and location of the media in the respective mall.",
                "We will review your advertising needs in line with your business objectives and advise on a suitable budget."
            ]
        },
        {
            header: "Who Needs Billboard Advertising",
            content: [
                "Banks, FMCG, Telecos, Tech Startups and any other businesses that need to improve awareness (brand, product or service), consumer actions or drive participation in certain marketing campaigns. Book a call with us today to understand how you can leverage billboard advertising to promote your brand or campaigns in high traffic locations across Nigeria."
            ]
        },
    ]
    const cardData = [
        {
            header: "Digital Billboards",
            img: billboard1,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            header: "Mobile Billboards",
            img: mobileAd,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            header: "Static Billboards",
            img: staticBillboard,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            header: "Vinyl Billboards",
            img: vinylBillboard,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]
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
                       <Image src={img} layout="fill" objectFit='cover' alt="Billboard Advertising Agency in Nigeria" className='hover:scale-110 duration-500' priority={true} /> 
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
                    <Image src={mainBillboard} alt="Billboard Advertising Agency in Nigeria" layout='fill' objectFit='cover' priority={true}/>
                </div>
                <div className="bg-white w-90 md:w-85 lg:w-9/12 xl:w-3/5 ml-45% md:ml-42.5% lg:ml-37.5% xl:ml-30_% py-10 pl-7 pr-7 md:pl-10 md:pr-16 lg:pl-14 lg:pr-20 text-white flex justify-center items-center absolute left-2/4 -bottom-32 md:-bottom-20 shadow-2xl z-40">
                    <div className=" w-full px-0 md:px-0 text-justify md:text-left">
                        <h1 className=' text-primary2 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold pb-5 text-center md:text-left'>Billboard Advertising</h1>
                        <p className=" text-gray-600 text-lg font-medium pb-5">Nimbus Media is the leading billboard advertising agency in Lagos with an out-of-home media network in high traffic locations and shopping malls across Nigeria.</p>
                        <p className='text-gray-600 text-lg font-medium pb-5'>We use large scale print and digital signages on billboards (or hoardings) to promote a brand, offering, or a campaign at strategic high traffic locations nationwide.</p>
                        <p className='text-gray-600 text-lg font-medium'>This has proven to be very efficient in getting the most number of views and long-term brand impressions.</p>
                    </div>
                </div>
            </div>
            <div className="bg-primary2 relative">
                <div className="w-90 sm:w-85 md:w-90 lg:w-85 xl:w-4/5 mx-auto flex flex-wrap pt-56 pb-28">
                    {
                        billboardata.map((data, index) =>{
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
                        cardData.map((data, index) =>{
                            return(
                                <Card key={index} text={data.content} header={data.header} img={data.img}/>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default Billboard