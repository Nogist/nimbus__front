import React, {useState, useRef, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

function ImageModal(props) {
    const sliderRef = useRef();
    const [ gallery, setGallery ] = useState([])
    const [ slideIndex, setSlideIndex ] = useState({
        oldSlide: 0,
        activeSlide: 0
    })
    const handleNextClick = () => sliderRef?.current?.slickNext();
    const handlePrevClick = () => sliderRef?.current?.slickPrev();
    
    function SampleNextArrow({gallery}) {
        return (
            <div className={`absolute rounded-full bg-gradient-to-r from-primary5 to-primary1 w-10 h-10 top-2/4 right-2 text-center flex justify-center items-center cursor-pointer z-10 -mt-10 mr-4 ${slideIndex.activeSlide === gallery.length - 1 && "pointer-events-none opacity-25" }`} onClick={handleNextClick} onKey>
                <i className="relative text-2xl cursor-pointer text-primary2" >{<IoIosArrowForward />}</i>
            </div>
        );
    }
          
    function SamplePrevArrow(props) {
        return (
            <div className={`absolute rounded-full bg-gradient-to-r from-primary5 to-primary1 w-10 h-10 top-2/4 left-2 text-center flex justify-center items-center cursor-pointer z-10 -mt-10 ml-4 ${slideIndex.activeSlide === 0 && "pointer-events-none opacity-25"}`} onClick={handlePrevClick}>
                <i className="relative text-2xl cursor-pointer text-primary2" >{<IoIosArrowBack />}</i>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
        nextArrow: <SampleNextArrow gallery={gallery}/>,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) =>
            setSlideIndex({
                oldSlide: current,
                activeSlide: next
            })
    }
    
    useEffect(() =>{
        setGallery(props.gallery);
        sliderRef.current.slickGoTo(props.index);
        const track = document.addEventListener('keydown', function(e) {
            if (e.code === 'ArrowLeft') {
                handlePrevClick();
            }
            else if (e.code === 'ArrowRight') {
                handleNextClick();
            }
        });
        return () => document.removeEventListener('keydown', track);
    },[]);
    return (
        <div className='h-650 fixed top-2/4 left-2/4 ml-50 mt-325 z-90 w-full bg-transparent'>
            <Slider ref={sliderRef}  {...settings}>
                { 
                    gallery !== 0 &&
                    gallery.map((data) =>{
                        return(
                            <div className='w-full h-650 relative'>
                                <Image src={data.imageUrl} objectFit="contain" layout='fill' alt="backdrop" priority/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ImageModal
