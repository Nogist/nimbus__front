import React, { useState, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loader({ color, size }) {

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return(
    <BeatLoader color={color} loading={true} css={override} size={size} />
  )
}

export default Loader;
