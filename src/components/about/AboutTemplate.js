import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import parse from 'html-react-parser';
import img from "../../assets/images/Slides/slide1.png";

function AboutTemplate({title, contentData, imageData, picture, _id, websiteURL}) {
    const router = useRouter()

    const [isReadMore, setIsReadMore] = useState(true);

    let listKeys = Object.keys(contentData.list);
    const handleIconOnClick = (id) =>{
        router.push(`/gallery/${id}`);
    }

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
        <div className="w-85 mx-auto py-12">
            <div className="text-lg">
                <h3 className=" text-brand-color1 opacity-80 font-bold text-xl cursor-pointer text-center xl:text-left block xl:hidden">{title}</h3>
                <div className="w-full flex flex-col xl:flex-row justify-center sm:justify-between min-h-380">
                    <div className='flex-grow flex flex-col md:flex-row w-90 xl:w-4/5 order-2 xl:order-1 mx-auto'>
                        <div className='w-full sm:w-400 md:w-2/5 xl:w-35% mx-auto md:m-0 group relative h-56 md:h-380 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl md:rounded-tr-none md:rounded-bl-none md:rounded-tl-40 md:rounded-br-40 overflow-hidden'>
                            <Image src={picture} objectFit="cover" layout='fill' className='group-hover:scale-110 duration-500' priority={true}/>
                        </div>
                        <div className="md:w-3/5 xl:w-65% w-full order-2 xl:order-1 text-primary3 md:pl-7 flex-grow pt-7 md:pt-0">
                            <div className='h-full'>
                                <h3 className="text-brand-color1 opacity-80 font-extrabold text-xl text-center pb-3 lg:text-left hidden xl:block">{title}</h3>
                                {
                                    contentData?.para.map((data,index) =>{
                                        return(
                                            <p key={index} className="lg:w-9/12 w-full leading-8 text-justify pb-3 text-lg">
                                                {parse(data)}
                                                {
                                                index === contentData.para.length - 1 &&
                                                <span onClick={toggleReadMore} className="text-primary2 cursor-pointer">
                                                    {isReadMore && "...more details"}
                                                </span>
                                                }
                                            </p>
                                        )
                                    })
                                }
                                {!isReadMore &&
                                <>
                                    <h3 className='text-brand-color1 opacity-80 font-bold text-lg md:text-xl pt-4 pb-3'>{contentData.listHeader}:</h3>
                                    <ul className="list-none">
                                    {
                                        listKeys?.map((key, index) =>{
                                            return(
                                                <li key={index} className=" list-disc list-outside ml-4 pl-2 pb-3 text-lg">
                                                    <b>{key}:</b> {contentData.list[key]}
                                                    {
                                                        index === listKeys.length-1 &&
                                                        <span onClick={toggleReadMore} className="text-primary2 cursor-pointer">
                                                        {!isReadMore && "...show less"}
                                                        </span>
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="text-brand-color1 w-full sm:w-4/5 xl:w-1/5 order-1 xl:order-2 flex xl:flex-col flex-row flex-grow xl:justify-center items-center justify-evenly mx-auto xl:m-0 py-6 xl:py-0">
                    {
                        imageData?.map((data,id) =>{
                            return(
                                <div key={id} className="text-center my-4 cursor-pointer duration-300 hover:scale-110 px-3" onClick={handleIconOnClick.bind(null, data.path)}>
                                    <div className='w-12 h-7 relative inline-block'>
                                        <Image src={data.img} layout="fill" alt="Outdoor Advertising Agency in Lagos, Nigeria" objectFit='contain' priority={true} />
                                    </div>
                                    <p className="font-bold text-xs md:text-base">{data.imgTitle}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        <hr className="border-b-2 border-brand-color3 w-11/12 m-auto"/>
        </>
    )
}

export default AboutTemplate;
