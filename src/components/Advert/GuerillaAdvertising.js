import React from 'react'
import AdvertTemplate from './AdvertTemplate'
import digitalLamppost from "../../assets/images/lampost/digital lamppost.webp";
import hyperRealistic from "../../assets/images/servicesImg/guerillaAd1.jpg";
import streetArt from "../../assets/images/servicesImg/streetArt1.jpeg";
import backgroundImg from "../../assets/images/servicesImg/guerrilaImg.JPG";
import mainBillboard from "../../assets/images/billboard/billboard.jpeg";

function GuerillaAdvertising() {
    
   
    const data = {
        title: "Guerilla Advertising ",
        backgroundImg: backgroundImg,
        adText: [
            "Depending on budget, we deploy novel and unconventional methods to boost sales or attract consumers’ interest in a brand or business.",
            "Our <a href='https://nimbus.com.ng' target='_blank' rel='noreferrer noopener' className='cursor-pointer underline'>Guerilla advertising tactics </a>are often low-cost as they inspire widespread use of personal interactions, surprise elements, daring creatives or viral social messaging techniques that keep audiences talking about our clients."
        ],
        aboutData: [
            {
                header: "Why Guerilla Advertising",
                content: [
                    "Because we often use memorable and unconventional approaches, Guerilla advertising tactics leave a long lasting impression on consumers. And as such, your target audiences will be left amazed, impressed, and wanting to know more about your campaign, product or services.",
                    "Besides brand recall, Guerilla tactics evoke surprise, shock and wonder that strikes consumers so well that they cannot help but to talk about your brand long after the campaign. This helps <a href='https://www.delnext.com/blog/en/15-examples-guerrilla-marketing/' target='_blank' rel='noreferrer noopener' className='text-white cursor-pointer underline'> increase brand awareness</a> through word of mouth.",
                    "The icing on the cake that is the least talked about is that Guerilla advertising is pocket-friendly as it has proven to significantly reduce advertising budget with reasonable returns on marketing investment (ROMI)."
                ]
            },
            {
                header: "Cost of Guerilla Advertising",
                content: [
                    "Guerilla advertising makes use of unconventional tactics such as word of mouth, viral marketing, or ambient marketing that have proven spectacularly effective across Nigeria.",
                    "We will develop a low-cost strategy that will be personalized based on your consumer insight from various media channels and marketing technologies.",
                    "Talk to us today to understand how we can deploy guerilla advertising to reach and engage more consumers in an unconventional manner that will create awareness and drive adoption of your products or services."
                ]
            },
            {
                header: "Who Needs Guerilla Advertising",
                content: [
                    "Banks, FMCGs, Telecos, Tech Startups and any other businesses that want to increase brand recall, boost talkability and brand recognition while at the same time drive specific consumer actions such as app downloads, event registration, web visits, ticket sales, product sampling, service subscriptions.",
                    "At Nimbus Media, we help you get personal with consumers by engaging them with guerilla advertising due to the emotive nature of its messaging, creativity and mechanics for triggering target audiences to take actions.",
                    "We have leveraged guerilla tactics to redefine consumer perception through immersive brand experience times without number."
                ]
            },
        ],
        cardData: [
            {
                title: "Street Art & Graffiti",
                img: streetArt,
                alt: "Guerilla Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Hyper-realistic Billboard",
                img: mainBillboard,
                alt: "Guerilla Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Street Signage",
                img: digitalLamppost,
                alt: "Guerilla Advertising Agency in Nigeria",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            // {
            //     title: "In-Bus Seat Branding",
            //     img: kios,
            //     alt: "Transit Advertising Agency in Nigeria",
            //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            // },
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

export default GuerillaAdvertising;