import React, { useState } from 'react'
import Link from 'next/link'
import Backdrop from '../customComponents/Backdrop'
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from 'next/router';

function SideNav({sideNavIsActive, handleBackDrop}) {

    const { pathname } = useRouter();
    const [ dropdownStatus, setDropdownStatus ] = useState(false);
    const [ servicesDropdownStatus, setServicesDropdownStatus ] = useState(false);
    
    const handleNavToggle = () =>{
        setDropdownStatus(!dropdownStatus);
    }
    const handleServiceToggle = () =>{
        setServicesDropdownStatus(!servicesDropdownStatus);
    }
  return (
      <>
        {
            sideNavIsActive &&
            <Backdrop handleBackDrop={handleBackDrop}/>
        }
        <div className={`${sideNavIsActive ? "w-4/5" : "w-0"} ${sideNavIsActive ? "sm:w-80" : "sm:w-0"} overflow-x-hidden transition-all duration-500 fixed z-110 xl:w-0 h-screen bg-primary1 left-0 top-0`}>
        <ul className='flex-col items-center min-w-300 text-primary3 font-medium text-xl'>
            <li className="border-b border-primary2 w-full">
                <Link href="/" className="" >
                    <a className={`hover:text-primary2 w-full px-9 py-5 block ${((pathname === "/home") || (pathname === "/")) ? "text-primary2" : ""}`}>Home</a>
                </Link>
            </li>
            <li className="border-b border-primary2">
                <div className='flex justify-between items-center'>
                    <a className={`relative cursor-pointer hover:text-primary2 px-9 py-5 w-4/5 justify-between items-center flex ${((pathname === "/about") || (pathname === "/team")) ? "text-primary2" : ""}`}>
                        About
                    </a>
                    <div className='w-1/5 flex justify-center items-center'>
                        <i className='text-xl text-white bg-primary2 rounded-md px-1px py-1px' onClick={handleNavToggle}>
                            <IoMdArrowDropdown style={{ transition: "all 0.2s linear" , transform: dropdownStatus ? "rotateX(180deg)" : "rotateX(0deg)" }}/>
                        </i>
                    </div>
                </div>
                <div className={`${dropdownStatus ? "h-32" : "h-0"} text-primary3 bg-white flex flex-col justify-center items-center rounded-sm w-full duration-500 transition-all ease-in-out overflow-hidden`}>
                    <Link href="/about">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/about" ? "text-primary2" : ""}`}>Our Network</a>
                    </Link>
                    <Link href="/team">
                        <a className={`w-full pl-14 py-5 block ${pathname === "/team" ? "text-primary2" : ""}`}>Full Team Profile</a>
                    </Link>
                </div>
            </li>
            <li className="border-b border-primary2">
                <div className='flex justify-between items-center'>
                    <Link href="/services">
                        <a className={`relative cursor-pointer hover:text-primary2 px-9 py-5 justify-between items-center w-4/5 flex ${(pathname === "/services") ? "text-primary2" : ""}`}>
                            Services
                        </a>
                    </Link>
                    <div className='w-1/5 flex justify-center items-center'>
                        <i className='text-xl text-white bg-primary2 rounded-md px-1px py-1px' onClick={handleServiceToggle}>
                            <IoMdArrowDropdown style={{ transition: "all 0.2s linear" , transform: servicesDropdownStatus ? "rotateX(180deg)" : "rotateX(0deg)" }}/>
                        </i>
                    </div>
                    
                </div>
                
                <div className={`${servicesDropdownStatus ? "h-96" : "h-0"} text-primary3 bg-white flex flex-col justify-center items-center rounded-sm w-full duration-500 transition-all ease-in-out overflow-hidden`}>
                    <Link href="/services/billboard-advertising">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/services/billboard-advertising" ? "text-primary2" : ""}`}>Billboard Advertising</a>
                    </Link>
                    <Link href="/services/lamp-post-advertising">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/services/lamp-post-advertising" ? "text-primary2" : ""}`}>Lamp Post Advertising</a>
                    </Link>
                    <Link href="/services/shopping-mall-superstores">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/services/shopping-mall-superstores" ? "text-primary2" : ""}`}>Shopping Mall Superstore</a>
                    </Link>
                    <Link href="/services/transit-advertising">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/services/transit-advertising" ? "text-primary2" : ""}`}>Transit Advertising</a>
                    </Link>
                    <Link href="/services/guerilla-advertising">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/services/guerilla-advertising" ? "text-primary2" : ""}`}>Guerilla Advertising</a>
                    </Link>
                    <Link href="/services/brand-activation">
                        <a className={`w-full border-b border-primary2 pl-14 py-5 block ${pathname === "/services/brand-activation" ? "text-primary2" : ""}`}>Brand Activation</a>
                    </Link>
                </div>
            </li>
            <li className="border-b border-primary2">
                <Link href="/nimbus-aid-project">
                 <a className={` hover:text-primary2 px-9 py-5 block ${pathname === "/nimbus-aid-project" ? "text-primary2" : ""}`}>Nimbus Aid Project</a>
                </Link>
            </li>
            <li className="border-b border-primary2">
                <Link href="/gallery">
                 <a className={` hover:text-primary2 px-9 py-5 block ${pathname === "/gallery" ? "text-primary2" : ""}`}>Gallery</a>
                </Link>
            </li>
            <li className="border-b border-primary2">
                <Link href="https://www.blog.nimbus.com.ng/">
                    <a target="_blank" className={`hover:text-primary2 px-9 py-5 block ${pathname === "/blog" ? "text-primary2" : ""}`}>Blog</a>
                </Link>
            </li>
            <li className="border-b border-primary2">
                <Link href="/contact">
                    <a className={`hover:text-primary2 px-9 py-5 block ${pathname === "/contact" ? "text-primary2" : ""}`}>Contact Us</a>
                </Link>
            </li>
            {/* <li className="border-b border-primary2">
                <Link href="/outdoor-advertising">
                    <a className={`hover:text-primary2 px-9 py-5 block ${pathname === "/outdoor-advertising" ? "text-primary2" : ""}`}>Book A Call</a>
                </Link>
            </li> */}
        </ul>
        </div>
      </>
    
  )
}

export default SideNav