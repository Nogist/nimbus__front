import React, {useState, useContext} from 'react'
import { MdClose } from "react-icons/md";
import { TeamProfileContext } from "../../context/TeamProfileContext";
import Backdrop from './Backdrop';

function UpdateProfileModal(props) {
    const { editProfile } = useContext(TeamProfileContext);
    const [ image, setImage ] = useState(props.image);
    const [ imageIsSet, setImageIsSet ] = useState(false);
    const [ teamProfile, setTeamProfile ] = useState({
        bio:props.bioValue,
        name: props.nameValue,
        position: props.positionValue,
    });
    const [ file, setFile ] = useState(props.image);

    const handleFormOnSubmit = (event) =>{
        event.preventDefault();
        props.handleCloseUpdateModal(false);
        if(imageIsSet){
            const formData = new FormData();
            formData.append('photo',file);
            formData.append('name',teamProfile.name);
            formData.append('bio',teamProfile.bio);
            formData.append('position',teamProfile.position);
            console.log("success");
            editProfile(props.id,formData);
        }
        else{
            editProfile(props.id,teamProfile);
        }
    }
    const handleInputOnChange = (event) =>{
        if(event.target.name !== "photo"){
            setTeamProfile((prevData) =>{
                return { ...prevData, [event.target.name] : event.target.value }
            })
        }
        else{
            if(event.target.files && event.target.files[0]){
                setFile(event.target.files[0]);
                const reader = new FileReader();
                reader.onload = (e) =>{
                    setImageIsSet(true);
                    setImage(e.target.result);
                }
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    }
    const handleOnDragOver = (event) =>{
        event.preventDefault();
        event.stopPropagation();
    }
  return (
    <>
        <Backdrop handleBackDrop={props.onClick} />
        <div className="fixed overflow-auto top-2/4 left-2/4 w-700 h-550 bg-white z-80 mt-275 ml-350">
            <div className="h-10 flex justify-end items-center pr-10 top-0 bg-primary13 sticky left-0 w-full">
                <i className='text-white text-2xl cursor-pointer' onClick={props.onClick}>{<MdClose />}</i>
            </div>
            <form onSubmit={handleFormOnSubmit} className="w-full h-[calc(100%_-_40px)] overflow-auto relative">
                <div className="flex w-full h-[calc(100%_-_40px)] py-10">
                    <div className="flex justify-center items-center relative w-2/4">
                        <img src={image} alt="" className='object-cover w-4/5 cursor-pointer'/>
                        <label htmlFor="profile-img" className='absolute w-3/5 flex justify-center items-center p-10 border-2 border-primary3'>Select Image</label>
                        <input className='' id="profile-img" name="photo" type="file" accept="image/*" style={{display:"none"}} onChange={handleInputOnChange} onDragOver={handleOnDragOver} onDrop={handleInputOnChange}/>
                    </div>
                    <div className="flex justify-center items-center w-2/4">
                        <div className='w-4/5 mx-auto'>
                            <label className="inline-block">Name:</label>
                            <input className='w-full rounded-lg border border-black mb-1' type="text" name="name" placeholder="John Doe" defaultValue={props.nameValue} onChange={handleInputOnChange} required/>
                            <label className="inline-block">Position:</label>
                            <select className='w-full rounded-lg border border-black mb-1' name="position" onChange={handleInputOnChange} required>
                                <option disabled selected>Position</option>
                                {
                                    props.positionValue.map((positions) =>{
                                        return(
                                            <option>{positions.position}</option>
                                        )
                                    }) 
                                }
                            </select>
                            <label className="inline-block">Bio:</label>
                            <textarea className='w-full rounded-lg border border-black mb-1' name="bio" placeholder="Bio" rows="7" defaultValue={props.bioValue} onChange={handleInputOnChange} required/>
                        </div>
                    </div>
                </div>
                <div className="bottom-0 justify-between bg-primary13 w-full h-10 flex py-1 px-7 z-30 left-0">
                    <button className='text-white rounded-md border-none w-12 bg-primary3 border border-primary3 hover:text-primary3 hover:bg-transparent' onClick={props.onClick}>Close</button>
                    <button className='text-white rounded-md border-none w-12 bg-primary3 border border-primary3 hover:text-primary3 hover:bg-transparent' type="submit">Add</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default UpdateProfileModal;