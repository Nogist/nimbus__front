import React, { useState, useContext, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongLeft,CgArrowLongRight } from "react-icons/cg";
import SkeletonLoader from '../customElements/SkeletonLoader';
import { GalleryContext } from "../../context/GalleryContext";

function HomeGallery() {
    const { gallery, loadGallery, isLoading }  = useContext(GalleryContext);
    const [numOfSlideToShow,setNumOfSlideToShow] = useState(3);
    const [ centerModeStatus, setCenterModeStatus ] = useState(true);
    const [ imageIndex, setImageIndex ] = useState(0);

    const settings = {
        className: "center",
        dots: false,
        infinite: true,
        slidesToShow: numOfSlideToShow,
        slidesToScroll: 1,
        centerPadding: "60px",
        centerMode: centerModeStatus,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
        <div className="flex justify-center items-center absolute left-2/4 text-3xl -bottom-14 ml-3 z-45 hover:scale-110 cursor-pointer">
            <i className="landing-page-image-nav" onClick={onClick}>{<CgArrowLongRight />}</i>
        </div>
        );
    }
      
    function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="flex justify-center items-center absolute right-2/4 text-3xl -bottom-14 mr-3 z-45 hover:scale-110 cursor-pointer">
            <i className="landing-page-image-nav" onClick={onClick}>{<CgArrowLongLeft />}</i>
        </div>
    );
    }

    const handleResize = () => {
    if (window.innerWidth <= 530) {
        setNumOfSlideToShow(1);
        setCenterModeStatus(false);
    }
    else if (window.innerWidth <= 1024) {
        setNumOfSlideToShow(1);
        setCenterModeStatus(false);
    }
    else if (window.innerWidth <= 1240) {
        setNumOfSlideToShow(3);
        setCenterModeStatus(true);
    }
    else {
        setNumOfSlideToShow(3);
    }
    }

    useEffect(() =>{
    loadGallery();
    }, [])

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <div className='px-5 py-12'>
                <h1 className="py-2 m-0 font-bold text-center text-3xl md:text-4xl text-primary6">Our Gallery</h1>
                <div className='pt-10 pb-20 mx-auto w-300 sm:w-500 lg:w-full'>
                    <Slider {...settings}>
                        {
                        isLoading &&
                            [1,2,3,4].map((n,index) =>{ 
                            return( 
                                <div id={index} key={n} className={`${index === imageIndex ? "scale-110" : "scale-50"} mx-auto w-400 lg:w-full h-330 text-center transform`}>
                                    <SkeletonLoader />
                                </div>
                            )})
                        }
                        { 
                        gallery.length !== 0 &&
                        gallery.map((image, index) =>{
                            return(
                            index < 5 &&  
                            <div id={index} className={`${index === imageIndex ? "scale-110" : "scale-50"} duration-300 mx-auto w-400 lg:w-full h-330 text-center relative`}>
                                <Image objectFit='cover' layout='fill' priority={true} src={image.imageUrl} alt="Digital out-of-home Advertising Agency in Nigeria" className='transform duration-700 hover:scale-110 cursor-pointer'/>
                            </div>
                            )
                        })
                        }
                    </Slider>
                </div>
            <div className="text-center py-6">
                <Link href="/gallery">
                    <button className="border-2 rounded-30 bg-primary2 w-36 h-12 text-white hover:bg-white hover:text-primary2 hover:border-primary2">View More...</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeGallery;