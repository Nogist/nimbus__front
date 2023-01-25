import React from 'react'
import { MdClose } from "react-icons/md";
import Image from "next/image";

function TeamBio(props) {
  return (
    <div className="fixed top-2/4 left-2/4 w-90 md:w-700 h-550 bg-white z-110 ml-45% md:ml-350 mt-275">
        <div className="h-10 flex justify-end items-center pr-10 top-0 relative left-0 w-full text-xl bg-primary13">
            <i onClick={props.onClick} className='hover:scale-105 hover:text-black text-white cursor-pointer'>{<MdClose />}</i>
        </div>
        <div className="block sm:flex justify-center px-3 sm:px-0 w-full py-5 sm:py-10 h-[calc(100%_-_80px)] overflow-auto">
            <div className="w-full h-44 sm:h-full flex sm:w-2/4 justify-start sm:justify-center items-center">
                <div className='w-44 sm:w-4/5 h-full relative'>
                    <Image src={props.image} alt="team-img" className='contain' objectFit='cover' layout="fill" priority={true} />
                </div>
            </div>
            <div className="w-full sm:w-2/4 sm:overflow-auto py-5 px-3 sm:pr-7">
                <div>
                    <h1 className="text-xl font-medium">{props.name}</h1>
                    <p className="team-position">{props.position.includes("DIRECTORS") ? "DIRECTOR" : props.position}</p>
                    <p className="pt-2 text-justify leading-7">{props.content}</p>
                </div>
            </div>
        </div>
        <div className="bottom-0 left-0 bg-primary13 w-full h-10 flex justify-end items-center">
        </div>
    </div>
  )
}

export default TeamBio;