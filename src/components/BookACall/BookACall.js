import React, {useState, useRef} from 'react'
import Loader from '../customComponents/Loader';
import Overlay from '../customComponents/Overlay';
import Input from './Input';
import axios from "axios";
import BasicModal from '../customComponents/Modal';
import parse from 'html-react-parser';

function BookACall() {

    const myRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [ callDetails, setCallDetails ] = useState({
        webUrl: "",
        compName: "",
        fullName: "",
        phone: "",
        email: "",
        description: ""
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () =>{
        setOpen(false);
        myRef.current?.scrollIntoView({ behavior: 'smooth' });

    }
    const [ loading, setLoading] = useState(false);
    const aboutData = [
        {
            header: "Understand Your Advertising Needs",
            text: "We have a few questions to clarify areas where creative outdoor advertising can help."
        },
        {
            header: "Develop Impactful Messaging",
            text: "Let's work with you to develop innovative ideas to best expose your brand."
        },
        {
            header: "Optimize Location-based Targeting",
            text: "We walk you through our outdoor advertising media network and where you best fit in."
        },
        {
            header: "Leverage Digital OOH Advertising",
            text:'Let\'s engage your audiences with interactive <a href="https://dashtwo.com/what-is-a-mobile-billboard/" target="_blank" rel="noreferrer noopener" className="text-white underline">digital and mobile billboards.</a>'
        }
    ]

    const handleOnChange = (e) =>{
        e.preventDefault();
        const { name, value }  = e.target;
        setCallDetails((prevState) =>{
            return{ ...prevState, [name]: value}
        })
    }
    const handleInputChange = (name, value) =>{
        setCallDetails((prevState) =>{
            return{ ...prevState, [name]: value}
        })
    }

    const clearInput = () =>{
        setCallDetails({
            webUrl: "",
            compName: "",
            fullName: "",
            phone: "",
            email: "",
            description: ""
        })
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}contact/book-a-call`, callDetails)
        .then((res) =>{
            setLoading(false);
            if(res.status === 200){
                handleOpen();
                clearInput();
            }
        })
        .catch((err) =>{
            setLoading(false);
            console.log(err);
            clearInput();
        })
        
    }
    const About = ({data}) =>{
        return(
            <div className='w-full group cursor-default py-4'>
                <div className=" h-2 bg-yellow-400 w-2/4 group-hover:w-4/5 duration-500"></div>
                <div className=" text-white">
                    <h1 className="pt-2 pb-2 text-base lg:text-lg font-bold">{data.header}</h1>
                    <p className='pb-4 text-base text-justify md:text-left'>{parse(data.text)}</p>   
                </div>
            </div>
        )
    }
  return (
    <>

    <BasicModal headerText="Successfull !!!" message="We will get back to you shortly" open={open} handleClose={handleClose}/>
        <div className='w-full flex mt-20' ref={myRef}>
            <div className='w-2/4 bg-primary2 overflow-auto hidden lg:flex '>
                <div className= 'w-full lg:w-90 xl:w-85 mx-auto'>
                    <div className=' text-white pt-20 pb-14 pl-5'>
                        <h1 className=' font-medium text-5xl'>READY TO</h1>
                        <h1 className='text-yellow-400 text-7xl font-black'>GROW</h1>
                        <h1 className='font-black text-6xl'>YOUR BRAND</h1>
                        <p className='text-lg pt-5'>Drive more brand awareness and conversions with innovative <a href="https://www.nimbus.com.ng/" target="_blank" rel="noreferrer noopener" className="text-white underline">outdoor advertising solutions. </a><b>Fill in the form </b> to speak with our experts!</p>
                    </div>
                    <div className='w-full flex flex-wrap'>
                        {
                            aboutData.map((data, index) =>{
                                return(
                                    <div key={index} className="w-2/4 px-5">
                                        <About data={data} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/4 bg-white overflow-auto pb-14 relative'>
            {
                loading &&
                <Overlay position="fixed" zIndex="z-120">
                    <Loader size={25} color="rgba(22, 164, 222, 1)"/>
                </Overlay>
            } 
                <div className='w-4/5 xs:w-70 mx-auto'>
                    <div className='w-full xs:w-340 md:w-410 mx-auto text-primary2 pt-14 sm:pt-20 pb-5 font-black'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl text-left sm:text-right pr-5'>TALK TO OUR</h1>
                        <h1 className='text-4xl sm:text-5xl text-left sm:text-right md:text-6xl'><span className='text-yellow-400'>EXPERTS</span> NOW!</h1>
                    </div>
                    <div className='w-full'>
                    <form onSubmit={handleSubmit} >
                        <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <Input width="w-full sm:w-45% py-6 sm:py-6" type="text" name="webUrl" value={callDetails.webUrl} onChange={handleInputChange} label="Website URL"/>
                            <Input width="w-full sm:w-45% sm:py-6" type="text" name="compName" value={callDetails.compName} onChange={handleInputChange}  label="Company Name"/>
                        </div>
                        <div className='py-6 sm:py-0'>
                            <Input width="w-full" type="text" name="fullName" value={callDetails.fullName} onChange={handleInputChange}  label="Full Name"/>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <Input width="w-full sm:w-45% sm:py-6" type="text" name="phone" value={callDetails.phone} onChange={handleInputChange}  label="Phone Number"/>
                            <Input width="w-full sm:w-45% py-6 sm:py-6" type="email" name="email" value={callDetails.email} onChange={handleInputChange}  label="Work Email"/>
                        </div>
                        <div className=''>
                            <label className='text-base text-black font-meduim'>Describe Your Business and the Most Pressing Objectives</label>
                            <textarea name="description" value={callDetails.description} rows="6" onChange={handleOnChange} cols="50" className='w-full rounded-tl-3xl rounded-br-3xl bg-gray-100 mt-2 p-3 outline-primary2' required autoComplete="off"></textarea>
                        </div>
                        <div className='py-6'>
                            <button type="submit" className='bg-primary2 text-white rounded-tl-3xl rounded-br-3xl px-10 py-3 font-bold text-lg shadow-2xl border-2 border-primary2 hover:bg-white hover:text-primary2'>
                                Book A Call
                            </button>
                        </div>
                    </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookACall