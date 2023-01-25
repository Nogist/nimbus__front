import React,{ useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongLeft,CgArrowLongRight } from "react-icons/cg";
import { BrandData } from './brandData';
import Image from "next/image";

function Brand() {

    const [ numOfSlideToShow, setNumOfSlideToShow ] = useState(5);

    const Card = ({style}) =>{
        return(
            <div className={`md:h-60 h-48 absolute left-2/4 drop-shadow-brandCard rounded-3xl text-primary10 text-center bg-white ${style}`}>
                <div className="bg-brandQuote bg-no-repeat bg-110px bg-center w-full h-full flex justify-center items-center px-12">
                    <p className=" text-base sm:text-base md:text-xl">We are committed to helping you build meaningful interaction and topnotch digital brand communications with customers everywhere and everytime.</p>
                </div> 
            </div>
        )
    }

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
        <div className="flex justify-center absolute cursor-pointer text-3xl items-center bottom-15% right-2/4 -mr-10 hover:scale-110">
            <i className="landing-page-image-nav" onClick={onClick}>{<CgArrowLongRight />}</i>
        </div>
        );
    }
        
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="flex justify-center absolute cursor-pointer text-3xl items-center bottom-15% left-2/4 -ml-10 hover:scale-110">
                <i onClick={onClick}>{<CgArrowLongLeft />}</i>
            </div>
        );
    }

    const handleResize = () => {
        if (window.innerWidth <= 530) {
          setNumOfSlideToShow(1);
        }
        else if (window.innerWidth <= 700) {
            setNumOfSlideToShow(2);
          }
        else if (window.innerWidth <= 920) {
          setNumOfSlideToShow(3);
        }

        else if (window.innerWidth <= 1240) {
          setNumOfSlideToShow(4);
        }
        else {
            setNumOfSlideToShow(5);
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: numOfSlideToShow,
        slidesToScroll: 1,
        centerPadding: "60px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [handleResize]);

  return (
    <div className="pt-20 w-full bg-bgGradient">
        <div className="mx-auto w-330 sm:w-350 px-2 sm:px-0 text-center pb-10">
            <h1 className="text-3xl md:text-4xl text-primary6 font-bold">Trusted by Agencies & Popular brands</h1>
        </div>
         <div className="relative w-full h-350">
            <Card style="w-330 ml-165 md:w-500 md:ml-250 z-40" />
            <Card style="top-1 w-320 ml-160 md:w-490 md:ml-245 z-30" />
            <Card style="top-2 w-310 ml-155 md:w-480 md:ml-240 z-20" />
        </div>
       <div className="overflow-hidden text-center relative">
            <div className="pb-10">
                <Slider {...settings}>
                    {BrandData.map((brand, index)=>{
                        return(
                            <div key={index} className="mb-7">
                                <div className="text-center rounded-lg m-1 p-2 relative w-24 h-16 mx-auto">
                                    <Image src={brand.image} alt="Digital out-of-home Advertising Agency in Nigeria" priority={true} className='object-contain transform hover:scale-110 cursor-pointer mx-auto' objectFit='contain' layout='fill' />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div> 
  )
}

export default Brand;