import React, { useState, createContext, useEffect } from 'react'
import axios from "axios";

export const TeamProfileContext = createContext({});

function TeamProfileContextProvider(props) {

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const teamProfileURl = baseURL + "team";
    const positionURl = baseURL + "rank";

    const [ isLoading, setIsLoading ] = useState(false);
    const [ token, setToken ] = useState("");
    const [ teamProfile, setTeamProfile ] = useState([]);
    const [ modalIsActive, setModalIsActive ] = useState(false);
    const [ modalMessage, setModalMessage ] = useState({
        msg: "",
        status: 0
    });
    const [ ranks, setRanks ] = useState([]);
    const [ rank, setRank ] = useState({});

    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }

    const loadTeamProfile = () =>{
        setIsLoading(true)
        axios.get(teamProfileURl)
        .then((response) =>{
            if(response.data.status === "success"){
            setTeamProfile(response.data.data.images);
            setIsLoading(false);
            }
        })
        .catch((err) =>{
            setIsLoading(false);
            console.log(err);
        })
    }
    const createProfile = (data) =>{
        setIsLoading(true)
        axios.post(teamProfileURl,data,config)
        .then((response) =>{
            setModalMessage({
                msg: "Profile Successfully Created!!",
                status: 1
            });
            setIsLoading(false);
            loadTeamProfile();
            setModalIsActive(true);
        })
        .catch((err) =>{
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
    }
    const editProfile = (id,data) =>{
        setIsLoading(true);
        axios.patch(teamProfileURl + "/" + id,data, config)
        .then((response) =>{
            loadTeamProfile();
            setModalMessage({
                msg: "Profile Successfully Edited!!",
                status: 1
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
        .catch((err) =>{
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
    }
    const deleteProfile = (id) =>{
        setIsLoading(true);
        axios.delete(teamProfileURl +"/" + id, config)
        .then((response) =>{
            loadTeamProfile();
            setModalMessage({
                msg: "Profile Deleted Successfully!!",
                status: 1
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
        .catch((err) =>{
            setModalMessage({
                msg: "Error Occured On Deleting Profile!!",
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
    }
    const getPositions = (payload) =>{
        setIsLoading(true);
        axios.get(positionURl, config)
        .then((response) =>{
            if(response.data.status === "success"){
            setRanks(response.data.data.ranks);
            setIsLoading(false);
            }
        })
        .catch((err) =>{
            setIsLoading(false);
            setModalMessage({
                msg: "Error Occured On Generating Positions",
                status: 0
            });
        })
    }
    const getPositionsById = (id) =>{
        axios.get(positionURl +"/" + id, config)
        .then((response) =>{
            // if(response.data.status === "success"){
            setRank({
                priority : response.data.data.rank.priority,
                position: response.data.data.rank.position
             });
        //    }
        })
        .catch((err) =>{
            
        })
    }
    const createPosition = (payload) =>{
        setIsLoading(true);
        axios.post(positionURl, payload, config)
        .then((response) =>{
            getPositions();
            setModalMessage({
                msg: "Rank Successfully Created!!",
                status: 1
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
        .catch((err) =>{
            setModalMessage({
                msg: "Duplicate Fields!!!",
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true); 
        })
    }
    const deletePosition = (id) =>{
        setIsLoading(true);
        axios.delete(positionURl +"/" + id, config)
        .then((response) =>{
            getPositions();
            setModalMessage({
                msg: "Rank Deleted Successfully !!",
                status: 1
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
        .catch((err) =>{
            setModalMessage({
                msg: "Error as Occurred !!",
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true); 
        })
    }
    const updatePosition = (id,payload) =>{
        setIsLoading(true);
        axios.patch(positionURl +"/" + id, payload, config)
        .then((response) =>{
            console.log(response.data.status);
            if(response.data.status === "success"){
                getPositions();
                setModalMessage({
                    msg: "Rank Updated Successfully !!!",
                    status: 1
                });
                setIsLoading(false);
                setModalIsActive(true);
            }
        })
        .catch((err) =>{
            setModalMessage({
                msg: "Duplicate Fields !!!",
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
    }
    

    useEffect(()=>{
        const tempToken = window.localStorage.getItem("nm-token");
        if(tempToken !== null) {
            setToken(tempToken);
        }
    }, [])

    return (
        <TeamProfileContext.Provider 
        value={{
            ranks, 
            token, 
            teamProfile, 
            loadTeamProfile, 
            isLoading, 
            modalIsActive, 
            setModalMessage, 
            modalIsActive, 
            setModalIsActive, 
            modalMessage, 
            createPosition, 
            getPositions, 
            deletePosition, 
            editProfile,
            deleteProfile,
            createProfile,
            updatePosition,
            getPositionsById,
            setRank,
            rank
        }}>
            {props.children}
        </TeamProfileContext.Provider>
    )
}

export default TeamProfileContextProvider;