import React, { useState, createContext, useEffect } from 'react'
import axios from "axios";

export const AidProjectContext = createContext({});

function AidProjectContextProvider(props) {

    const [ modalIsActive, setModalIsActive ] = useState(false);
    const [ countDownId, setcountDownId ] = useState("");
    const [ token, setToken ] = useState("");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const countDownURl = baseURL + "date";
    const voteURl = baseURL + "charity?round=1";
    const nomineesURl = baseURL + "three";
    const nomineeDetailsURL = baseURL + "nap-form";
    const allSortedVotersURL = baseURL + `charity/sorted?round=1`;

    const [ modalMessage, setModalMessage ] = useState({
        msg: "",
        status: -1
    });
    const [ topNominees, setTopNominees ] = useState([]);
    const [ votingDetails, setVotingDetails ] = useState({
        name:"",
        charityName: "",
        email: ""
    })
    const [ isLoading, setIsLoading ] = useState(false);
    const [ countDownDetails,setCountDownDetails ] = useState({
        round: null,
        start: "",
        stop: "",
        title:"",
        button: "off"
    });
    const [ countDownIsSet, setCountDownIsSet ] = useState(false);
    const [ nomineeDetails, setNomineeDetails ] = useState({
        orgName: "",
        address:  "",
        noOfEmployee: "",
        yearsOfOp: "",
        annualMarketing: "",
        annualTurnover: "",
        aboutOrg: "",
        whyMerit: "",
        howImpactBusiness: "",
        website: "",
        linkedin: "",
        facebook: "",
        instagram: "",
        source: "",
        category: "",
        isOrgRegistered: "",
        keyPeople: [{name: "", phone: "", email:""}]
    })
    const [ nomineeDetail, setNomineeDetail ] = useState({});
    const [ nominee_Details, setNominee_Details ] = useState([]);
    const [ allSortedVotes, setAllSortedVotes ] = useState([]);

    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }

    const getCountDown = () =>{
        setIsLoading(true)
        axios.get(countDownURl)
        .then((res) =>{
            if(res.data.status === "success"){
                setIsLoading(false);
                if(res.data.data.entry.length === 0){
                    localStorage.setItem("countDownId", -99);
                    setcountDownId(-99);
                    setCountDownDetails((prevState) =>{
                        return{
                            round: null,
                            start: "",
                            stop: "",
                            title:"",
                            button: "off"
                        }
                    })
                }
                else{
                    localStorage.setItem("countDownId",res.data.data.entry[0]._id );
                    setcountDownId(res.data.data.entry[0]._id );
                    const details = {
                            round: res.data.data.entry[0].round,
                            start: res.data.data.entry[0].start,
                            stop: res.data.data.entry[0].stop,
                            title: res.data.data.entry[0].title,
                            button: res.data.data.entry[0].button
                    }
                    setCountDownDetails((prevState) =>{
                        return{
                            ...details
                        }
                    })
                    setCountDownIsSet(true);
                }
            }
        })
        .catch((err) =>{
            setIsLoading(false);
        })
    } 

    const deleteCountDownConfiguration = (id) =>{
        setIsLoading(true);
        axios.delete(countDownURl + "/" + id, config)
        .then((res) =>{
            localStorage.removeItem("round");
            getCountDown();
            setModalMessage({
                msg: "Timer Deleted Successfully",
                status: 1
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
        .catch(err =>{
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
            setIsLoading(false);
            setModalIsActive(true);
        })
    }

    const createCountDownConfiguration = (payload) =>{
        setIsLoading(true);
        axios.post(countDownURl, payload, config)
        .then((res) =>{
            if(res.data.status === "success"){
                if(res.data.data.entry.length !== 0){
                    localStorage.setItem("round",payload.round);
                    localStorage.setItem("countDownId",res.data.data.entry._id);
                    getCountDown();
                    setModalMessage({
                        msg: "Timer Set Successfully",
                        status: 1
                    })
                    localStorage.setItem("countDownId", -99);
                    setcountDownId(-99);
                    setCountDownDetails((prevState) =>{
                        return{
                            round: null,
                            start: "",
                            stop: "",
                            title:"",
                            button: "off"
                        }
                    })
                    setIsLoading(false);
                    setModalIsActive(true);
                }
            }
        })
        .catch((err) =>{
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
            localStorage.setItem("countDownId", -99);
            setcountDownId(-99);
            setCountDownDetails((prevState) =>{
                return{
                    round: null,
                    start: "",
                    stop: "",
                    title:"",
                    button: "off"
                }
            })
            setIsLoading(false);
            setModalIsActive(true);
        })
    }

    const voteNominee = (payload) =>{
        setIsLoading(true);
        axios.post(voteURl, payload)
        .then((res) =>{
            setVotingDetails({
                name:"",
                charityName: "",
                email: ""
            })
            setIsLoading(false);
            setModalIsActive(true);
            setModalMessage({
                msg: "Please go to your mail to verify your vote.",
                status: 3
            })
        })
        .catch(err =>{
            setIsLoading(false);
            setModalIsActive(true);
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
        })
    }

    const verifyVote = (payload, leaderboardRef) =>{
        if(payload){
            setIsLoading(true);
            axios.patch(`${baseURL}charity?token=${payload}&round=1`)
            .then((res) =>{
                setIsLoading(false);
                setModalIsActive(true);
                setModalMessage({
                    msg: "Your vote is now verified",
                    status: 1
                })
                getSortedVotes();
                leaderboardRef.current?.scrollIntoView({ behavior: "smooth" });
            })
            .catch(err =>{
                setIsLoading(false);
                setModalIsActive(true);
                setModalMessage({
                    msg: err.response.data.message,
                    status: 0
                })
            })
        }
        else{
            setModalMessage({
                msg: "Token or round is null !!",
                status: 0
            })
        }
    }

    const getNominees = () =>{
        axios.get(nomineesURl)
        .then((res) =>{
            if(res.data.data.length !== 0){
                const topNominees = res.data.data;
                setTopNominees(topNominees);
            }
        })
        .catch(err =>{
        })
    }

    const submitNomineeDetails = (payload) =>{
        setIsLoading(true);
        axios.post(nomineeDetailsURL, payload)
        .then((res) =>{
            setNomineeDetails({
                orgName: "",
                address:  "",
                noOfEmployee: "",
                yearsOfOp: "",
                annualMarketing: "",
                annualTurnover: "",
                aboutOrg: "",
                whyMerit: "",
                howImpactBusiness: "",
                website: "",
                linkedin: "",
                facebook: "",
                instagram: "",
                source: "",
                category: "",
                isOrgRegistered: "",
                keyPeople: [{name: "", phone: "", email:""}]
            })
            setIsLoading(false);
            setModalIsActive(true);
            setModalMessage({
                msg: "Application has been submitted",
                status: 1
            })
        })
        .catch(err =>{
            setIsLoading(false);
            setModalIsActive(true);
            setNomineeDetails({
                orgName: "",
                address:  "",
                noOfEmployee: "",
                yearsOfOp: "",
                annualMarketing: "",
                annualTurnover: "",
                aboutOrg: "",
                whyMerit: "",
                howImpactBusiness: "",
                website: "",
                linkedin: "",
                facebook: "",
                instagram: "",
                source: "",
                category: "",
                isOrgRegistered: "",
                keyPeople: [{name: "", phone: "", email:""}]
            })
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
        })
    }

    const getNomineeDetails = (payload) =>{
        setIsLoading(true);
        axios.get(nomineeDetailsURL,
            {
                headers: {
                    'Authorization': 'Bearer ' + payload
                    }
            }
        )
        .then((res) =>{
            if(res.data.data.length !== 0){
                const response = res.data.data.map((data, index)=>{
                    return{
                        index: index+1,
                        ...data
                    }
                })
                setNominee_Details(
                    response
                );
            }else{
                setNominee_Details(res.data.data);
            }
            setIsLoading(false);
        })
        .catch(err =>{
            setIsLoading(false);
            // setModalIsActive(true);
            // setModalMessage({
            //     msg: err.response.data.message,
            //     status: 0
            // })
        })
    }

    const getNomineeDetailById = (id,payload) =>{
        setIsLoading(true);
        axios.get(nomineeDetailsURL + "/" + id, 
        {
            headers: {
                'Authorization': 'Bearer ' + payload
                }
        })
        .then((res) =>{
            setNomineeDetail(res.data.data);
            // setIsLoading(false);
        })
        .catch(err =>{
            setIsLoading(false);
            // setModalIsActive(true);
            // setModalMessage({
            //     msg: err.response.data.message,
            //     status: 0
            // })
        })
    }
    
    const getSortedVotes = () =>{
        axios.get(allSortedVotersURL, config)
        .then((res) =>{
            if(res.data.status === "success"){
                setIsLoading(false);
                if(res.data.data.stats.length !== 0){
                    setAllSortedVotes(res.data.data.stats.map(data =>(
                        data
                    )))
                }
                else{
                    setAllSortedVotes([])
                }
            }
        })
        .catch((err) =>{
            setIsLoading(false);
        })
        
    }
    
    
    useEffect(() =>{
        getCountDown();
    }, [])

    useEffect(()=>{
        const tempToken = window.localStorage.getItem("nm-token");
        if(tempToken) {
            setToken(tempToken);
        }
    }, [])

    // useEffect(()=>{
    //     const tempId = window.localStorage.getItem("countDownId");
    //     if(tempId !== null) {
    //         setcountDownId(parseInt(tempId));
    //     }
    // }, [])

    return (
        <AidProjectContext.Provider 
            value={{ 
                nomineeDetails,
                setNomineeDetails,
                submitNomineeDetails,
                voteNominee, 
                getCountDown, 
                countDownDetails, 
                setCountDownDetails, 
                createCountDownConfiguration, 
                deleteCountDownConfiguration, 
                countDownId, 
                isLoading, 
                setIsLoading, 
                modalIsActive, 
                setModalIsActive, 
                modalMessage, 
                setModalMessage, 
                countDownIsSet,
                votingDetails,
                setVotingDetails,
                getNominees,
                topNominees,
                verifyVote,
                nominee_Details,
                getNomineeDetails,
                getNomineeDetailById,
                nomineeDetail,
                setNomineeDetail,
                token,
                getSortedVotes,
                allSortedVotes
            }}>
            {props.children}
        </AidProjectContext.Provider>
    )
}

export default AidProjectContextProvider;