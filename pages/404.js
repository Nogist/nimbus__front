import React, { useEffect } from 'react'
import Header from '../src/components/header/Header';
import Footer from "../src/components/footer/Footer";
import Page_Not_Found from "../src/components/PageNotFound";

export default function PageNotFound() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
        <Header />
        <Page_Not_Found />
        <Footer />
    </>
  )
}
