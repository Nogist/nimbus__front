import React,{useState,useContext} from 'react';
import logo from "../../assets/images/NIMBUS_WHITE_LOGO.png";
import backgroundDots from "../../assets/images/smallRectangle.png";
import Axios from "axios";
import Link from "next/link";
import Image from 'next/image'
import Overlay from '../customComponents/Overlay';
import Loader from 'react-spinners/BeatLoader';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';
import { useCookies } from "react-cookie"

function Login() {
    const [cookie, setCookie] = useCookies(["user"])
    const { setAuthState,setUserAuthInfo } = useContext(AuthContext);
    const router = useRouter();
    const [ loading, setLoading ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ inputIsValid, setInputIsValid ] = useState(true);
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [ loginDetails,setLoginDetails ] = useState(
        {
            email:"",
            password:""
    })

    const validateInput = (loginDetails) =>{
        if(loginDetails.email === "" || loginDetails.password === ""){
            return false;
        }
        return true;
    }
     const handleOnChange = (event) =>{
        event.preventDefault();
        setLoginDetails((prevState)=>{
            return{
                ...prevState , [event.target.name] : event.target.value
            }
        })
    }

    const handleOnSubmit = (event) =>{
        
        event.preventDefault();
        setLoading(true);
        const loginStatus = validateInput(loginDetails);
        if(loginStatus){
            Axios.post(`${baseURL}admin/login`,loginDetails)
            .then((res) =>{
                if(res.data.status === "success"){
                    setErrorMessage("");
                    setCookie("user", res.data.token, {
                        path: "/",
                        maxAge: 3600, // Expires after 1hr
                        sameSite: true,
                    })
                    setAuthState(res.data.token)
                    setLoading(false);
                    router.push("/admin/aid-project");
                }
                else{
                    router.push("/admin");
                }
            })
            .catch(err =>{
                setLoading(false);
                setInputIsValid(false);
                setErrorMessage("An Error has occurred!!!");
            })
        }
        else{
            setInputIsValid(false);
            setLoading(false);
            setErrorMessage("Input is required!!!");
        }
    }
  return (
    <div className="signin-container">
        {
            loading &&
            <Overlay position="fixed" zIndex="z-120">
                <Loader size={25} color="#4286FF"/>
            </Overlay>
        } 
            <div className="signin-header ">
                <div className='w-full'>
                    <Link href="/">
                        <Image src={logo} alt="NimbusMediaLogo" className="signin-header-logo" width={120} height={100} objectFit="cover" />
                    </Link>
                    {/* <div className='signin-yellow-dots absolute right-0 top-0'>
                        <Image src={backgroundDots} alt="" layout='fill' objectFit='contain'/>
                    </div> */}
                    
                </div>
            </div>



            <div className="signin-body">
                <div className='signin-yellow-dots '>
                    <Image src={backgroundDots} alt="" layout='fill' objectFit='contain' className='cursor-pointer'/>
                </div>
                <div className="signin-inner-body">
                    <div className="signin-backgroundImg">

                    </div>
                    <div className="signin-backgroundCircle">
                    
                    </div>
                    <div className="signin-form-container">
                        <form className="signin-form" onSubmit={handleOnSubmit}>
                            <div className="signin-input-wrapper">
                                <p>Sign in</p>
                                { !inputIsValid && <p className={inputIsValid ? "" : "error-message"}>{errorMessage}</p>}
                                <input type="text" placeholder="Email address" name="email" className="siginup-input" onChange={handleOnChange}/>
                                <input type="password" placeholder="Password" name="password" className="siginup-input"  onChange={handleOnChange}/>
                                <button type="submit" className='border-2 border-charity-color1 hover:bg-gray-50 text-charity-color1'>Sign in  to your account </button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="signin-bottom-text">
                        <p>New to Nimbus? <Link href="/admin">Sign up</Link></p>
                        <p className="siginin-forgot-password"><Link href="/admin">Forgot your password?</Link></p>
                    </div> */}
                </div>
            </div>
            <div className="signin-footer">
                <button>Contact us</button>
                <div className='signin-yellow-dots'>
                    <Image src={backgroundDots} alt="" layout='fill' objectFit='contain' />
                </div>
                
            </div>
    </div>
  )
}

export default Login;
