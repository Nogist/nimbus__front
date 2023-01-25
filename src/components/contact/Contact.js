import React,{ useState, useRef } from "react";
import axios from "axios";
import Loader from "../customComponents/Loader";

function Contact() {
    const myRef = useRef(null);
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [ contactInfo, setContactInfo ] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [ loading, setLoading ] = useState(false);
    const [message, setMessage ] = useState({
        msg: "",
        state: 0
    });

    const handleOnChange = (e) =>{
        e.preventDefault();
        setContactInfo((prevState) =>{
            return{ ...prevState, [e.target.name]: e.target.value}
        })
    }

    const clearMessage = () =>{
        myRef.current.scrollIntoView(); 
        setContactInfo({
            name: "",
            email: "",
            message: ""
        });
        setTimeout(() => {
            setMessage(() =>{
                return {msg: "" , state: 0}
            });
        }, 5000);
    }

    const submitMessage = (e) =>{
        const payload = {
            email: contactInfo.email,
            message: contactInfo.message
        }

        setLoading(true);
        axios.post(`${baseURL}contact`, payload)
        .then((res) =>{
            setLoading(false);
            setMessage(() =>{
                return {msg: "Message sent successfully!!!" , state: 1}
            });
            clearMessage();
        })
        .catch((err) =>{
            setMessage(() =>{
                return {msg: "error as occurred!!!" , state: 2}
            });
            clearMessage();
        })
        e.preventDefault();
    }

    return (
        <div className='w-full bg-primary7 pt-10 pb-24' id="contact" ref={myRef}>
            <div className="w-95 md:w-4/5 xl:w-3/5 mx-auto">
                <div className='w-full text-center'>
                    <h1 className='py-2 m-0 font-bold text-3xl md:text-4xl text-primary6'>Contact Us</h1>
                    <p className='py-2'>(+234)-706-327-4951</p>
                    <p className='py-2'>wale@nimbus.com.ng</p>
                </div>
                <div className='w-full bg-white py-6'>
                    <div className='text-center py-4'>
                        <p>Let’s showcase your brand to the world</p>
                    </div>
                    <div className="w-90 md:w-4/5 mx-auto">
                        <form onSubmit={submitMessage}>
                            <div className="w-90 mx-auto">
                                <p className={`w-full text-center py-4 text-lg font-bold ${message.state === 0 && "bg-white"} ${message.state === 1 && "text-green-300 bg-green-100"} ${message.state === 2 && "text-red-500 bg-red-100"}`}>{message.msg}</p>
                                <input className="w-full lg:w-3/4 mt-5 pl-3 text-base h-12 text-gray-600 rounded-md border border-charity-color4 focus:border-2 focus:outline-none focus:border-primary2 shadow-sm" type="text" name="name" placeholder="Full Name" onChange={handleOnChange} value={contactInfo.name} autoComplete="off" required/>
                                <input className="w-full lg:w-3/4 mt-5 pl-3 text-base h-12 rounded-md border border-charity-color4 focus:outline-none focus:border-2 focus:border-primary2 shadow-sm" type="email" name="email" placeholder="Email address" onChange={handleOnChange} value={contactInfo.email} autoComplete="off" required/>
                                <textarea className="w-full mt-5 text-base h-40 pl-3 pt-1 rounded-md border border-charity-color4 focus:border-2 focus:outline-none focus:border-primary2 shadow-sm" name="message" placeholder="Tell us about your project" onChange={handleOnChange} value={contactInfo.message} autoComplete="off" required></textarea>
                            </div>
                            <div className="text-center w-full pt-6">
                                <button type="submit" disabled={loading} className={`${loading ? "opacity-40": "opacity-100"} text-gray-50 border-primary2 border bg-primary2 mt-2 w-40 h-14 rounded-40 hover:scale-110 duration-500`}>
                                {
                                    loading ?
                                    <Loader color="white" size={10} />:
                                    "Send Message"
                                }
                                    
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;