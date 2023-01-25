import React, { useState, useContext, useEffect } from 'react'
import Dropdown from './Dropdown';
import Comment from "./Comment";
import Input from "./Input";
import { RiAddLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { AidProjectContext } from '../../context/AidProjectContext';
import Loader from 'react-spinners/BeatLoader';
import Modal from "../customComponents/Modal";
import RadioButton from '../customComponents/RadioButton';
import { useRouter } from 'next/router';

function NomineeForm() {
    const router = useRouter();
    const { nomineeDetails, setNomineeDetails, submitNomineeDetails, isLoading, modalMessage, modalIsActive, setModalIsActive } = useContext(AidProjectContext);
    const [ otherCategory, setOtherCategory ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ otherSource, setOtherSource ] = useState("");
    const [ source, setSource ] = useState("");
    const [ isFilled, setIsFilled ] = useState(false);

    const handleOnChange = (name, value) =>{
        setNomineeDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    
    const handleCategoryOnChage = (name, value) =>{
        setOtherCategory("");
        setCategory(value);
        setNomineeDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })

    }
    
    const handleSourceOnChage = (name, value) =>{
        setOtherSource("");
        setSource(value);
        setNomineeDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })

    }

    const handleOtherCategoryOnChage = (name, value) =>{
        setOtherCategory(value);
        setNomineeDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const handleOtherSourceOnChage = (name, value) =>{
        setOtherSource(value);
        setNomineeDetails((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })

    }


    const handleInputChange = (name, value, id) =>{
        const Id = Number(id);
        setNomineeDetails((prevState) =>(
            {
                ...prevState,
                keyPeople: prevState.keyPeople.map((people, index) => ( index === Id ? ( {...people, [name]: value }): people ))
            }
        ))
    }

    const handleAddInput = () =>{
        setNomineeDetails((prevState) =>(
            {
                ...prevState,
                keyPeople: [...prevState.keyPeople,{ name: "", linkedin: ""}]
            }
        ))
    }

    const handleDeleteInput = () =>{
        const slicedArray = nomineeDetails.keyPeople.slice(0, -1);
        setNomineeDetails((prevState) =>(
            {
                ...prevState,
                keyPeople: slicedArray
            }
        ))
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setOtherCategory("");
        setCategory("");
        setOtherSource("");
        setSource("");
        submitNomineeDetails(nomineeDetails);
    }

    const CategoryOptions = [
        {category: "Tech"}, 
        {category: "Healthcare"}, 
        {category: "Education"},
        {category: "Financial Services" },
        {category: "NGO" },
        {category: "Consumer Goods" },
        {category: "Hospitality/Entertainment" },
        {category: "Art" },
        {category: "Agriculture" },
        {category: "Others" }
    ]  

    const marketingSpendOptions = [
        {category: "N0-N500,000"}, 
        {category: "N500,001- N2,000,000"}, 
        {category: "N2,000,001- N5,000,000"},
        {category: "Above N5,000,000" }
    ]

    const businessTurnoverOptions = [
        {category: "Below N5,000,000"}, 
        {category: "Below N10,000,000"}, 
        {category: "Below N15,000,000"},
        {category: "Above N15,000,001"}
    ]
    const sourceOptions =[
        {category: "Facebook"}, 
        {category: "Instagram"}, 
        {category: "Twitter"},
        {category: "Online News"},
        {category: "Whatsapp"},
        {category: "TV"},
        {category: "Google Search"},
        {category: "LinkedIn"},
        {category: "Mall Screens"},
        {category: "Word of Mouth"},
        {category: "Others"}
    ]
    const closeModal = () =>{
        setModalIsActive(false);
        setIsFilled(!isFilled);
    }

    const declarationList = [
        "All necessary internal authorisations have been obtained in order to permit the legal entity you represent to submit this application.",
        "All the information given in relation to this application is complete, accurate and correct.",
        "You are aware that the decision of the Nimbus Aid Project selection committee is final.",
        "You understand that terms and conditions apply to this application.",
        "If eventually selected as a beneficiary, your organisation will cover all costs to attend the Nimbus Aid Project award ceremony in Lagos, Nigeria, in November 2022."
    ]
    useEffect(()=>{
        if( modalMessage.status === 0 ){
            router.push("/nimbus-aid-project#form")
        }else if(modalMessage.status === 1){
            window.scrollTo(0,0);
        }else{
            window.scrollTo(0,0);
        }
    }, [isFilled])
    return (
        <>
            <Modal message={modalMessage} open={modalIsActive} handleClose={closeModal}/>
            <div className='w-full bg-white py-16 shadow-md' id="form">
                <div className="lg:w-70 md:w-3/4 sm:w-4/5 w-4/5 mx-auto">
                    <div className='py-5'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-aidProjectColor2'>Submit Application</h1>
                    </div>
                    <form className='py-5' onSubmit={handleOnSubmit}>
                        <Input type="text" name="orgName" handleInputOnChange={handleOnChange} value={nomineeDetails.orgName} label="Name of Organisation" placeholder="" width="w-full" />
                        <Input type="text" name="address" handleInputOnChange={handleOnChange} value={nomineeDetails.address} label="Address" placeholder="" width="w-full" />
                        <Input type="number" name="noOfEmployee" handleInputOnChange={handleOnChange} value={nomineeDetails.noOfEmployee} label="Number of Employees" placeholder="" width="w-full" />
                        <div className='flex flex-col md:flex-row justify-between'>
                            <Dropdown name="annualMarketing" handleChange={handleOnChange} value={nomineeDetails.annualMarketing} label="Annual Marketing Spend" width="w-full md:w-49%" options={marketingSpendOptions} />
                            <Dropdown name="annualTurnover" handleChange={handleOnChange} value={nomineeDetails.annualTurnover} label="Annual Business Turnover" width="w-full md:w-49%" options={businessTurnoverOptions} />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <Dropdown name="category" handleChange={handleCategoryOnChage} value={category} label="Category" width="w-full md:w-49%" options={CategoryOptions} />
                            {
                                category === "Others" &&
                                <div className='flex md:hidden'>
                                    <Input type="text" name="category" handleInputOnChange={handleOtherCategoryOnChage} value={otherCategory} label="Others (Please specify)" width="w-full md:w-49%" placeholder="" />
                                </div>
                            }
                            <Input type="number" name="yearsOfOp" handleInputOnChange={handleOnChange} value={nomineeDetails.yearsOfOp} label="Years in Operation" width="w-full md:w-49%" placeholder="" />
                        </div>
                        {
                            category === "Others" &&
                            <div className='hidden md:block'>
                                <Input type="text" name="category" handleInputOnChange={handleOtherCategoryOnChage} value={otherCategory} label="Others (Please specify)" width="w-full md:w-49%" placeholder="" />
                            </div>
                        }
                        
                        <div className="w-full py-2">
                            <label className='w-full text-base font-medium'>Is your organisation registered:<span className="text-charity-color5 ml-1">*</span></label>
                            <div className="flex justify-start items-center w-full">
                                <RadioButton name="isOrgRegistered" label="Yes" width="4" handleOnChange={handleOnChange} value="true" defaultValue={nomineeDetails.isOrgRegistered} />
                                <RadioButton name="isOrgRegistered" label="No" width="4" handleOnChange={handleOnChange} value="false" defaultValue={nomineeDetails.isOrgRegistered} />
                            </div>
                        </div>
                        <Comment name="aboutOrg" handleInputOnChange={handleOnChange} rows={4} cols={6} value={nomineeDetails.aboutOrg} label="About your organisation (max 150 words)" placeholder="" />
                        <Comment name="whyMerit" handleInputOnChange={handleOnChange} rows={4} cols={6} value={nomineeDetails.whyMerit} label="Why do you believe you merit our support  (max 150 words)" placeholder="" />
                        <Comment name="howImpactBusiness" handleInputOnChange={handleOnChange} rows={4} cols={6} value={nomineeDetails.howImpactBusiness} label="How will it impact your business (max 150 words)" placeholder="" />
                        <Input type="text" name="website" handleInputOnChange={handleOnChange} value={nomineeDetails.website} label="Company Website" placeholder="" width="w-full" required={false}/>
                        <Input type="text" name="linkedin" handleInputOnChange={handleOnChange} value={nomineeDetails.linkedin} label="Company LinkedIn" placeholder="" width="w-full" required={false}/>
                        <Input type="text" name="facebook" handleInputOnChange={handleOnChange} value={nomineeDetails.facebook} label="Company Facebook" placeholder="" width="w-full" required={false}/>
                        <Input type="text" name="instagram" handleInputOnChange={handleOnChange} value={nomineeDetails.instagram} label="Company Instagram" placeholder="" width="w-full" required={false}/>
                        <div className='w-full py-2'>
                            <label className="w-full text-base font-medium">Key people (CEO/MD/Director/COO):<span className="text-charity-color5 ml-1">*</span></label>
                            {
                                nomineeDetails.keyPeople.map((data, index) =>
                                    <>
                                        <Input type="text" id={index} name="name" handleInputOnChange={handleInputChange} value={data.name} label={`${index+1}. Name`  } placeholder="" width="w-full" />
                                        <div className='flex flex-col md:flex-row justify-between'>
                                        <Input type="email" id={index} name="email" handleInputOnChange={handleInputChange} value={data.email} label="Email" placeholder="" width="w-full md:w-49%"/>
                                        <Input type="text" id={index} name="phone" handleInputOnChange={handleInputChange} value={data.phone} label="Phone Number" placeholder="" width="w-full md:w-49%"/>   
                                        </div>
                                    {
                                        index === nomineeDetails.keyPeople.length - 1 &&
                                        <div className='w-full flex justify-end text-aidProjectColor2'>
                                        {
                                            nomineeDetails.keyPeople.length === 1 &&
                                            <i className='pl-4 pt-4 text-2xl cursor-pointer' onClick={handleAddInput}><RiAddLine /></i>
                                        }
                                        {
                                            nomineeDetails.keyPeople.length > 1 &&
                                            <i className="pl-4 pt-4 text-2xl cursor-pointer" onClick={handleDeleteInput}><MdDeleteForever /></i>
                                        }
                                            
                                        </div>}
                                    
                                    </>
                                )
                            }
                        </div>
                        <Dropdown 
                            name="source" 
                            handleChange={handleSourceOnChage} 
                            value={source} 
                            label="How did you hear about this project?" 
                            width="w-full md:w-49%" options={sourceOptions} 
                            placeholder=""
                        />
                        {
                            source === "Others" &&
                            <Input type="text" name="source" handleInputOnChange={handleOtherSourceOnChage} value={otherSource} label="Others (Please specify)" width="w-full md:w-49%" placeholder=""/>
                        }
                        <div className=' py-7'>
                            <h1 className=' text-red-600 text-lg font-semibold'>Declaration</h1>
                            <p className='text-red-600'>By submitting this application, as the authorised representative of the mentioned legal entity, you hereby certify that:</p>
                            <ul className='text-red-600 list-disc list-inside text-justify'>
                                {
                                    declarationList.map((list, index) =>{
                                        return( <li>{list}</li>)
                                    })
                                }
                            </ul>
                        </div>
                        <button type="submit" className={`bg-aidProjectColor2 py-3 w-48 rounded-lg font-bold text-base flex items-center justify-center my-4 text-white ${isLoading ? "opacity-60" : "opacity-100"}`}  disabled={isLoading}> 
                            { isLoading ? <Loader color='white' size={20} />: "SUBMIT" }
                        </button>
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default NomineeForm