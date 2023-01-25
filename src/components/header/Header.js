import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoMdArrowDropdown } from "react-icons/io";
import SideNav from './SideNav';
import { useRouter } from 'next/router';
import logo from "../../assets/Nimbus_Logo.png"

function Header() {
    const [ dropdownStatus, setDropdownStatus ] = useState(false);
    const [ servicesDropdownStatus, setervicesDropdownStatus ] = useState(false);
    const [ sideNavIsActive, setSideNavIsActive ] = useState(false);

    const { pathname } = useRouter();

    const handleSideNav = () =>{
        setSideNavIsActive(!sideNavIsActive);
    }

    useEffect(()=>{
        window,scrollTo(0,0)
    },[])
    return (
        <>
            <div className='w-full fixed top-0 left-0 h-20 z-80 flex items-center bg-primary1'>
                <div className="mx-auto w-11/12 xl:w-full flex justify-between xl:justify-evenly items-center relative">
                    <Link href="/">
                        <Image src={logo} alt="NimbusMediaLogo" className="object-contain cursor-pointer" width={100} height={60} /> 
                    </Link>
                    <div className='hidden xl:block'>
                        <ul className='flex item-center text-primary3 justify-evenly font-semibold text-xl'>
                            <li className="px-7 flex items-center">
                                <Link href="/">
                                    <a className={`hover:text-primary2 ${((pathname === "/home") || (pathname === "/")) ? "border-b-4 border-primary2 rounded" : ""}`}>Home</a>
                                </Link>
                            </li>
                            <li className="px-7 flex items-center">
                                <a className={`relative py-2 hover:text-primary2 flex items-center`} onMouseLeave={() => { setDropdownStatus(false)}} onMouseEnter={() =>{ setDropdownStatus(true)}}>
                                    <a className={`flex cursor-default ${((pathname === "/about") || (pathname === "/team")) ? "border-b-4 border-primary2 rounded" : ""}`}>
                                        About
                                        <span className='ml-2 mt-1 text-2xl'>
                                            <IoMdArrowDropdown style={{ transition: "all 0.2s linear" , transform: dropdownStatus ? "rotateX(180deg)" : "rotateX(0deg)" }}/>
                                        </span>
                                    </a>
                                    <div className={`${dropdownStatus ? "h-32" : "h-0"} w-64 absolute cursor-pointer left-0 top-10 text-white bg-primary2 flex flex-col justify-center items-center text-center rounded-sm shadow-2xl overflow-hidden duration-300 transition-all ease-in-out text-lg`}>
                                        <Link href="/about">
                                            <a className='py-4 w-full hover:scale-90 duration-700'>Our Network</a>
                                        </Link>
                                        <hr className='border-b border-white w-full'/>
                                        <Link href="/team">
                                            <a className='py-4 w-full hover:scale-90 duration-700'>Full Team Profile</a>
                                        </Link>
                                    </div>
                                </a>
                            </li>
                            <li className="px-7">
                                <a className={`relative py-3 cursor-pointer hover:text-primary2 flex items-center`} onMouseLeave={() => { setervicesDropdownStatus(false)}} onMouseEnter={() =>{ setervicesDropdownStatus(true)}}>
                                    <Link href="/services">
                                        <a className={`flex ${((pathname === "/services/billboard-advertising") || (pathname === "/services/billboard-advertising")) ? "border-b-4 border-primary2 rounded" : ""}`}>
                                            Services
                                        <span className='ml-2 mt-1 text-2xl'>
                                            <IoMdArrowDropdown style={{ transition: "all 0.2s linear" , transform: servicesDropdownStatus ? "rotateX(170deg)" : "rotateX(0deg)" }}/>
                                        </span>
                                        </a>
                                    </Link>
                                    <div className={`${servicesDropdownStatus ? "h-96" : "h-0"} w-64 absolute left-0 top-12 text-white bg-primary2 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden duration-300 transition-all ease-in-out text-lg`}>
                                        <Link href="/services/billboard-advertising">
                                            <a  className='py-4 w-full hover:scale-90 duration-700'>Billboard Advertising</a>
                                        </Link>
                                        <hr className='border-b border-white w-full'/>
                                        <Link href="/services/lamp-post-advertising">
                                            <a  className='py-4 w-full hover:scale-90 duration-700'>Lamp Post Advertising</a>
                                        </Link>
                                        <hr className='border-b border-white w-full'/>
                                        <Link href="/services/shopping-mall-superstores">
                                            <a  className='py-4 w-full hover:scale-90 duration-700'>Shopping Mall Superstores</a>
                                        </Link>
                                        <hr className='border-b border-white w-full'/>
                                        <Link href="/services/transit-advertising">
                                            <a className='py-4 w-full hover:scale-90 duration-700'>Transit Advertising</a>
                                        </Link>
                                        <hr className='border-b border-white w-full'/>
                                        <Link href="/services/guerilla-advertising">
                                            <a className='py-4 w-full hover:scale-90 duration-700'>Guerilla Advertising</a>
                                        </Link>
                                        <hr className='border-b border-white w-full'/>
                                        <Link href="/services/brand-activation">
                                            <a className='py-4 w-full hover:scale-90 duration-700'>Brand Activation</a>
                                        </Link>
                                    </div>
                                </a>
                            </li>
                            <li className="px-7 flex items-center">
                                <Link href="/nimbus-aid-project">
                                <a className={` hover:text-primary2 ${pathname === "/nimbus-aid-project" ? "border-b-4 border-primary2 rounded" : ""}`}>Nimbus Aid Project</a>
                                </Link>
                            </li>
                            <li className="px-7 flex items-center">
                                <Link href="/gallery">
                                    <a className={` hover:text-primary2 ${pathname === "/gallery" ? "border-b-4 border-primary2 rounded" : ""}`}>Gallery</a>
                                </Link>
                            </li>
                            <li className="px-7 flex items-center">
                                <Link href="https://www.blog.nimbus.com.ng/">
                                    <a target="_blank" className={` hover:text-primary2 ${pathname === "/blog" ? "border-b-4 border-primary2 rounded" : ""}`}>Blog</a>
                                </Link>
                            </li>
                            <li className="px-7 flex items-center">
                                <Link href="/contact">
                                <a className={` hover:text-primary2 ${pathname === "/contact" ? "border-b-4 border-primary2 rounded" : ""}`}>Contact Us</a>
                                </Link>
                            </li>
                            {/* <li className="px-7 flex items-center">
                                <Link href="/outdoor-advertising">
                                <a className={` hover:text-primary2 ${pathname === "/outdoor-advertising" ? "border-b-4 border-primary2 rounded" : ""}`}>Book A Call</a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="cursor-pointer transition-all duration-500 ease-out inline absolute z-40 top-6 right-0 xl:hidden transform rotate-170" onClick={handleSideNav}>
                        <div className={`bg-primary2 w-7 h-1 transition-all duration-500 ease-out mb-1 transform ${sideNavIsActive && "rotate-45 translate-y-_7"}`}></div>
                        <div className={`bg-primary2 w-7 h-1 transition-all duration-500 ease-out mb-1 ${sideNavIsActive && "opacity-0"}`}></div>
                        <div className={`bg-primary2 w-7 h-1 transition-all duration-500 ease-out mb-1 transform ${sideNavIsActive && "-rotate-45 translate-y-_9"}`}></div>
                    </div>
                </div>
            </div>
            <SideNav sideNavIsActive={sideNavIsActive} handleBackDrop={handleSideNav}/>
        </>
    )
}

export default Header;