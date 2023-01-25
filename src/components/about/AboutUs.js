import React,{useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../assets/images/nimbus_about_img.png";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "./coreValues";
import { Opportunities } from "./opportunities";
import AboutTemplate from "./AboutTemplate";
import { useRouter } from 'next/router'

function AboutUs() {

    const [numOfSlideToShow,setNumOfSlideToShow] = useState(4);
    const router = useRouter();

    const handleResize = () => {
        if (window.innerWidth <= 600) {
            setNumOfSlideToShow(1);
            }
            else if(window.innerWidth <= 1000){
                setNumOfSlideToShow(2);
            }
            else if(window.innerWidth <= 1400){
                setNumOfSlideToShow(3);
            }
            else {
                setNumOfSlideToShow(4);
        }
    }
    
    function SampleNextArrow(props) {
    const { onClick } = props;
    return (
    <div className="absolute rounded-full w-10 h-10 top-2/4 mr-15 mt-40 right-10px text-center flex justify-center items-center cursor-pointer z-10 bg-gradient-to-r from-primary5 to-primary1" onClick={onClick}>
        <i className="text-charity-color2 relative cursor-pointer text-2xl">{<IoIosArrowForward />}</i>
    </div>
    );
    }
    
    function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute rounded-full w-10 h-10 top-2/4 ml-15 mt-40 left-10px text-center flex justify-center items-center cursor-pointer z-10 bg-gradient-to-r from-primary5 to-primary1" onClick={onClick}>
            <i className="text-charity-color2 relative cursor-pointer text-2xl">{<IoIosArrowBack />}</i>
        </div>
    );
    }

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: numOfSlideToShow,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    useEffect(()=>{
        window.scrollTo(0, 0);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        
    }, []);

    // useEffect(() => {
    //     if(param === "opportunities"){
    //         myRef.current.scrollIntoView();
    //     }
    //     else if(param === undefined){
    //         window.scrollTo(0,0);
    //     }
    //     else{
    //         history.push("/404");
    //     }
    // },[])

    return (
        <>
            <div className="bg-gradient-to-b from-brand-color2 via-brand-color3 to-brand-color4 w-full py-7">
                <div className="w-85 mx-auto">
                    <h1 className="text-center font-black md:py-5 py-3 text-brand-color1 md:text-4xl text-2xl">
                    ABOUT US
                    </h1>
                    <div className="block xl:flex justify-between text-center md:m-0 m-auto md:w-full w-11/12">
                        <div className="w-full h-72 md:h-72 md:w-2/5 sm:block sm:float-left xl:h-400 xl:mr-0 md:mr-10 md:mb-0 mb-4 relative rounded-md overflow-hidden">
                            <Image src={aboutImage} className="" layout="fill" objectFit="cover"  alt="Outdoor Advertising Agency in Lagos, Nigeria" priority={true}/>
                        </div>
                        <div className="lg:font-normal text-lg md:leading-10 leading-8 w-full xl:w-3/5 xl:pl-14 md:text-left sm:m-0 mt-3 about-text-wrapper">
                            <p className="text-justify">Nimbus Media Limited is an <Link href="https://www.nimbus.com.ng/"><a target="_blank" className="text-brand-color1 underline">outdoor media and advertising agency</a></Link> based in Lagos, Nigeria. We specialize in boosting brand discovery and visibility through outdoor advertising media in high-traffic locations like shopping malls, superstores, as well as leveraging branding and activations to engage your target audience.</p>
                            <p className="text-justify">Our current network of outdoor advertising media platforms include Ikeja City Mall, Novare Mall Lekki, Festival Mall Festac, Jabi lake Mall Abuja, Novare gateway Abuja, Heritage mall Ibadan, Cocoa Mall Ibadan, Ado-Bayero Mall, Kano, and all Justrite stores in Nigeria.</p>
                            <p className="text-justify">We are on our way to building the largest digital out-of-home advertising network in Africa just for you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-32 px-10 pb-16 text-brand-color1">
                <div className="text-center">
                    <h1 className="font-bold text-3xl md:text-4xl pb-10">Our Core Values</h1>
                </div>
                <Slider {...settings}>
                            {Data?.map((data, index)=>{
                                return(
                                    <div key={index} className="p-5">
                                        <div className="h-40 w-60 relative mx-auto">
                                            <Image className="about-images" src={data.images} layout="fill" objectFit="contain" alt="Outdoor Advertising Agency in Lagos, Nigeria" priority={true}/>
                                        </div>
                                        <div className="pt-5 text-center">
                                            <h1 className="text-brand-color1 text-xl md:text-3xl font-bold">{data.title}</h1>
                                        </div> 
                                    </div>
                                )
                            })}
                </Slider>
            </div>
            <div className="w-full pt-10" id="opportunities">
            {
                Opportunities?.map((data,id) =>{
                    return(
                        <AboutTemplate key={id} title={data.title.toUpperCase()} contentData={data.content1} imageData={data.images} _id={id} websiteURL={data.websiteURL} picture={data.picture}/>
                    )
                })
            }
            </div>
        </>
    )
}

export default AboutUs