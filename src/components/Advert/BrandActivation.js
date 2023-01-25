import React from 'react'
import AdvertTemplate from './AdvertTemplate'
import transitingAd from "../../assets/images/servicesImg/transitingAd.png";
import productActivation from "../../assets/images/servicesImg/productSampling.jpg";
import experientalActivation from "../../assets/images/servicesImg/experimentalActivation1.jpg";
import storeActivation from "../../assets/images/servicesImg/storeActivation.jpg";
import backgroundImg from "../../assets/images/servicesImg/activation.jpg";


function BrandActivation() {
   
    const data = {
        title: "Brand Activation",
        backgroundImg: backgroundImg,
        adText: [
            "At Nimbus Media, we help clients create brand awareness, build lasting relationships with their target audiences, and develop customer loyalty that eventually drives conversions through a series of creative brand activation campaigns.",
            "We create offline or virtual events, flash mobs, street, market and road shows among other kinds of innovative activities through which a brand drives consumer actions. Our <a href='https://nimbus.com.ng' target='_blank' rel='noreferrer noopener' className='cursor-pointer underline'>experiential campaigns</a> focus on creating immersive brand experience for your consumers in strategic locations across Nigeria."
        ],
        aboutData: [
            {
                header: "Why Brand Activation",
                content: [
                    "Brand activation connects a business to its consumers at a personal level. By adding significant value to your target audiences through exciting brand experience, you will build relationships that will improve brand trust. This trust then creates a bond that triggers consumers to buy repeatedly.",
                    "At Nimbus Media, we see brand activation beyond experiential campaigns. We deploy the most suitable OOH media, content formats,  campaigns or any interactive activity that will make your brand, product or services known to your target audiences in a personalized manner."
                ]
            },
            {
                header: "Cost of Brand Activation",
                content: [
                    "Cost of brand activation campaigns in Nigeria depends on the location settings and props, campaign duration, ad format (digital or static), location and activities required to drive necessary consumer actions.",
                    "We will review your campaign objectives, demography of primary target audience, media channels and locations for the brand activities in line with what you intend to achieve in order to recommend a suitable budget."
                ]
            },
            {
                header: "Who Needs Brand Activation",
                content: [
                    "Banks, FMCGs, Telecos, Tech Startups and any other businesses that want to increase brand awareness, boost consumer perception and brand recognition while driving conversions such as app downloads, event registration, web visits, ticket sales, product sampling, service subscriptions, etc.",
                    "Our <a href='https://econsultancy.com/brand-activation/' target='_blank' rel='noreferrer noopener' className='cursor-pointer underline'>brand activation campaigns</a> help you get personal with your target audiences through events, experiences, and interactions that forge lasting emotional connections with them across offline and online channels in any location in Nigeria."
                ]
            }
        ],
        cardData: [
            {
                title: "Experiential Activation",
                img: experientalActivation,
                alt: "Brand Activation Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Product Sampling",
                img: productActivation,
                alt: "Brand Activation Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "In-store Activation ",
                img: storeActivation,
                alt: "Brand Activation Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            // {
            //     title: "Bus Stop Shelter",
            //     img: kios,
            //     alt: "Transit Advertising Agency in Nigeria",
            //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            // },
            // {
            //     title: "Bus Terminal Branding",
            //     img: kios,
            //     alt: "Transit Advertising Agency in Nigeria",
            //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            // },
            // {
            //     title: "Train Station Branding ",
            //     img: kios,
            //     alt: "Transit Advertising Agency in Nigeria",
            //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            // },
        ]

    }
  return (
    <AdvertTemplate data={data} />
  )
}


export default BrandActivation;