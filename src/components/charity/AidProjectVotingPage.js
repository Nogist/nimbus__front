import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import slideImgXXL from "../../assets/images/nomineeBackgroundImg2732-x-1536.jpg";
import slideImgL from "../../assets/images/nomineeBackgroundImg1366 x 766.jpg";
import slideImgMD from "../../assets/images/nomineeBackgroundImg1080-x-1920.jpg";
import slideImgSquare from "../../assets/images/nomineeBackgroundImg768-x-512.jpg";
import { AidProjectContext } from "../../context/AidProjectContext";
import NominateInput from "../customComponents/NominateInput";
import SelectField from "../customComponents/SelectField";
import Loader from "../customComponents/Loader";
import Overlay from "../customComponents/Overlay";
import Modal from "../customComponents/Modal";
import Pagination from "../customComponents/Pagination";
import NomineeLeaderBoard from "./LeaderBoard";
import { nomineeData } from "./nomineeData";
import parse from 'html-react-parser';
import aidBackgroundImage from "../../assets/images/aidProjectBackground.jpeg"

function AidProjectVotingPage({ leaderboardRef }) {
  const {
    votingDetails,
    voteNominee,
    getNominees,
    topNominees,
    setVotingDetails,
    isLoading,
    modalIsActive,
    modalMessage,
    setModalIsActive,
    allSortedVotes,
    getSortedVotes
  } = useContext(AidProjectContext);

  const ref = useRef(null);
  const form = useRef(null);

  const size = useWindowSize();
  const backgroundImage =
    size.width > 2000
      ? slideImgXXL
      : size.width < 2000 && size.width >= 1000
      ? slideImgL
      : size.width < 1000 && size.width >= 650
      ? slideImgSquare
      : slideImgMD;

 

  const handleNominateNowBtn = () =>{
    form.current?.scrollIntoView({ behavior: "smooth" });
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = nomineeData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = nomineeData.length;

  const handleOnChange = (key, value) => {
    setVotingDetails((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    voteNominee(votingDetails);
  };

  const handleVoting = (id) => {
    handleOnChange("charityName", id)
    form.current?.scrollIntoView({ behavior: "smooth" });
  };
  const closeModal = () => {
    setModalIsActive(false);
  };

  const NomineeInfo = ({ img, orgName, info, nomineeId }) => {
    return (
      <div className="xl:w-full w-full flex pt-6 pb-16 justify-center items-start">
        <div className="mx-auto w-75%">
          <h1 className="text-2xl font-bold text-primary3 pb-4 md:hidden block text-center">
            {orgName}
          </h1>
          <div className="flex flex-col justify-center  sm:block">
            <div className="relative w-64 h-64 float-left rounded-lg mx-auto sm:mr-5 mb-3 shadow-md">
              <Image src={img} objectFit="contain" layout="fill" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary3 pb-3 hidden md:block">
                {orgName}
              </h1>
              {info.map((data, index) => {
                return (
                  <p key={index} className="text-justify mb-3 leading-8">
                    {parse(data)}
                  </p>
                );
              })}
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="bg-aidProjectColor1 font-bold text-sm py-3 px-10 rounded-full no-underline text-white cursor-pointer hover:scale-110 transform duration-300"
                onClick={handleVoting.bind(null, nomineeId)}
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSetPage = (number) => {
    setCurrentPage(number);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClearAll = () =>{
    return false;
  }

  useEffect(() => {
    getSortedVotes()
    getNominees();
  }, []);

  return (
    <>
      {isLoading && (
        <Overlay position="fixed" zIndex="z-120">
          <Loader size={25} color="#4286FF" />
        </Overlay>
      )}
      {modalIsActive && (
        <Modal
          message={modalMessage}
          open={modalIsActive}
          handleClose={closeModal}
        />
      )}
      <div className="w-full relative">
        <div>
          <div className="relative h-screen">
            <Image
              src={backgroundImage}
              layout="fill"
              objectFit="cover"
              alt="aid-project-image"
            />
          </div>
          <div className="absolute bottom-1/4 lg:left-1/4 left-20 w-6/12 m-auto">
            <div className="md:w-80 w-60">
              {/* <h1 className="font-black text-charity-color2 md:text-5xl text-4xl mb-6">NIMBUS AID PROJECT</h1> */}
              {/* <button onClick={handleNominateNowBtn} className=" bg-aidProjectColor1 font-bold text-sm py-4 px-7 rounded-full no-underline text-white cursor-pointer animate-bounce transform hover:scale-110">
                VOTE NOW
              </button> */}
            </div>
          </div>
        </div>
        {/* {
          allSortedVotes.length !== 0 &&
          <div className="w-full shadow-2xl bg-primary2 py-24" ref={leaderboardRef}>
            <NomineeLeaderBoard handleClearAll={handleClearAll} allSortedVotes={allSortedVotes} isLoading={isLoading} showClearBtn={false}/>
          </div>
        } */}
        
        {/* {nomineeData.length !== 0 && (
          <div className="w-full" ref={ref}>
            <div className="w-85 mx-auto py-16">
              <h1 className="text-center font-black text-3xl lg:text-5xl text-primary3">
                Nominees
              </h1>
              <div className="w-full flex flex-wrap items-start justify-start py-10">
                {nomineeData.map((data, index) => {
                  return (
                    <NomineeInfo
                      index={index}
                      info={data.info}
                      orgName={data.orgName}
                      img={data.img}
                      nomineeId={data.nomineeId}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div
          className="bg-charity-color3 pt-16 pb-28 relative"
          id="form"
          ref={form}
        >
          <div className="lg:w-2/4 md:w-3/4 sm:w-4/5 w-4/5 m-auto">
            <p className="text-charity-color5 ml-1 pb-3">
              <span className="mr-1">*</span>Required
            </p>
            <form onSubmit={handleOnSubmit}>
              <NominateInput
                type="text"
                name="name"
                handleChange={handleOnChange}
                value={votingDetails.name}
                label="Name"
                placeholder="Your Name"
              />
              <NominateInput
                type="email"
                name="email"
                handleChange={handleOnChange}
                value={votingDetails.email}
                label="Email"
                placeholder="Your Email"
              />
              <SelectField
                name="charityName"
                handleChange={handleOnChange}
                value={votingDetails.charityName}
                label="Organization Name"
                options={topNominees}
              />
              <button
                type="submit"
                className={`bg-charity-color1 rounded-full py-3 md:w-2/12 sm:w-full w-full font-bold text-base text-brand-color1 hover:scale-110 duration-300 ${
                  isLoading ? "opacity-30" : "opacity-100"
                }`}
                disabled={isLoading}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <button onClick={handleNominateNowBtn} className=" bg-aidProjectColor1 font-bold text-sm py-4 px-7 rounded-full no-underline text-white cursor-pointer animate-bounce transform hover:scale-110 fixed bottom-5 right-8 z-70">
          VOTE NOW
        </button> */}
      </div>
    </>
  );
}

export default AidProjectVotingPage;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
