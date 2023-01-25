import { FaLock } from 'react-icons/fa';
import Link from 'next/link';
import parse from 'html-react-parser';

function PrivacyPolicy (){

    const websiteVisistorInfo = [
        {
            header: "Google Analytics",
            content: [
                "By analysing our most and least popular pages, Google Analytics helps us understand what you want to find out from Nimbus Media – and to make sure we keep on delivering the most relevant information. When someone visits <a href='/' className='text-primary2'>www.nimbus.com.ng</a> , we use Google Analytics to collect standard details of visitor behaviour patterns. We do this to find out things such as the number of visitors to the various parts of the site. This information is aggregated in a way which does not identify anyone."
            ]
        },
        {
            header: "Search Engines",
            content: [
                "Your searches remain completely anonymous. Search engines only provide Nimbus with anonymised search terms. This means that we often have no access to the specific search terms used to arrive at the Nimbus website. Even when terms are available to us they remain anonymised and non-identifiable."
            ]
        },
        {
            header: "Nimbus Aid Project",
            content: [
                "When signing up to participate in the Nimbus Aid Project, you will be asked to provide us with your name and email address. You will also be asked to answer some general organization questions regarding, amongst other things, key people, social media handles, etc. This information will be used to contact you to ask if you wish to participate in surveys that are relevant to you and, if you are part of the winners of the event, to notify you that you have won a prize. The information is kept secure, on our AWS server."
            ]
        },
        {
            header: "Use of Cookies by Nimbus",
            content: [
                "Cookies have a variety of uses – from ensuring this website runs properly, through to measuring video views. You can read more about how we use cookies on our Cookies page."
            ]
        },
        {
            header: "Unsubscribing / Opting Out",
            content: [
                "We respect your right to unsubscribe or opt out. We include an unsubscribe link in every one of Nimbus’s marketing emails.",
                "However, if you have been receiving marketing emails from us and wish to opt-out you can also do so by emailing admin@nimbus.com.ng.",
                "As with all opt-outs from our email marketing activity, the only data that remains on our system is the email address that opted out of our marketing activity. This is stored so that it can’t be re-added. No other data on the individual is retained."
            ]
        },
        {
            header: "Direct Mail Marketing",
            content: [
                "We use direct mail rarely, and only to enhance our customers’ experience with Nimbus. On occasion and for very specific promotions we will send direct mail to our partners and to business individuals we expect to be interested in certain campaigns. On those occasions we will have obtained the business postal address of the individuals from the contact forms we have resident on our website.",
                "Should you prefer not to receive such communications from us, please email us at <span className='text-primary2'>nimbus@nimbus.com.ng</span>."
            ]
        },
        {
            header: "Security and Performance",
            content: [
                "We take our security responsibilities seriously. <br />Nimbus uses a third-party service to help maintain the security and performance of the Nimbus website. To deliver this service it processes the IP addresses of visitors to the site.",
                "These IP addresses are not tied to any other form of identification. This monitoring protects the website and Nimbus’s data integrity from malicious attacks."
            ]
        },
        {
            header: "People Who Contact Us Via Social Media",
            content: [
                "We delete the data as soon as possible. <br />Nimbus has one each of Twitter, Instagram profiles: @nimbusmediang; a LinkedIn page;  and a Facebook page.",
                "On these platforms it is possible for you to contact us directly with a private message. If you send us a private or direct message via social media the message will be stored for a maximum of three months, unless in the case of a complaint that needs investigating.",
                "In the case of a complaint the message will be kept for as long as is necessary to resolve the issue. It will not be shared with third parties, unless in the case of a complaint that needs resolving in conjunction with others, such as a contractor. In such a case we will share the message with as few people as possible and make clear the necessity of respecting the privacy of any individual involved, by asking third parties to not share the message any further and delete it as soon as a resolution has been reached."
            ]
        },
        {
            header: "Links To Other Websites",
            content: [
                "This privacy notice only applies to the Nimbus domain.<br />This privacy notice does not cover the links within this site linking to other websites. We encourage you to read the privacy statements on the other websites you visit."
            ]
        },
        {
            header: "Other Personal Information",
            content: [
                "This Website may collect your name and email address if you leave a comment, subscribe to our newsletter or make an enquiry. In providing this information you consent for it to be used for these purposes. We will not provide this information to any other party."
            ]
        },
        {
            header: "Data Sharing",
            content: [
                "We may share identifiable data with third parties.<br />On occasion we share anonymised, aggregated website performance data with third parties when discussing marketing campaigns or website activity. For example, we may write a report listing the number of website visits in a quarter.",
                "The data in such an instance would remain non-identifiable and that is the only way in which we would share data with third parties."
            ]
        },
        {
            header: "Consent",
            content: [
                "By using this Website you consent to the collection and use of your personal information as outlined in this Privacy Policy."
            ]
        },
        {
            header: "How To Contact Us",
            content: [
                "If you want to request information about our privacy policy or have concerns or questions, you can email us using admin@nimbus.com.ng or write to: Privacy, Nimbus, 16 Igbasan Street, Opebi, Lagos."
            ]
        },
    ]
    const cookiesData = {
        header: "Cookies",
        content: [
            "Along with Ocean’s privacy notice this text is effective from 16th September 2022. It is updated on a regular basis, but if you find any of the information out-of-date, or have questions you would like to ask, please contact us on <span className='text-primary2'>admin@nimbus.com.ng<span>",
            "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
            "The purpose of these Cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use the Website.",
            "The table below explains the cookies we use and why."
        ],
        tableData: [
            {
                cookie: "Universal Analytics (Google)",
                name: "_ga <br />_gat <br />_gid",
                purpose: "These cookies are used to collect information about how visitors use our website. The cookies collect information in an anonymous form, including the number of visitors to the website, where visitors have come to the website from and the pages they visited. Read Google’s overview of privacy and safeguarding data <a href='https://support.google.com/analytics/answer/6004245?hl=en' target='_blank' rel='noreferrer noopener' className='text-primary2'>here</a>"
            },
            {
                cookie: "Session Cookies",
                name: "",
                purpose: "Session cookies are cookies that last for a session. A session starts when you launch a website or web app and ends when you leave the website or close your browser window."
            }
        ]
    }
    return(
        <div className=" py-20 px-5 sm:px-10 md:px-20">
            <div className=" rounded-3xl shadow-2xl relative pt-12 pb-20 px-5 sm:px-12 lg:px-24 text-base sm:text-lg text-gray-700">
                <div className='text-center pb-6'>
                    <div className='w-12 h-12 bg-primary2 rounded-lg absolute -top-6 left-2/4 -ml-6 flex justify-center items-center drop-shadow-2xl shadow-primary2 hover:animate-bounce'>
                        <i className=' text-white'><FaLock /></i>
                    </div>
                    <h1 className='text-xl md:text-2xl font-black pt-12 pb-3 text-brand-color1 '>Privacy & Cookies Policy</h1>
                </div>
                <div className='py-6'>
                    <p className='pb-3 text-sm sm:text-base'>Last updated: 16th September 2022</p>
                    <p className='text-justify'>This privacy notice is effective from 16th September 2022. It is updated on a regular basis, but if you find any of the information out-of-date, or have questions you would like to ask, please contact us on <span className=' text-primary2'>admin@nimbus.com.ng</span></p>
                </div>
                <div className='py-6'>
                    <h1 className='font-semibold text-lg md:text-2xl pb-4 text-brand-color1 '>Placing Our Partners at The Heart of Everything We Do</h1>
                    <p className='text-justify'>General Data Protection Regulation (GDPR) mirrors a long-held view about the need to place the customer at the heart of everything that marketers do.</p>
                    <ul className='py-5 list-disc list-inside'>
                        <li>Put our partners first</li>
                        <li>Respect privacy and meet partners’ expectations</li>
                        <li>Be honest, be fair, be transparent</li>
                        <li>Exercise diligence with data</li>
                        <li>Take responsibility, honour accountability</li>
                    </ul>
                    <p className='text-justify'>And as such, this privacy notice outlines all the ways Nimbus Media processes data and why, and how any individual can easily remove themselves from that activity should they wish.</p>
                </div>
                <div className='py-6'>
                    <h1 className='font-semibold text-lg md:text-2xl pb-4 text-brand-color1'>Legitimate Interests</h1>
                    <p className='text-justify'>We only send marketing information we believe is relevant and doesn’t infringe upon your rights.
                    In line with GDPR, our marketing activity rests on ‘legitimate interests’. In order to be competitive 
                    in our market we deploy carefully crafted marketing activity to select business contacts. We do so, 
                    believing this information will be relevant to their role and necessary for them to stay up-to-date 
                    on developments in the industry. We process limited and strictly relevant individual data, ensure 
                    that the data remains up-to-date, and ensure that anyone can quickly and easily opt-out of receiving 
                    marketing contact any time they wish. This privacy notice outlines the ways in which individuals may 
                    contact us, the ways Nimbus might contact them, and how the individual’s data is processed and protected 
                    following GDPR instruction.</p>

                </div>
                <div className='py-6'>
                    <h1 className='font-semibold text-lg md:text-2xl pb-4 text-brand-color1'>Visitors to Our Website</h1>
                    {
                        websiteVisistorInfo.map((info, index)=>{
                            return(
                                <div key={index} className="py-5">
                                    <h1 className='font-semibold text-lg md:text-2xl pb-2 text-brand-color1'>{info.header}</h1>
                                    {
                                        info.content.map((data,index) =>{
                                            return(
                                                <p className="py-1 sm:py-3 text-justify">{parse(data)}</p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div>
                    <h1 className='font-semibold text-lg md:text-2xl pb-4 text-brand-color1'>Cookies</h1>
                    {
                        cookiesData.content.map((data, index) =>{
                            return(
                                <p className="py-1 sm:py-3 text-justify">{parse(data)}</p>
                            )
                        })
                    }
                    <div className='overflow-auto w-full pt-5'>
                        <table className='w-full min-w-1000 border-collapse'>
                            <tbody></tbody>
                            <tr className='w-full text-left border'>
                                <th className='w-1/4 border text-base px-3'>Cookie</th>
                                <th className='w-1/4 border text-base px-3'>Name</th>
                                <th className='w-2/4 border text-base px-3'>Purpose</th>
                            </tr>
                            {
                                cookiesData.tableData.map((data,index) =>{
                                    return(
                                        <tr key={index} className="border">
                                            <td className="border px-3 py-4">{data.cookie}</td>
                                            <td className="border px-3 py-4">{parse(data.name)}</td>
                                            <td className="border px-3 py-4">{parse(data.purpose)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PrivacyPolicy;