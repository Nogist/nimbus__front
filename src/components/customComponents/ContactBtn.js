import React from 'react'
import Link from "next/link"
import { AiFillMessage } from 'react-icons/ai';
import {useRouter} from 'next/router';

function ContactBtn() {
    const { pathname } = useRouter();
    const splitLocation = pathname.split("/");
    
    return (
        (splitLocation[1] === "" || splitLocation[1] === "home") ?
        <Link href="contact" >
            <i className='h-16 w-16 rounded-full bg-charity-color1 text-color29 flex justify-center items-center fixed bottom-3 right-3 z-60 text-4xl shadow-xl transform hover:scale-110 cursor-pointer'><AiFillMessage /></i>
        </Link>
        :
        <Link href="/contact-us">
            <i className='h-16 w-16 rounded-full bg-charity-color1 text-color29 flex justify-center items-center fixed bottom-3 right-3 z-60 text-4xl shadow-xl transform hover:scale-110 cursor-pointer'><AiFillMessage /></i>
        </Link>
    )
}

export default ContactBtn;