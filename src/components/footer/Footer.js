import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/images/NIMBUS_WHITE_LOGO.png";
import { AiOutlineTwitter,AiFillInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import SSL_Image from "../../assets/images/ssl_image.png";


function Footer() {

    const IconData = [
        {
            id: 0,
            url: "https://twitter.com/NimbusMediaNG",
            icon: <AiOutlineTwitter />
        },
        {
            id: 1,
            url: "https://www.facebook.com/nimbusNG/",
            icon: <FaFacebook />
        },
        {
            id: 2,
            url: "https://www.instagram.com/nimbusmediang/",
            icon: <AiFillInstagram />
        },
        {
            id: 3,
            url: "https://www.linkedin.com/company/nimbus-media-limited/",
            icon: <GrLinkedin />
        }
    ]

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const Icon = ({ url, icon }) =>{
        return(
            <i className='px-4 cursor-pointer' onClick={openInNewTab.bind(null, url)}>{icon}</i>
        )
    }
    return (
        <div className='w-full bg-primary4 text-white'>
            <div className='bg-primary8 py-6 justify-center items-center hidden md:flex'>
                <div className='flex items-center'>
                    <p className=''>Would you love to explore our advertising possibilities?</p>
                    <Link href="/contact" >
                        <button className="bg-transparent rounded-3xl border ml-6 border-white w-36 py-3 hover:bg-white hover:text-primary8 cursor-pointer">Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className='w-full text-sm'>
                <div className='text-center pt-5'>
                    <Link href="/">
                        <Image src={logo} alt="nimbus_media_logo" className="object-cover cursor-pointer" width={100} height={80} />
                    </Link>
                </div>
                <div className='flex justify-center items-center py-4'>
                    {
                        IconData.map((icon, index) =>{
                            return(
                                <Icon key={index} url={icon.url} icon={icon.icon} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center py-5 md:py-7 text-sm lg:text-base">
                    <div className="flex justify-center items-start py-3 md:items-center md:py-4 lg:py-0 px-4 md:px-6">
                        <i className='mt-1 md:mt-0 mr-2'>{<HiMail />}</i>
                        <i className='text-center md:text-left not-italic'>wale@nimbus.com.ng</i>
                    </div>
                    <div className="flex justify-center items-start py-3 md:items-center md:py-4 lg:py-0 px-4 md:px-6">
                        <i className='mt-1 md:mt-0 mr-2'>{<IoLocationSharp />}</i>
                        <i className='text-center md:text-left not-italic'>Nimbus Media Limited, 16, Igbasan Street, Opebi, Ikeja, Lagos.</i>
                    </div>
                    <div className="flex justify-center items-start py-3 md:items-center md:py-4 lg:py-0 px-4 md:px-6">
                        <i className='mt-1 md:mt-0 mr-2'>{<MdPhone />}</i>
                        <i className='text-center md:text-left not-italic'>(+234)-706-327-4951</i>
                    </div>
                </div>
                <div className="w-full text-center">
                    <div className='text-center'>
                        <Image src={SSL_Image} className="object-contain cursor-pointer" width={100} height={80} alt="SSL Certificate" />
                    </div>
                    <p className='pb-7 text-sm'>COPYRIGHT NIMBUS MEDIA 2022 - <a href='/cookie-policy' target='_blank' rel='noreferrer noopener' className='underline'>TERMS & CONDITIONS  PRIVACY POLICY</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer