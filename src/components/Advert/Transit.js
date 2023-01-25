import React from 'react'
import AdvertTemplate from './AdvertTemplate'
import transitingAd from "../../assets/images/servicesImg/transitingAd.png";
import busStopShelter from "../../assets/images/servicesImg/busStopShelter.jpg";
import busSeatBranding from "../../assets/images/servicesImg/busSeatBranding.jpg";
import mobileAd from "../../assets/images/billboard/mobileAd.jpeg";
import trainStationBranding from "../../assets/images/servicesImg/trainStationBranding.jpg";

function Transit() {
    
   
    const data = {
        title: "Transit Advertising",
        backgroundImg: transitingAd,
        adText: [
            "We leverage outdoor media platforms inside and outside public vehicles like buses, trains, subways, cabs and also in the transit terminals or bus stations to provide innovative <a href='https://nimbus.com.ng' target='_blank' rel='noreferrer noopener' className='cursor-pointer underline'>transit advertising solutions</a> in Nigeria.",
            "We deploy transit ads in the most suitable routes with high daily footfall of your target demographics based on our understanding of the particular mode of transportation and results from previous campaigns."
        ],
        aboutData: [
            {
                header: "Why Transit Advertising",
                content: [
                    "Transit ads are often non-skippable and hard to ignore because they stay with the consumers through their journey, which usually provokes engagement and virality.",
                    "Also, because transit ads are fixed on the routes that your consumers navigate, probably on a daily basis, they increase frequency of exposure to your messaging exponentially which is great for top-of-mind awareness and consideration.",
                    "Most importantly, we are able to harness topnotch outdoor advertising technologies to deploy OOH media such as digital signage, plasma or LCD display screens among other smart media that allows consumers to interact with your campaigns on-the-go as you drive conversions."
                ]
            },
            {
                header: "Cost of Transit Advertising",
                content: [
                    "Cost of transit advertising in Nigeria depends on the location, campaign duration, ad format (digital or static), location and size of OOH media available on the mode of transportation that best captures your target demographics per time.",
                    "Our experts will review your campaign objectives, primary target audience and location in line with what you intend to achieve with transit advertising to recommend a pocket friendly budget."
                ]
            },
            {
                header: "Who Needs Transit Advertising",
                content: [
                    "Banks, FMCGs, Telecos, Tech Startups and any other businesses that want to increase top-of-mind awareness, boost reach and frequency of campaign exposure as well as drive specific consumer actions such as app downloads, event registration, web visits, ticket sales, product sampling, service subscriptions, etc, with highly visual, compelling communications.",
                    "Nimbus Media leverages a growing network of OOH media to deploy creative, impactful <a href='https://nimbus.com.ng' target='_blank' rel='noreferrer noopener' className='text-white cursor-pointer underline'>transit ads in major cities</a> across Nigeria like Lagos, Abuja, Port Harcourt, Kano, Ibadan, Abeokuta, Asaba, Warri, Benin, Owerri, Abia, Enugu, etc."
                ]
            },
        ],
        cardData: [
            {
                title: "Bus Shelter",
                img: transitingAd,
                alt: "Transit Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "In-Bus Display",
                img: mobileAd,
                alt: "Transit Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Bus Stop Shelter",
                img: busStopShelter,
                alt: "Transit Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "In-Bus Seat Branding",
                img: busSeatBranding,
                alt: "Transit Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Train Station Branding",
                img: trainStationBranding,
                alt: "Transit Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
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

export default Transit