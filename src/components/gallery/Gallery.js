import React, { useEffect, useContext, useState } from 'react'
import { tabData } from './tabData';
import { useRouter } from 'next/router'
import { GalleryContext } from '../../context/GalleryContext';
import Pagination from "../customComponents/Pagination";
import SkeletonLoader from '../customElements/SkeletonLoader';
import GalleryCard from './GalleryCard';
import Tab from "./Tab"
import ImageModal from './ImageModal';
import { AiOutlineClose } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';


function Gallery() {
  const { gallery, loadImages, isLoading }  = useContext(GalleryContext);
  const router = useRouter();
  const { asPath: section } = router;
  const {section: filterBy} = router.query;
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [ currentGallery, setCurrentGallery ] = useState([]);
  const [ currentPage, setCurrentPage] = useState(1);
  const [ postPerPage] = useState(9);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost  = indexOfLastPost-postPerPage;
  const currentPosts  = currentGallery.slice(indexOfFirstPost, indexOfLastPost);
  const  totalPosts = currentGallery.length;
  const [ backDropIsActive , setBackDropIsActive ] = useState(false);
  const [ id, setId ] = useState("");
  const [ imageIndex, setImageIndex ] = useState(0);
  const [ animate , setAnimation ] = useState(true);
  const [ imageNotFound,setImageNotFound ] = useState("");

  const handleSectionOnClick = () =>{
    setAnimation(true);
    setTimeout(()=>{
        setAnimation(false)
    } , 1000);
  }

  const handleSetPage = (number) =>{
    setCurrentPage(number);
    window.scrollTo(0, 0);
  }

  const filterGallery = (galleryData) =>{
    if(galleryData.category.toLowerCase() === filterBy){
        return galleryData; 
    }
    if(filterBy === undefined){
        return galleryData; 
    }
  }

  const closeBackDrop = () =>{
    setBackDropIsActive(false);
  }

  const handleImgOnClick = (index) =>{
    setImageIndex(index);
    setBackDropIsActive(true)
  }

  

  useEffect(()=>{
    loadImages();
  }, [])

  useEffect(()=>{
     window.scrollTo(0, 0);
        if(gallery.filter(filterGallery).length === 0){
            // setImageNotFound(image_Not_Found);
        }
            setCurrentGallery(
                gallery.filter(filterGallery).map((data, index) =>{
                    return{
                        ...data,
                        index: index
                    }
                })
                );
            setCurrentPage(1);
  }, [section, gallery])
  return (
    <>
      {backDropIsActive &&
        <div className="w-full h-screen bg-black opacity-80 z-80 fixed left-0 top-0 cursor-pointer" onClick={closeBackDrop}>
        </div>
      }
      {backDropIsActive && 
        <>
            <i className='fixed right-5 top-5 text-white text-3xl cursor-pointer z-120 hover:text-charity-color2' onClick={closeBackDrop}><AiOutlineClose /></i>
            <ImageModal index={imageIndex} gallery={currentGallery}/>
        </>
      }
      <div className="w-full py-12 text-center">
        <h1 className="text-primary6 font-black text-4xl pb-5">Gallery</h1>
        <div className='mx-auto w-full sm:w-500 px-3 sm:px-0 py-10'>
          <div className="w-full flex justify-evenly items-center text-brand-color1 font-semibold">
            {
              tabData.map((data) =>{
                return(
                  <Tab key={data.id} path={data.path} text={data.text} onClick={handleSectionOnClick} section={section} />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="w-full relative min-h-500">
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
                      <GalleryCard inView={inView ? true : false} key={index} galleryImg={images.imageUrl} title={images.category} id={images._id} deleteBtnActive={false} handleImgOnClick={handleImgOnClick.bind(null, images.index)}/>    
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
        <Pagination numOfPosts={totalPosts}  handleSetPage={handleSetPage} currentPage={currentPage} postPerPage={postPerPage} />
      </div> */}
    </>
  )
}

export default Gallery