import React from 'react'
import Image from "next/image";
import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

function ImageCard({onClick, image, name, position,  onDelete, onEdit, profileEdit }) {
  return (
    <div className="min-w-300 m-5 w-300">
        <div className="w-full h-400 relative overflow-hidden cursor-pointer group" onClick={onClick}>
            <Image src={image} alt="img" className='object-cover group-hover:scale-110 duration-700' layout='fill' priority={true}/>
            <div className="bg-primary12 flex justify-end items-center absolute bottom-0 right-0 w-full text-right h-28 pr-5 text-white">
                <div className="top-0">
                    <h1 className="text-xl m-0">{name}</h1>
                    <p className="text-xs m-0">{position.includes("DIRECTORS")? "DIRECTOR" : position}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between p-3 shadow-xl" style={{display: profileEdit ? "flex" : "none"}}>
                <button className="w-24 text-primary3 border-2 border-primary3 text-lg flex justify-center items-center h-10 px-1 rounded-40 hover:bg-primary3 hover:text-white" onClick={onDelete}><span><MdDeleteForever /></span>Delete</button>
                <button className='w-24 text-primary3 border-2 border-primary3 text-lg flex justify-center items-center h-10 px-1 rounded-40 hover:bg-primary3 hover:text-white' onClick={onEdit}><span><FaUserEdit /></span>Edit</button>
            </div>
    </div>
      
  )
}

export default ImageCard