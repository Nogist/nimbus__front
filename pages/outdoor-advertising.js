import React, { useEffect, useState } from 'react'
import BookACall from '../src/components/BookACall/BookACall'
import Header from '../src/components/header/Header'
import Layout from '../src/layout/Layout'

function BookCall() {

  
  useEffect(()=>{
    window.scrollTo(0,0)
     
  },[])
  
  return (
    <>
    <Layout
      footerStatus={true}
      title="Outdoor Advertising Company in Nigeria - Book A Call | Nimbus Media"
      description="We Are the Leading Outdoor Advertising Company in Nigeria with a OOH Media Network in High Traffic Locations across the Country. Let's Help Grow Your Brand."
    >
      <Header />
      <BookACall /> 
    </Layout>
    </>
  )
}

export default BookCall