import React from 'react'
import Image from 'next/image';
import logo from "../../assets/images/logo/aidProjectLogo.png";
import slide1 from "../../assets/images/Slides/aidprojectSlide1.jpg";
import slide2 from "../../assets/images/Slides/aidprojectSlide2.jpg";
// import slideImgPortrait from "../../assets/images/Slides/aidProjectImgPortrait.jpg";
// import slideImgLandscape from "../../assets/images/Slides/aidProjectImgLandscape.jpg";
// import slideImgNormal from "../../assets/images/Slides/aidProjectImgNormal.jpg";

import slideImgXXL from "../../assets/images/Slides/aidProjectImg273X1536.jpg";
import slideImgXL from "../../assets/images/Slides/aidProjectImg1920X1080.jpg";
import slideImgL from "../../assets/images/Slides/aidProjectImg1366X766.jpg";
import slideImgMD from "../../assets/images/Slides/aidProjectImg1080X1920.jpg";
import slideImgSquare from "../../assets/images/Slides/aidProjectImgSquare.png";

import techCabalLogo from  "../../assets/images/techcabal.png";
import lsetfLogo from  "../../assets/images/lsetf.png";
import atpLogo from "../../assets/images/logo/atp.png"
import dhiLogo from "../../assets/images/logo/dhi.png"
import foodcliqueLogo from "../../assets/images/logo/foodclique.png"
import mdsfLogo from "../../assets/images/logo/mdsf.png"
import siddiqahLogo from "../../assets/images/logo/siddiqah.png"
import strapandsafeLogo from "../../assets/images/logo/strapandsafe.png"
import womanImage from "../../assets/images/womanImage.png";
import parse from 'html-react-parser';
import { AiOutlineShop, AiOutlineRise } from 'react-icons/ai';
import { GiShakingHands } from 'react-icons/gi';
import { MdOutlineMenuBook } from 'react-icons/md'
import { BsShop, BsArrowRightShort } from 'react-icons/bs';
import { FaHandHoldingHeart, FaHandshake, FaPrayingHands } from 'react-icons/fa'
import { BsBarChartFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import NomineeForm from './NomineeForm';
import HeaderCard from './HeaderCard';
import { ImpactCard } from './ImpactCard';
import { useEffect, useState } from 'react';

function NimbusAidProject() {
    
    
    const size  = useWindowSize()
    const Images = [
        slide1,
        slide2,
        size.width > 2000 ? slideImgXXL : size.width<2000 && size.width >= 1000  ? slideImgL :  size.width <1000 &&  size.width >=650 ? slideImgSquare : slideImgMD
    ];

    const aboutData = [
        "Since its launch in 2016, the Nimbus Aid Project has supported businesses and non-profit organisations committed in educating, enabling, and empowering their communities.",
        "The Nimbus Aid Project, formerly known as \"Nominate A Charity,\" is part of Nimbus Media Ltd's commitment to giving back to the community and society.",
        "Every year, Nigerians are invited to nominate a non-profit organisation that has demonstrated a dedication in educating, enabling, and empowering their communities. A winner is selected via social media and rewarded with marketing and awareness support on Nimbus digital screens across Nigeria."
    ]

    const ImpactData = [
        {
            text: "Increased awareness about their causes.",
            icon: <BsBarChartFill />
        },
        {
            text: "A marked increase in their volunteer base.",
            icon: <IoIosPeople />
        },
        {
            text: "A rise in donations and support.",
            icon: <AiOutlineRise />
        },
        {
            text: "New opportunities for partnerships and sponsorships.",
            icon: <GiShakingHands />
        },

    ]

    const BenefitData = [
        {
            text: "N2 million in outdoor advertising on Nimbus digital screens across Nigeria."
        },
        {
            text: "Amplification and mentions via digital and media outreach campaigns linked to the Nimbus Aid Project."
        },
        {
            text: "Brand and key personnel profiles in Nimbus Aid Project press release."
        },
        {
            text: "Opportunity to present their brands to public and private sector headers at the \"Nimbus at 10\" event."
        },
        {
            text: "Post-event content for their digital channels"
        },

    ]
    const pastBeneficiariesData = [
        {
            img: mdsfLogo,
            headerText: "Morainbow Down-Syndrome Foundation:",
            text: " An organisation on a rescue mission to save persons with Down syndrome through designed individualised programs, advocacy and inclusion"
        },
        {
            img: atpLogo,
            headerText: "Ask the Pediatrician:",
            text: "An organisation dedicated to promoting the health and well-being of all children worldwide, particularly in Nigeria, using online health education platforms and offline community medical outreach."
        },
        {
            img: siddiqahLogo,
            headerText: "Siddiqah Street Kitchen:",
            text: "A mobile street kitchen, moving from slums to slums feeding the less privileged regardless of religion, tribe or race. The goal is to unite people through feeding."
        },
        {
            img: dhiLogo,
            headerText: "Doctor’s Health Initiative (DHI) Nigeria:",
            text: "An NGO that offers free medical and counselling services to vulnerable and underserved communities with a particular focus on women and children."
        },
        {
            img: foodcliqueLogo,
            headerText: "Food Clique Support Initiative:",
            text: "A Non-Governmental Organisation striving to end hunger."
        },
        {
            img: strapandsafeLogo,
            headerText: "Strap and Safe Charity:",
            text: "Strap & Safe Child Foundation is a not-for-profit organisation that advocates the importance of Child Safety on the Road, at Home, and in School."
        }

    ]

    const Icon = ({text, icon=""}) =>{
        return(
            <div className='text-white text-center w-full sm:w-2/4 lg:w-1/3 py-4'>
                <i className='font-black text-5xl inline-block'>{icon}</i>
                <p className='text-sm'>{text}</p>
            </div>
        )
    }

    const About = ({ aboutData }) =>{
        return(
            <div className='w-full py-20'>
                <div className='flex flex-col lg:flex-row items-center w-full lg:w-4/5 mx-auto lg:h-550'>
                    <div className='w-full lg:w-2/5 h-full flex items-center justify-center lg:justify-end'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-aidProjectColor2 font-black'>About</h1>
                    </div>
                    <div className='w-full lg:w-3/5 relative h-600 md:h-550 lg:h-full hidden xs:flex'>
                        <div className='bg-white xs:bg-gray-100 shadow-lg w-85 md:w-600 lg:w-500 xl:w-600 h-500 md:h-420 lg:h-500 xl:h-400 absolute rounded-sm top-2/4 left-2/4 lg:left-0 ml-42.5% md:ml-_300 lg:ml-10 xl:ml-20 mt-250 md:mt-210 lg:mt-250 xl:mt-_200 flex items-center justify-center z-20'>
                            <div className='px-8'>
                                {
                                aboutData.map((data, index) =>{
                                    return(
                                        <p key={index} className={`text-gray-600 text-base lg:text-lg font-meduim leading-8 ${aboutData.length - 1 !== index ? "pb-5" :""}`}>{parse(data)}</p>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div className='bg-aidProjectColor1 w-85 md:w-600 lg:w-500 xl:w-600 h-500 md:h-400 lg:h-500 xl:h-400 absolute top-2/4 left-2/4 lg:left-0 ml-40% md:ml-275 lg:ml-16 xl:ml-105 mt-275 md:mt-225 lg:mt-275 xl:mt-225 z-10 hidden xs:block'></div>
                    </div>
                    <div className='flex xs:hidden pt-5'>
                        <div className='px-8 text-justify'>
                            {
                            aboutData.map((data, index) =>{
                                return(
                                    <p key={index} className={`text-gray-600 text-base lg:text-lg font-meduim leading-7 ${aboutData.length - 1 !== index ? "pb-5" :""}`}>{parse(data)}</p>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const PastBeneficiariesCard = ({beneficiary}) =>{
        return(
            <div className='w-full lg:w-2/4 py-5'>
                <div className='flex flex-col xs:flex-row w-full lg:w-95 mx-auto'>
                    <div className='w-250 xs:w-300 h-24 xs:mx-0 relative mb-2 text-center'>
                        <Image src={beneficiary.img} objectFit="contain" layout='fill' alt="logo" />
                    </div>
                    <div className=' text-gray-600 text-center xs:text-left w-full xs:w-[calc(100%_-_30px)]'>
                        <p className='font-semibold text-lg mb-2'>{beneficiary.headerText}</p>
                        <p className=' text-center xs:text-justify'>{beneficiary.text}</p>
                    </div>
                </div>
            </div>
        )
    }

    const Beneficiaries = () =>{
        return(
            <>
                <div className="bg-aidProjectColor1 relative">
                    <div className=" w-full md:w-70 mx-auto flex flex-wrap py-28">
                        <div className='text-center w-full text-white px-5 lg:px-0'>
                            <h1 className='font-bold text-4xl md:text-5xl'>Beneficiaries</h1>
                            <p className='mx-auto w-full lg:w-700 text-base md:text-lg pt-4'>The initiative's purpose is to incorporate the following categories into the Nimbus Aid Project, making them eligible to participate in the program and reap its advantages.</p>
                        </div>
                        <div className='flex flex-wrap items-center w-4/5 md:w-full mx-auto pt-10'>
                            <Icon icon={<AiOutlineShop />} text="PRE-SEED TECH STARTUPS"/>
                            <Icon icon={<MdOutlineMenuBook />} text="EDUCATIVE BODIES"/>
                            <Icon icon={<FaPrayingHands />} text="NGOs"/>
                            <Icon icon={<FaHandshake />} text="UNDER-REPRESENTED UNIONS"/>
                            <Icon icon={<BsShop />} text="SMALL BUSINESSES"/>
                            <Icon icon={<FaHandHoldingHeart />} text="CHARITABLE ORGANIZATIONS"/>
                        </div>
                    </div>
                </div>
                <div className="bg-white relative">
                    <div className="w-70 xs:w-4/5 xl:w-70 mx-auto flex flex-wrap pt-28 pb-28">
                        <div className='text-center w-full'>
                            <h1 className='font-bold text-4xl md:text-5xl text-aidProjectColor2'>Past Beneficiaries</h1>
                        </div>
                        <div className='flex flex-wrap items-center justify-start w-full mx-auto xs:pt-10'>
                        {
                            pastBeneficiariesData.map((beneficiary) =>{
                                return(
                                    <PastBeneficiariesCard beneficiary={beneficiary}/>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Impact = () =>{
        return(
            <>
                <div className='w-full bg-aidProjectColor1 py-24 lg:py-20'>
                    <div className='w-85 2xl:w-70 mx-auto items-center text-white'>
                        <div className='text-left w-full pb-5'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-black'>Impact</h1>
                        </div>
                        <div className='w-full text-xl'>
                            <p className='pb-3 text-base xs:text-lg'>Through the support of the Nimbus Aid Project, beneficiary organisations have seen:</p>
                            <ul className='list-none list-inside text-base xs:text-lg'>
                            {
                                ImpactData.map((data, index) => {
                                    return(
                                        <ImpactCard text={data.text} icon={data.icon} key={index}/>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-28'>
                    <div className='w-85 2xl:w-70 mx-auto flex items-center'>
                        <div className={`w-full lg:w-3/5 lg:pr-12 2xl:pr-10`}>
                            <h1 className='text-4xl xs:text-5xl md:text-6xl 2xl:text-7xl text-aidProjectColor2 font-black pb-7'>THE NIMBUS AID PROJECT 2022</h1>
                            <div className=' text-base xs:text-lg lg:text-xl text-justify text-gray-600'>
                                <p className='leading-8'>
                                    According to the Global Entrepreneurship Monitor, Nigeria has the most 
                                    female entrepreneurs globally. However, women-led businesses in Nigeria are 
                                    disproportionately affected by the socioeconomic issues threatening the 
                                    country's SMEs.
                                </p>
                                <p className='leading-8'>
                                    To mark the 10th anniversary of Nimbus Media Ltd, the Nimbus Aid Project is 
                                    expanded this year. It will support 10 women-led pre-seed tech startups and 
                                    SMEs with over N20m in marketing support and brand awareness. 
                                    The 10 companies announced as winners will receive N2 million each in 
                                    outdoor advertising to support their awareness and brand-building efforts.
                                </p>
                            </div>
                        </div>
                        <div className={`w-2/5 h-600 hidden lg:flex justify-end relative`}>
                            <div className='w-350 h-550 absolute left-2/4 top-2/4 ml-175 mt-275 z-20 shadow-xl rounded-xl bg-white scale-105'>
                                <Image src={womanImage} layout="fill" objectFit='cover' />
                            </div>
                            <div className='bg-aidProjectColor1 h-550 w-350 z-10 absolute left-2/4 top-2/4 ml-150 mt-_300'>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Partners = () =>{
        return(
            <div className='w-full bg-white py-20 drop-shadow-lg'>
                <div className=' w-4/5 lg:w-3/5 mx-auto'>
                    <h1 className='text-4xl lg:text-5xl text-center text-aidProjectColor2 font-black pb-10'>Our Partners</h1>
                    <div className='w-full flex items-center justify-center'>
                    {
                        [techCabalLogo, lsetfLogo].map((data) => {
                            return(
                                <div className='w-2/4 text-center'>
                                    <div className='relative w-32 h-16 lg:w-200 lg:h-44 mx-auto'>
                                        <Image src={data} layout="fill" alt="parnter_logo" objectFit='contain' />
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }

    const Benefits = () =>{
        return(
            <div className='bg-aidProjectColor1 py-20'>
                <div className='w-85  mx-auto text-white'>
                    <h1 className='text-4xl md:text-5xl text-center font-black pb-10'>How Winners Will Benefit</h1>
                    <div className='text-xl'>
                        <ul className='list-disc text-base xs:text-lg'>
                        {
                            BenefitData.map((data, index) => {
                                return(
                                    <ImpactCard text={data.text} key={index}/>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const StepCard = ({disableArrow, step, text, content}) =>{

        return(
            <>
            <div className='w-1/3 relative flex items-center justify-around py-6'>
                <div className='w-4/5'>
                    <div className='font-black text-8xl text-primary2'>{step}</div>
                    <div>
                        <p className='py-4 text-primary3 text-lg font-semibold'>{text}</p>
                        <div className="h-2px w-12 bg-primary2 rounded-md"></div>
                    </div>
                    <div className='pt-5'>
                        <p className='text-gray-400 text-base'>{content}</p>
                    </div>
                </div>
                <div className='h-full'>
                    <div className={`rounded-full bg-primary2 w-10 h-10 flex justify-center items-center top-2/4 -mt-5 mr-10 right-0 ${disableArrow ? "hidden" : "block"}`}>
                        <i className='text-white font-semibold'><BsArrowRightShort /></i>
                    </div>
                </div>
            </div>
            </>
        )
    }

    // const HowToVote = () =>{
    //     return(
    //         <div className="bg-white relative">
    //             <div className="w-90 sm:w-85 md:w-90 lg:w-85 xl:w-3/5 mx-auto flex flex-wrap py-28">
    //                 <div className='text-left w-full text-primary2'>
    //                     <h1 className='font-bold text-4xl'>How to vote</h1>
    //                     <p className='w-700 text-lg pt-4'>How to Vote in 4 steps</p>
    //                 </div>
    //                 <div className='flex flex-wrap items-center justify-between w-full mx-auto pt-10'>
    //                     <StepCard step={1} text="Nomination Starts" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." disableArrow={false}/>
    //                     <StepCard step={2} text="Collation of Top Three Nominees" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." disableArrow={false}/>
    //                     <StepCard step={3} text="Top Three Nominees Voting" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." disableArrow={true}/>
    //                     <StepCard step={4} text="Winner is Decided" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." disableArrow={true}/>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <>
            <HeaderCard images={Images} logo={logo}/>
            {/* <NomineeForm />  */}
            <About aboutData={aboutData} />
            <Beneficiaries />
            <Impact />
            <Benefits />  
            <Partners />
            
        </>
    )
}

export default NimbusAidProject;

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}