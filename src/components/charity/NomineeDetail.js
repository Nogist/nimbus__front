import React, { useContext, useEffect } from 'react'
import { AidProjectContext } from '../../context/AidProjectContext'
import Overlay from '../customComponents/Overlay';
import Loader from 'react-spinners/BeatLoader';
import Input from "../charity/Input"
import Link from 'next/link';
import RadioButton from "../customComponents/RadioButton";
import Comment from "../charity/Comment"
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from "next/router";

function NomineeDetail({ id }) {
    const { getNomineeDetailById, nomineeDetail, token } = useContext(AidProjectContext);
    const router = useRouter();

    const goBack =() =>{
        router.back();
    }
    useEffect(() =>{
        const tempToken = window.localStorage.getItem("nm-token")
        if(id){
            getNomineeDetailById(id, tempToken);
        }
        else{
            router.push("/404");
        }
    }, [])
    return (
        <div className="w-full bg-background-logo bg-no-repeat bg-contain bg-top pt-10">
            <div className="xl:w-85 w-90 mx-auto">
                <h1 className="font-black md:py-5 py-3 text-brand-color1 md:text-4xl text-2xl opacity-80">
                    Nominee Detail
                </h1> 
                <a onClick={goBack} className=' text-primary3 hover:white text-2xl hover:scale-110 bg-primary3 w-10 h-10 cursor-pointer'>
                    <BiArrowBack />
                </a>
                <div className="w-full pt-4 pb-5">
                    
                        {/* isLoading ? 
                        <Overlay position="fixed" zIndex="z-120">
                            <Loader size={25} color="#4286FF"/>
                        </Overlay>
                        : */}
                        <div className="w-full">
                            <form className='py-5'>
                                <Input type="text" name="orgName" value={nomineeDetail.orgName} label="Name of Organisation" placeholder="Name" width="w-full" disabled={true} />
                                <Input type="text" name="address" value={nomineeDetail.address} label="Address" placeholder="Address" width="w-full" disabled={true} />
                                <Input type="number" name="noOfEmployee" value={nomineeDetail.noOfEmployee} label="Number of Employees" placeholder="" width="w-full" disabled={true}/>
                                <div className='flex flex-col md:flex-row justify-between'>
                                    <Input name="annualMarketing" value={nomineeDetail.annualMarketing} label="Annual Marketing Spend" width="w-full md:w-49%" disabled={true}/>
                                    <Input name="annualTurnover" value={nomineeDetail.annualTurnover} label="Annual Business Turnover" width="w-full md:w-49%" disabled={true}/>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between'>
                                    <Input type="text" name="orgName" value={nomineeDetail.category} label="Category" placeholder="Name" width="w-full md:w-49%" disabled={true} />
                                    <Input type="number" name="yearsOfOp" value={nomineeDetail.yearsOfOp} label="Years in Operation" width="w-full md:w-49%" placeholder="" disabled={true} />
                                </div>
                                <div className="w-full py-2">
                                    <label className='w-full text-base font-medium'>Is your organisation registered:<span className="text-charity-color5 ml-1">*</span></label>
                                    <div className="flex justify-start items-center w-full">
                                        <RadioButton name="isOrgRegistered" label="Yes" width="4" value="true" defaultValue={nomineeDetail.isOrgRegistered} disabled={true}/>
                                        <RadioButton name="isOrgRegistered" label="No" width="4" value="false" defaultValue={nomineeDetail.isOrgRegistered} disabled={true} />
                                    </div>
                                </div>
                                <Comment name="aboutOrg" rows={4} cols={6} value={nomineeDetail.aboutOrg} label="About your organisation (max 150 words)" placeholder="" disabled={true}/>
                                <Comment name="whyMerit" rows={4} cols={6} value={nomineeDetail.whyMerit} label="Why do you believe you merit our support  (max 150 words)" placeholder="" disabled={true}/>
                                <Comment name="howImpactBusiness" rows={4} cols={6} value={nomineeDetail.howImpactBusiness} label="How will it impact your business (max 150 words)" placeholder="" disabled={true}/>
                                <Input type="text" name="website" value={nomineeDetail.website} label="Website" placeholder="www.example.com" width="w-full" disabled={true} required={false}/>
                                <Input type="text" name="linkedin" value={nomineeDetail.linkedin} label="Company LinkedIn" placeholder="" width="w-full" disabled={true} required={false}/>
                                <Input type="text" name="facebook" value={nomineeDetail.facebook} label="Company Facebook" placeholder="" width="w-full" disabled={true} required={false}/>
                                <Input type="text" name="instagram" value={nomineeDetail.instagram} label="Company Instagram" placeholder="" width="w-full" disabled={true} required={false}/>
                                <div className='w-full py-2'>
                                    <label className="w-full text-base font-medium">Key people (CEO/MD/Director/COO):<span className="text-charity-color5 ml-1">*</span></label>
                                    {
                                        Object.keys(nomineeDetail).length !== 0 &&
                                        nomineeDetail.keyPeople.map((data, index) =>
                                            <>
                                                <Input type="text" id={index} name="name" value={data.name} label={`${index+1}. Name`  } placeholder="Name" width="w-full" disabled={true}/>
                                                <div className='flex flex-col md:flex-row justify-between'>
                                                <Input type="email" id={index} name="email" value={data.email} label="Email" placeholder="Email" width="w-full md:w-49%" disabled={true}/>
                                                <Input type="text" id={index} name="phone" value={data.phone} label="Phone Number" placeholder="Phone Number" width="w-full md:w-49%" disabled={true}/>   
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <Input type="text" name="source" label="How did you hear about this project?" value={nomineeDetail.source} placeholder="" width="w-full md:w-49%" disabled={true}/>
                            </form>
                        </div>
                </div>
                </div>
        </div>
  )
}

export default NomineeDetail