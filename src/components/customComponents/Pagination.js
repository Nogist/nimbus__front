import React,{useState} from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

function CustomPagination(props){
    const [ firstPageIndex, setPageFirstIndex ] = useState(1);
    const [postPerPage] = useState(props.postPerPage);
    const [ numOfPages ] = useState(Math.ceil(props.numOfPosts / postPerPage))
    const [ lastPageIndex, setPageLastIndex ] = useState(numOfPages > 3 ? 3 : numOfPages );
    
    
    const onClick = (number) =>{
        if(number === lastPageIndex && number < numOfPages){
            setPageLastIndex(lastPageIndex + 1)
            setPageFirstIndex(firstPageIndex + 1)
            props.handleSetCurrentPage(props.currentPage + 1);
        }else if(number === firstPageIndex && number > 1){
            setPageLastIndex(lastPageIndex -1)
            setPageFirstIndex(firstPageIndex - 1)
            props.handleSetCurrentPage(props.currentPage - 1);
        }
        props.handleSetPage(number);
    }
    const handleNext = () =>{
        if(props.currentPage === lastPageIndex){
            setPageLastIndex(lastPageIndex + 1)
            setPageFirstIndex(firstPageIndex + 1)
            props.handleSetCurrentPage(props.currentPage + 1);
        }else{
            props.handleSetCurrentPage(props.currentPage + 1);
        }
        }
    const handlePrev = () =>{
        if(props.currentPage === firstPageIndex){
            setPageLastIndex(lastPageIndex - 1)
            setPageFirstIndex(firstPageIndex - 1)
            props.handleSetCurrentPage(props.currentPage - 1);
        }else{
            props.handleSetCurrentPage(props.currentPage - 1);
        }
    }
    const Pagination = ({items}) =>{
        return(
            <ul className='flex justify-center items-center'>
                {items}
            </ul>
        )
    }
    const Next = ({ currentPage }) =>{
        return(
            <div className={`w-12 h-10 border mx-1 border-primary3 cursor-pointer hover:bg-gray-400 hover:text-white flex justify-center items-center text-2xl ${currentPage === numOfPages && "opacity-40 pointer-events-none"}`} onClick={handleNext}>
                <MdKeyboardArrowRight />
            </div>
        )
    }
   
    const Prev = ({ currentPage }) =>{
        return(
            <div className={`w-12 h-10 border mx-1 border-primary3 cursor-pointer hover:bg-gray-400 hover:text-white flex justify-center items-center text-2xl ${currentPage === 1 && "opacity-40 pointer-events-none"}`} onClick={handlePrev}>
                <MdKeyboardArrowLeft />
            </div>
        )
    }
    const PaginationItem = ({ currentPage, number, onClick}) =>{
        return(
            <li className={`px-3 py-2 border mx-1 border-primary3 cursor-pointer hover:bg-gray-400 hover:text-white ${number === currentPage ? "text-gray-50 bg-primary3": "text-primary3"}`} onClick={onClick}>
                {number}
            </li>
        )
    }

    let items = [];
        for (let number = firstPageIndex; number <= Math.ceil(lastPageIndex); number++) {
            items.push(
                <PaginationItem key={number} currentPage={props.currentPage} number={number} onClick={onClick.bind(null,number)} />
            );
        }
        return (
            props.numOfPosts > postPerPage && 
            <div className='w-full flex justify-center items-center'>
                <Prev currentPage={props.currentPage} />
                {
                    firstPageIndex > 1 &&
                    <i><HiDotsHorizontal /></i>
                }
                <Pagination items={items}/>
                {
                    lastPageIndex < numOfPages &&
                    <i><HiDotsHorizontal /></i>
                }
                <Next numOfPosts={props.numOfPosts} currentPage={props.currentPage} />
            </div>
       )
}

export default CustomPagination;
