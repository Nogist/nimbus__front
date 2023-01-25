import React, { useState } from 'react';
import Image from "next/image";
import noImage from "../../assets/images/no-image.jpg"

function GalleryCard(props) {
    const { galleryImg={noImage}, deleteBtnActive, inView, handleImgOnClick, handleImgOnDelete, id } = props;
    const [ image, setImage ] = useState(galleryImg);
     

    const handleOnClick = (id) =>{
        handleImgOnClick(id);
    }
    const handleOnDelete = (id) =>{
        handleImgOnDelete(id);
    }
    const handleError = () =>{
        setImage(noImage);
    }
    return (
        <div key={props.key} className={`col-span-1 w-full relative h-72 md:h-80 lg:h-96 overflow-hidden ${!deleteBtnActive && "cursor-pointer"}`}>
            <svg style={{display: deleteBtnActive ? "block" : "none"}} onClick={handleOnDelete.bind(null, id)} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-charity-color2 bg-white rounded-full absolute right-6 top-6 z-50 hover:animate-pulse duration-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <div className='w-full h-full relative group'>
                <Image src={image} alt="gallery" layout="fill" className={`object-cover group-hover:${!deleteBtnActive && "scale-110"} duration-700`} priority={inView} onClick={handleOnClick.bind(null, id)} onErrorCapture={handleError} />
            </div>
        </div>
    )
}

export default GalleryCard;