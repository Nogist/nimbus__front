import { React, createContext, useState, useEffect } from "react";
import axios from "axios";

export const GalleryContext = createContext({});

const GalleryContextProvider = (props) =>{
    
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const galleryURl = baseURL + "gallery";

    const [ gallery, setGallery ] = useState([]);
    const [ modalIsActive, setModalIsActive ] = useState(false);
    const [ token, setToken ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ modalMessage, setModalMessage ] = useState({
        msg: "",
        status: 0
    });

    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }

    const loadImages = () =>{
        setIsLoading(true)
        axios.get(galleryURl)
        .then((response) =>{
            if(response.data.status === "success"){
            setGallery(response.data.data.images);
            setIsLoading(false);
            }
        })
        .catch((err) =>{
            setIsLoading(false);
            setGallery([]);
        })
    }

    const addImage = (payload) =>{
        setIsLoading(true);
        axios.post(galleryURl, payload, config)
        .then((res) =>{
            if(res.data.status === "success"){
                setModalMessage({
                    msg: "Images Uploaded Successfully !!",
                    status: 1
                });
                loadImages();
                setIsLoading(false);
                setModalIsActive(true); 
            }
        })
        .catch(err =>{
            setModalMessage({
                msg: "Error Occurred On Uploading Image!!",
                status: 0
            });
            setIsLoading(false);
            setModalIsActive(true);
        })
    }

    const deleteImage = (id) =>{
        setIsLoading(true)
        axios.delete(galleryURl +"/" + id, config)
        .then((response) =>{
            setModalMessage({
                msg: "Image Deleted Successfully !!!",
                status: 1
            });
            loadImages();
            setIsLoading(false);
            setModalIsActive(true);
            
        })
        .catch((err) =>{
            setModalMessage({
                msg:  "Error occured on deleting an image",
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
    
    
    return(
        <GalleryContext.Provider 
            value={{
                gallery, 
                loadImages, 
                addImage, 
                isLoading, 
                setIsLoading, 
                modalMessage, 
                modalIsActive,
                setModalIsActive,
                setModalMessage,
                deleteImage
            }}>
            {props.children}
        </GalleryContext.Provider>
    )
}
export default GalleryContextProvider;