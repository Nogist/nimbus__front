import React, { useEffect, useContext} from 'react'
import logo from "../assets/images/NIMBUS_WHITE_LOGO.png";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";
import { AuthContext } from '../context/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import Head from 'next/head'

function AdminLayout(props) {
    const router = useRouter();
    const { query, pathname } = useRouter();
    const {section} = query;
    const {isUserAuthenticated} = useContext(AuthContext);

    const handleLogout = () =>{
        localStorage.clear();
        router.push("/admin");
    }
    useEffect(() => {
        // checks if the user is authenticated
        isUserAuthenticated()
        ? router.push(`${props.pathname}/${props.section}`)
        : router.push("/admin")
       }, []);
  return (
    <>
        <Head>
            <title>Nimbus Admin</title>
            <link rel="icon" href="../originalNimbusIcon48x48.png" />
        </Head>
        <div className='w-full flex h-screen overflow-auto'>
       <div className='w-1/5 bg-primary2 h-full top-0'>
        <div className='w-4/5 mx-auto h-full relative'>
            <div className=' flex h-56 items-start justify-start pt-6'>
                <div className='flex items-center'>
                    <Image src={logo} alt="NimbusMediaLogo" className="signin-header-logo cursor-pointer" width={100} height={100} objectFit="contain" />
                    <h1 className='text-white font-bold text-4xl pl-3'>Admin</h1>
                </div>
            </div>
            <div className='flex flex-col text-white text-lg font-semibold'>
                <Link href="/admin/aid-project">
                    <a className={`py-4 hover:text-primary3 px-3 rounded-lg ${props.pathname === "/admin/aid-project" ? "text-primary2 bg-white" : ""}`}>Aid Project</a>
                </Link>
                <Link href="/admin/nominee-details">
                    <a className={`py-4 hover:text-primary3 px-3 rounded-lg ${props.pathname.includes("/admin/nominee-details")  ? "text-primary2 bg-white" : ""}`}>Nominee Details</a>
                </Link>
                <Link href="/admin/gallery">
                    <a className={`py-4 hover:text-primary3 px-3 rounded-lg ${props.pathname === "/admin/gallery" ? "text-primary2 bg-white" : ""}`}>Gallery</a>
                </Link>
                <Link href="/admin/profile">
                    <a className={`py-4 hover:text-primary3 px-3 rounded-lg ${props.pathname === "/admin/profile" ? "text-primary2 bg-white" : ""}`}>Team Profile</a>
                </Link>
                <Link href="/admin/ranking-system">
                    <a className={`py-4 hover:text-primary3 px-3 rounded-lg ${props.pathname === "/admin/ranking-system" ? "text-primary2 bg-white" : ""}`}>Ranking System</a>
                </Link>
            </div>
            <div className='absolute left-0 bottom-0 pb-4'>
                <button onClick={handleLogout} className={`py-4 hover:text-primary3 px-3 rounded-lg text-white text-lg font-semibold flex items-center`}>
                <span className='mr-2 text-xl'><BiLogOut/></span>Logout
            </button>
            </div>
        </div>
       </div>
       <div className='w-4/5 h-screen overflow-auto'>
        {
            props.children
        }
       </div> 
    </div>
    </>
    
  )
}

export default AdminLayout