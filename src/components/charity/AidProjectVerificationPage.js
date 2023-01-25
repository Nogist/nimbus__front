import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import backgroundImage from "../../assets/images/nimbusAidProjectImg.png";
import { AidProjectContext } from "../../context/AidProjectContext";
import NominateInput from "../customComponents/NominateInput";
import SelectField from "../customComponents/SelectField";
import Loader from "../customComponents/Loader";
import Overlay from "../customComponents/Overlay";
import Modal from "../customComponents/Modal";
import { useRouter } from "next/router";
import AidProjectVotingPage from "./AidProjectVotingPage";

function AidProjectVerificationPage() {
  
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
    verifyVote,
  } = useContext(AidProjectContext);
  const router = useRouter();
  const [ query, setQuery] = useState(router.query.verify);
  const leaderboardRef = useRef(null);


  const voteVerification = () => {
    if (query!== undefined) {
      //change verify method
      verifyVote(query, leaderboardRef);
    }
  };
  
  const closeModal = (state) => {
    if (router.pathname === "/vote/verify") {
      router.push("/vote");
    }
    setModalIsActive(false);
  };
  
  useEffect(() =>{
    setQuery(router.query.verify)
  },[router.query.verify])

  useEffect(() =>{
    voteVerification()
  },[query])

  return (
    <>
      {isLoading && (
        <Overlay position="fixed" zIndex="z-120">
          <Loader size={25} color="#4286FF" />
        </Overlay>
      )}
      <Modal
        message={modalMessage}
        open={modalIsActive}
        handleClose={closeModal}
      />
      <AidProjectVotingPage />
    </>
  );
}

export default AidProjectVerificationPage;
