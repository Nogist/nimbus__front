import React, {useState,useRef,useEffect,useContext} from 'react'
import { TiUpload } from "react-icons/ti";
import GalleryCard from './GalleryCard';
import Pagination from "../customComponents/Pagination"
import DeleteModal from '../customComponents/DeleteModal';
import { adminTabData } from './adminTabData';
import Tab from "./Tab"
import { GalleryContext } from "../../context/GalleryContext";
import SkeletonGallery from "../customComponents/Skeletons/SkeletonGallery";
import Overlay from '../customComponents/Overlay';
import Loader from 'react-spinners/BeatLoader';
import { useRouter } from "next/router";
import { useInView } from 'react-intersection-observer';
import SkeletonLoader from '../customElements/SkeletonLoader';
import Modal from "../customComponents/Modal";

function AdminGallery({ section:filterBy }) {
    const header = useRef(null);
    const router = useRouter();
    const { asPath } = router;
    
    const { ref, inView } = useInView({
        threshold: 0,
      });
    
    const { gallery, loadImages, isLoading, deleteImage, modalIsActive, setModalIsActive, modalMessage, setModalMessage, addImage } = useContext(GalleryContext);
    const [ loading, setLoading ] = useState(false);
    const [ category, setCategory ] = useState("");
    const [ selectedImage, setSelectedImage ] = useState([]);
    const [ uploadedImages, setUploadedImages ] = useState([]);
    const [ formErrors, setFormErrors ] = useState({});
    const [ deleteText, setDeleteText ] = useState({
        msg: "",
        status: ""
    });
    const [ currentGallery, setCurrentGallery ] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ postPerPage] = useState(9);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost  = indexOfLastPost-postPerPage;
    const currentPosts  = currentGallery.slice(indexOfFirstPost, indexOfLastPost);
    const  totalPosts = currentGallery.length;
    const [ id, setId ] = useState("");
    const [ imageIndex, setImageIndex ] = useState(0);
    const [ animate , setAnimation ] = useState(true);
    const [ imageNotFound,setImageNotFound ] = useState("");
    const [ imageIsDeleted, setImageIsDeleted ] = useState(false);
    const [ sectionIsSet, setSectionIsSet ] = useState(false);
    const [ deleteModalIsActive, setDeleteModalIsActive ] = useState(false)
    const [ deleteMessage, setDeleteMessage ] = useState("");

    const handleSetPage = (number) =>{
        setCurrentPage(number);
        
    }
    const chooseFile = useRef(null);

    const handleInputOnChange = (e) =>{
        setCategory(e.target.value);
    }
    
    const handleSectionOnClick = () =>{
        setTimeout(()=>{
            setAnimation(false)
        } , 1000);
    }
    const filterGallery = (galleryData) =>{
        if(galleryData.category.toLowerCase() === filterBy){
            return galleryData; 
        }
        // if(filterBy === ""){
        //     return galleryData; 
        // }
    }
    const validate = (input) => {
        let errors = {
            status : true
        }

        if(!input){
            errors.status = false;
            errors.message = "Section is required !!!";
        }
        return errors;
    }
    
    const handleOnSave = (e) =>{
        e.preventDefault();
        setFormErrors(validate(category));
        if(validate(category).status){
            var formData = new FormData();
            formData.append("category", category);
            for(let i=0; i< uploadedImages.length; i++){
                formData.append("photo",uploadedImages[i]);
            }
            addImage(formData);
            setUploadedImages([]);
            setSelectedImage([]);
           
        }
        
    }
    const handleOnDelete = (id) =>{
        setDeleteMessage("Are you sure you want to delete this image ?")
        setDeleteModalIsActive(true);
        setId(id);
    }
    const handleDeletePosition = () =>{
        setDeleteModalIsActive(false);
        deleteImage(id);
    }
    const closeDeleteModal = () =>{
        setDeleteModalIsActive(false);
    }
    const closeModal = () =>{
        setModalIsActive(false);
    }

    const handleFileOnchange = (event) =>{
        let tempArr = [];
        if(event.target.files && event.target.files.length <= 10){
            setUploadedImages(event.target.files)
            const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file))
                setSelectedImage((prevState) => prevState.concat(fileArray))
                Array.from(event.target.files).map((file) => URL.revokeObjectURL(file))
        }
        else{
            setSelectedImage([]);
            setModalMessage({
                msg: "Can't Select more than 10 images !!",
                status: 0
            });
            setModalIsActive(true);
        }
        
        // setUploadedImages([]);
        // _.forEach(event.target.files, file =>{
        //     formData.append('photo', file);
        // })
        // // formData.append("category",)
        // if(event.target.files && event.target.files.length <= 10){
        //     const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file))
        //     console.log(fileArray);
        //     setSelectedImage((prevState) => prevState.concat(fileArray))
        //     Array.from(event.target.files).map((file) => URL.revokeObjectURL(file))
        // }
        // else{
        //     alert("Cant select more than 10 images");
        // }
    }
    const handleImgOnClick = (index) =>{
        setImageIndex(index);
      }
    const renderPhotos = (source) =>{
        return source.map((photo ,id) =>{
            return (
                <div className="col-span-1">
                    <img src={photo} key={id} alt={photo} className="h-40 w-44 object-cover"/>
                </div>
            )
        })
    }
    const handleOnClose = () =>{
        setFormErrors({
            status:true,
            message:""
        })
        setSelectedImage([]);
}

    const handleOnUpload = () =>{
        chooseFile.current.click();
    }
    useEffect(()=>{
        loadImages();
      }, [])

      useEffect(()=>{
         window.scrollTo(0, 0);
            // if(gallery.filter(filterGallery).length === 0){
            //     setCurrentGallery([]);
            // }
            setCurrentGallery([]);
            let filter_Gallery = gallery.filter(filterGallery).map((data, index) =>{
                return{
                    ...data,
                    index: index
                }
            })
            setCurrentGallery(
                filter_Gallery.length === 0 ? gallery : filter_Gallery
                );
            // setCurrentPage(1);
      }, [filterBy,currentPage, gallery])

      useEffect(()=>{
        document.getElementById('header').scrollIntoView({behavior: 'smooth'})
      }, [currentPage])
    return (
        <>
            <Modal message={modalMessage} open={modalIsActive} handleClose={closeModal}/>
            {
                isLoading &&
                <Overlay position="fixed" zIndex="z-120">
                    <Loader size={25} color="#4286FF"/>
                </Overlay>
            } 
          <DeleteModal message={deleteMessage} open={deleteModalIsActive} handleClose={closeDeleteModal} onDelete={handleDeletePosition} id={id} />
          <div id="header" className='bg-gradient-to-b from-brand-color2 via-brand-color3 to-brand-color4'>
            <div className="w-full py-12 text-center bg-background-logo bg-no-repeat bg-contain bg-top pt-10" >
                <div className='mx-auto w-4/5 pt-5'>
                    <h1 className=" text-primary3 font-black text-4xl pb-5 text-left opacity-80">Gallery Update</h1>    
                </div>
                
                <div className='mx-auto w-full sm:w-500 px-3 sm:px-0 py-10'>
                    <div className="w-full flex justify-evenly items-center text-brand-color1 font-semibold">
                        {
                            adminTabData.map((data) =>{
                            return(
                            <Tab key={data.id} path={data.path} text={data.text} onClick={handleSectionOnClick} section={asPath} />
                            )
                        })
                        }
                    </div>
                </div>
                <div>
                {
                    selectedImage.length === 0 &&
                    <div className="w-550 py-12 mx-auto relative rounded bg-image-upload">
                        <div className="w-2/4 mx-auto relative text-center text-primary3 ">
                            <p className='mx-auto pb-3 text-base font-semibold'>(Drag and Drop Image file here)</p>
                            <input id="file" multiple type="file" accept="image/*" maxLength="5" onChange={handleFileOnchange} ref={chooseFile} className="hidden"/>
                            <div onClick={handleOnUpload} className="flex justify-center items-center border-2 border-primary3 py-3 shadow-xl rounded-40 cursor-pointer hover:bg-primary3 hover:text-white">
                                <i className="text-3xl">{<TiUpload />}</i>
                                <h1 className='text-2xl font-extrabold pl-1'>Upload</h1>
                            </div>
                        </div>
                    </div>
                }
                {
                    selectedImage.length !== 0 &&
                        <form onSubmit={handleOnSave}>
                            <div className='pl-10'>
                                <div className="text-brand-color1 flex flex-col justify-start">
                                    <div className='text-left w-full py-2'>
                                        <label htmlFor="img-section" className="font-bold text-xl">Section</label>
                                    </div>
                                    <select className="md:w-80 w-60 rounded-full border-brand-color1 border-2 px-2 py-2" name="category" onChange={handleInputOnChange}>
                                        <option value="" selected disabled>select Category</option>
                                        <option>Activation</option>
                                        <option>Branding</option>
                                        <option>Digital</option>
                                    </select>
                                </div>
                                <p className="text-red-500 py-2 m-0 text-left">{formErrors.message}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-8 my-10">
                                    {renderPhotos(selectedImage)}
                                </div>
                                <div className="flex justify-start">
                                    <button className="rounded-full bg-brand-color1 text-color28 w-20 md:w-32 h-10 md:h-12 mr-3 border-2 hover:border-brand-color1 hover:text-brand-color1 hover:bg-white" type="submit">Save</button>
                                    <button className="border-brand-color1 border-2 rounded-full w-20 md:w-32 h-10 md:h-12 hover:bg-brand-color1 hover:text-white" onClick={handleOnClose}>Close</button>
                                </div>
                            </div>
                        </form>
                }
                </div>
            </div>
            <div className="w-full relative min-h-500 pt-24">
                <div className="animate-fade w-4/5 mx-auto"> 
                {/* <Image className="image-not-found" src={imageNotFound} alt="image_notfound" />
                :  */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {isLoading &&
                    [1,2,3,4,5,6].map((n,index) =>{ 
                        return( 
                            <div key={index} className="col-span-1 w-full relative h-96 overflow-hidden cursor-pointer">
                            <SkeletonLoader/>
                            </div>
                    )})
                } 
                {
                currentPosts.length !== 0 &&
                    currentPosts.map((images ,index) =>{
                        return(
                            <GalleryCard inView={inView ? true : false} key={index} galleryImg={images.imageUrl} title={images.category} id={images._id} deleteBtnActive={true} handleImgOnDelete={handleOnDelete} handleImgOnClick={handleImgOnClick.bind(null, images.index)}/>    
                        )
                    })
                }
                </div> 
                {
                    currentGallery.length === 0 &&
                    <div className='text-center w-52 h-52'>
                        {/* <Image src={imageNotFound} alt="no_image" layout='fill' className="object-contain" /> */}
                    </div>
                }
            
                </div>
            </div>
            {/* <div className="flex justify-center items-center mx-auto w-4/5 py-16">
                <Pagination numOfPosts={totalPosts} handleSetPage={handleSetPage} currentPage={currentPage} handleSetCurrentPage={setCurrentPage} postPerPage={postPerPage} />
            </div>  */}
          </div>
          
        </>
      )
}

export default AdminGallery