import React, { useState, useEffect } from 'react'
import backgroundImg from "../../assets/images/Slides/slide6.png";
import billboard from "../../assets/images/billboard.png";
import lampPost from "../../assets/images/servicesImg/lampPost.png";
import activation from "../../assets/images/servicesImg/activationImg.png";
import mall from "../../assets/images/servicesImg/digital.png";
import transitingAd from "../../assets/images/servicesImg/transitingAd.png";
import guerillaAdvertising from "../../assets/images/servicesImg/guerillaAdvertising.png"


import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

function Services() {

    const [isReadMore, setIsReadMore] = useState(true);
    
    const cardData  = [
        {
            headerText : "Deploying Impactful Messaging",
            content : [
                "Because of the strategic placement, size and location of out of home media, messages delivered through outdoor advertising proves very impactful as they are capable of easily getting the attention of consumers.",
                "As the leading <a href='https://www.nimbus.com.ng/' target='_blank' rel='noreferrer noopener' className='text-brand-color1 underline'>out of home advertising company</a> in Nigeria, we ensure that our clients' OOH campaigns cannot be ignored by target audiences. Compared to TV, radio, or mobile advertising which can be easily skipped or turned off, out of home ads stand out wherever we deploy them.",
                "We are constantly seeking new tools and ideas to launch highly visual, attention-grabbing OOH campaigns that help clients' messages cut through the clutter, as a result achieve optimal  brand discovery, top of mind awareness and consumer engagement."
            ]
        },
        {
            headerText : "Optimizing Location-based Targeting",
            content : [
                "Because out of home advertising is extremely location-driven, over the years, we have mastered the art of making the best use of high traffic locations and outdoor advertising media.",
                "With the help of DOOH and other advertising tech stacks, we have developed capabilities to do much more with location than many other out of home advertising companies in Nigeria.",
                "Similar to online marketing services being able to provide detailed insights and analytics into ad engagement and conversions, we provide digital out of home advertising that can measure not only demographics of audience segments at a particular location, but also ad impressions, peak periods among other insights that are useful for management decision-making. "
            ]
        },
        {
            headerText : "Leveraging Outdoor Media Network",
            content : [
                "In order to add more value to our clients, we continue to expand our network of out of home media platforms and locations across Nigeria through partnerships and resource-sharing.",
                "Currently, our outdoor advertising media network in Nigeria includes Ikeja City Mall, Novare Mall Lekki, Festival Mall Festac, Jabi Lake Mall Abuja, Novare gateway Abuja, Heritage mall Ibadan, Cocoa Mall Ibadan, Ado-Bayero Mall, Kano, and all Justrite stores in Nigeria.",
                "We are on our way to building the largest digital out-of-home advertising network across Africa to enable us to reach more target audiences with personalized messaging at the right locations and timing to achieve maximum brand visibility"
            ]
        },
    ]

    const servicesData = [
        {
            heading: "Billboard Advertising",
            content: "We use large scale print and <a href='https://www.feedough.com/what-is-billboard-advertising/' target='_blank' rel='noreferrer noopener' className='text-brand-color1 underline'>digital advertising boards</a> (or hoardings) to promote a brand, offering, or a campaign at strategic high traffic locations in Nigeria. This has proven to be very efficient in getting the most number of views and long-term brand impressions.",
            img: billboard,
            path: "/services/billboard-advertising"
        },
        {
            heading: "Lamp Post Advertising",
            content: "This is one of the most targeted outdoor advertising methods we use to ensure guaranteed exposure through small and compact billboards mounted on electric poles on road dividers along the main roads in major cities in Nigeria. The sequence of short impactful messages help drive conversions and top-of-mind awareness.",
            img: lampPost,
            path: ""
        },
        {
            heading: "Shopping Mall & Superstores",
            content: "We deploy creative ads in different sizes and formats in various parts of shopping malls and superstores that can give our client optimum brand visibility. Some of the placements we have in shopping malls and superstores across Nigeria include ceilings, tables, elevators, doors, kiosk, spectaculars, tabletops, digital signages, etc.",
            img: mall,
            path: ""
        },
        {
            heading: "Transit Advertising",
            content: "We leverage outdoor media platforms inside and outside public vehicles like buses, trains, subways, cabs and also in the transit terminals or bus stations to provide innovative out of home advertising solutions in Nigeria. Transit ads are often non-skippable and hard to ignore because they stay with the consumers through their journey which usually provokes engagement and virality.",
            img: transitingAd,
            path: ""
        },
        {
            heading: "Guerilla Advertising",
            content: "Depending on budget, we deploy novel and unconventional methods to boost sales or attract consumers’ interest in a brand or business. Our Guerilla initiatives are often low-cost as they inspire widespread use of personal interactions or viral social messaging techniques that keep audiences talking about our clients.",
            img: guerillaAdvertising,
            path: ""
        },
        {
            heading: "Brand Activation",
            content: "We create events, campaigns, flash mob, street and road shows or any kind of activity through which a brand drives customer actions. This OOH advertising technique is mostly aimed at generating brand awareness, building lasting relationships with the target audiences, and developing customer loyalty.",
            img: activation,
            path: ""
        }
    ]

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };

    const Card = ({headerText, content}) =>{
        return(
            <div className="rounded-3xl w-full h-full overflow-hidden shadow-xl">
                <div className=" bg-yellow-300 text-center h-24 flex justify-center items-center px-2">
                    <h1 className="text-brand-color1 text-xl lg:text-2xl font-bold m-auto">{headerText}</h1>
                </div>
                <div className='bg-white text-center py-8 px-4 h-[calc(100%_-_6rem)]'>
                {
                    content.map((data, index) =>{
                        return(
                            index === 0 &&
                            <p key={index} className="text-lg font-normal text-brand-color1 pb-5">
                                {parse(data)}
                                <span onClick={toggleReadMore} className="text-primary2 cursor-pointer">
                                    {isReadMore && "...read more"}
                                </span>
                            </p> 
                        )
                    })
                }
                {
                    !isReadMore &&
                    content.map((data, index) =>{
                        return(
                            index >= 0 &&
                            <p key={index} className="text-lg font-normal text-brand-color1 pb-5">
                                {parse(data)}
                                <span onClick={toggleReadMore} className="text-primary2 cursor-pointer">
                                    {index === content.length - 1 && " show less"}
                                </span>
                            </p> 
                        )
                    })
                }
                </div>
            </div>
        )
    }

    const Services = ({ heading, content, image, path}) =>{
        
        const sliceArrayString = (arr, strLength) =>{
            let slicedArr = []
            let trackedLength = 0;
            arr.forEach((data, index)=>{
                if(typeof data === "string"){
                    trackedLength += data.length;
                    if(trackedLength >= strLength){
                        slicedArr.push(data.slice(0,strLength - trackedLength));
                        return slicedArr;
                    }
                    else{
                        slicedArr.push(data);
                    }
                }
                else{
                    trackedLength += data.props.children.length;
                    if(trackedLength >= strLength){
                        let filteredText = (data.props.children.slice(0,strLength - trackedLength));
                        let propsObject = {...data, props:{children : filteredText}}
                        slicedArr.push(propsObject);
                        return slicedArr;
                    }
                    else{
                        slicedArr.push(data);
                    }
                }
            })
            return slicedArr;
        }

        let slicedContent = typeof content === "string" ? content.slice(0,150) : sliceArrayString(content, 150)
        return (
            <div className='text-center'>
                <div className="rounded-full object-cover w-52 h-52 mx-auto xl:w-72 xl:h-72 relative overflow-hidden">
                    <Image src={image} alt="Out of Home Advertising Company in Nigeria" layout='fill' objectFit='cover' className='hover:scale-110 duration-500' priority={true}/>
                </div>
                <div className='px-3 w-full h-[calc(100%_-_13rem)] xl:h-[calc(100%_-_18rem)]'>
                    <h1 className='py-3 text-xl font-bold'>{heading}</h1>
                    <p className='m-0 pb-3'>{slicedContent}...</p>
                    <Link href={path}>
                        <a target="_blank">
                            <button className={`bg-charity-color2 border border-primary2 text-white rounded-3xl hover:bg-white hover:text-primary2 px-4 py-2 ${path === "" ? "cursor-not-allowed" : " cursor-pointer"}`} disabled={path === ""}>Read More</button>
                        </a>
                    </Link>
                </div>
            </div>
        )
    }

    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <div className="h-[calc(100vh_-_5rem)] mt-20 w-full relative">
            <div className='w-full h-full relative'>
                <Image src={backgroundImg} alt="Our Services" layout='fill' objectFit='cover' priority={true} />
            </div>
            <div className="bg-charity-color2 w-85 md:w-9/12 xl:w-2/4 h-52 md:h-80 text-white flex justify-center items-center absolute left-0 bottom-24 md:bottom-12 rounded-br-full rounded-tr-full shadow-xl">
                <div className=" w-full md:w-500 lg:w-600 px-3 md:px-0">
                    <h1 className='text-2xl md:text-5xl lg:text-7xl font-bold pb-2'>NIMBUS MEDIA</h1>
                    <p className="text-yellow-300 text-sm sm:text-lg md:text-2xl font-medium pb-1">Out of Home Advertising Company in Nigeria</p>
                    <p className=' text-xs sm:text-xs md:text-lg'>We Are the Leading Out of Home Advertising Company in Nigeria with Out-of-home Media Network in High Traffic Locations across the Country</p>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <div className="bg-charity-color2 text-white lg:rounded-tl-full w-full py-7">
                <div className='w-full sm:w-600 lg:w-900 mx-auto text-center py-5 px-4 sm:px-0'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold pb-4'>WHY OUT OF HOME ADVERTISING?</h1>
                    <div className='text-lg px-4'>
                        <p className='pb-3'>Out of home advertising (OOH) is a form of advertising that is strategically placed at high traffic locations where consumers can be reached and engaged when they are generally outdoors or visiting specific public places for relaxation. </p>
                        <p className='pb-3'>Traditionally outdoor advertising includes brand communications deployed on out-of-home media such as billboards, lamp posts, shopping mall display screens, bus shelters, benches, bus stations and road shows. </p>
                        <p>At Nimbus Media, we help our clients reach and engage their consumers by: </p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" bg-gray-100 py-10">
            <div className='w-90 mx-auto flex flex-wrap'>
                {
                    cardData.map((data, index) => {
                        return(
                            <div className="w-full md:w-2/4 xl:w-1/3 min-h-300 px-2 py-3" key={index}>
                                <Card headerText={data.headerText} content={data.content}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='w-full'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl text-charity-color2 font-bold text-center pt-10'>OUR OOH ADVERTISING SERVICES?</h1>
            <div className='w-90 mx-auto flex flex-wrap py-10'>
                {
                    servicesData.map((data, index) => {
                        return(
                            <div key={index} className="w-full sm:w-2/4 lg:w-1/3 py-10 px-7">
                                <Services heading={data.heading} content={parse(data.content)} image={data.img} path={data.path}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Services