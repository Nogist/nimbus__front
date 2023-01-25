import React,{ useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import {useRouter} from 'next/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { SliderData } from "./aboutData";
import aboutImage2 from "../../assets/images/aboutImage3.png"
import ReactPlayer from 'react-player'
import parse from 'html-react-parser';
import { useInView } from 'react-intersection-observer';

function About() {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
    });

    const router = useRouter();

    const [numOfSlideToShow,setNumOfSlideToShow] = useState(3);
    
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <button className="absolute rounded-full w-10 h-10 top-2/4 sm:-right-0 -right-12 -mt-10 mr-4 flex justify-center items-center z-10 bg-gradient-to-r from-primary5 to-primary1" onClick={onClick}>
              <i className="text-primary2 text-2xl" >{<IoIosArrowForward />}</i>
          </button>
        );
    }
          
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button className="absolute rounded-full w-10 h-10 top-2/4 sm:left-0 -left-12 -mt-10 ml-4 flex justify-center items-center z-10 bg-gradient-to-r from-primary5 to-primary1" onClick={onClick}>
                <i className="text-primary2 text-2xl" >{<IoIosArrowBack />}</i>
            </button>
        );
    }

    const handleResize = () => {
      if (window.innerWidth <= 530) {
        setNumOfSlideToShow(1);
      }
      else if (window.innerWidth <= 800) {
        setNumOfSlideToShow(1);
      }
      else if (window.innerWidth <= 990) {
        setNumOfSlideToShow(2);
      }
      else if (window.innerWidth <= 1024) {
        setNumOfSlideToShow(2);
      }
      else if (window.innerWidth <= 1240) {
        setNumOfSlideToShow(2);
      }
      else {
          setNumOfSlideToShow(3);
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
    }

    useEffect(()=>{
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const AboutCard = ({headerText, text, textAlign, order1, order2, children}) =>{
      return(
        <div className={`flex flex-col lg:flex-row items-start justify-center w-full py-8`}>
          <div className={`w-full lg:w-auto ${order1}`}>
            <div className='w-280 h-300 sm:w-350 sm:h-350 rounded-2xl mx-auto group lg:m-0 overflow-hidden relative'>
              {children}
            </div>
          </div>
          <div className={`text-white text-justify pr-5 pt-1 ${order2}`}>
              <h1 className={`text-2xl ${textAlign} text-center pt-5 lg:pt-0 pb-3 font-semibold`}>{headerText}</h1>
              <p className='text-lg leading-10'>{parse(text)}</p>
          </div>
        </div>
      )
    }

    const handleImgOnClick = (path) =>{
        router.push(`/gallery/${path}`)
      }

    const OurWorks = () =>{
      return(
        <div className="pb-10 pt-20 px-10 w-full" id="whoWeAre">
           <div className="text-center">
                <h1 className="m-0 font-bold text-4xl text-primary6">Some of Our Works</h1>
                <div className="mx-auto w-full px-4 sm:px-0 sm:w-80">
                  <p className="text-about-p-color pt-4 m-0">We offer out-of-home advertising, branding and activation consultancy.</p>
                </div>
            </div>
            <div className="pt-12 pb-16">
                <Slider {...settings}>
                  { 
                    SliderData?.length !== 0 &&
                    SliderData?.map((image, index) =>{
                      return( 
                        <div key={index} className="text-center rounded-2xl">
                            <div className='rounded-3xl w-280 sm:w-330 h-60 overflow-hidden group inline-block relative shadow-xl'>
                                <Image className="cursor-pointer transform duration-700 group-hover:scale-110" src={image.images} alt="Digital out-of-home Advertising Agency in Nigeria" layout='fill' objectFit='cover' onClick={handleImgOnClick.bind(null, image.path)}/>
                            </div>
                            <div className="py-2">
                                <h1 className="text-primary3 font-bold text-3xl">{image.title}</h1>
                            </div> 
                        </div>
                    
                      )
                    })
                  }
                </Slider>
            </div>
        </div>
      )
    }

    const WhoWeAre = () =>{
      return(
        <div className="py-24 px-5 sm:px-10 w-full" id="whoWeAre">
           <div className="w-full xs:w-90 sm:w-70 lg:w-85 2xl:w-70 mx-auto flex flex-col lg:flex-row justify-center items-center">
              <div className="text-right w-full lg:w-2/4 h-full hidden lg:block">
                <div className='lg:h-14'>
                  <h1 className="m-0 font-bold text-6xl text-primary2 pr-3 h-14">Who</h1>
                </div>
                <div>
                  <h1 className="m-0 font-bold text-6xl text-primary2">We Are ?</h1>
                </div>
              </div>
              <div className='block text-center lg:hidden'>
                <h1 className='font-bold text-4xl text-primary2'>Who We Are?</h1>
              </div>
              <div className="px-0 sm:px-4 w-full lg:w-2/4 group cursor-default">
                <div className="flex flex-col">
                  <div className="h-14 relative hidden lg:block">
                    <div className="bg-yellow-400 h-2 w-32 group-hover:w-2/4 duration-500 absolute bottom-0 left-0 ml-5"></div>
                  </div>
                  <div className='text-center'>
                    <h3 className="text-about-p-color pt-3 lg:pt-2 m-0 lg:pl-5 lg:text-justify text-base sm:text-lg">An outdoor media and advertising agency based in Lagos with a network of digital out-of-home advertising platforms across the country which we deploy to improve reach, visibility and engagement for our customers.</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }

    const AboutUs = () =>{
      return(
        <div className='w-full bg-primary4 py-10'>
          <div className={`${true ? "opacity-100 scale-100 duration-1000" : "opacity-0 scale-50 duration-1000"} mx-auto w-4/5 sm:w-70 lg:w-4/5 2xl:w-3/5`}>
            <AboutCard 
              text="All-round out-of-home advertising solutions which include branding, brand activation, consultancy and OOH advertising on billboard, lampost, shopping malls, superstores, street, road shows, digital OOH media, etc." 
              headerText="WHAT WE DO" 
              order1="order-1 lg:pr-5" 
              order2="order-2 pl-3"
              textAlign="lg:text-left"
            >
              <ReactPlayer 
                width="100%" 
                height="100%" 
                controls 
                url="https://www.youtube.com/watch?v=0Eo7S7PCWuI" 
                className="rounded-3xl"
              />
            </AboutCard>
            <AboutCard 
              text='We are the leading <a href="https://www.acquisio.com/blog/agency/dooh/" target="_blank" rel="noreferrer noopener" className="text-white underline cursor-pointer">digital out-of-home advertising</a> agency in Nigeria with a network of outdoor advertising media nationwide and portfolio of projects for customers in all sectors across traditional OOH advertising platforms.'
              headerText="WHY WORK WITH US" 
              order1="order1 lg:order-2 lg:pl-5"
              order2="order-2 lg:order-1 pr-3"
              textAlign="lg:text-right"
            >
              <Image 
                src={aboutImage2} 
                alt="Digital out-of-home Advertising Agency in Nigeria" 
                className="cursor-pointer transform duration-700 group-hover:scale-110" 
                objectFit="cover"
                layout="fill" 
              />
            </AboutCard>
          </div>
        </div>
      )
    }

    return (
      <>
        <WhoWeAre />
        <AboutUs />
        <OurWorks />
      </>
        
    )
}

export default About;