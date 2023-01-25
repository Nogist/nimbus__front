import React, { useEffect } from 'react'
import Layout from "../../src/layout/Layout";
import BrandActivation from '../../src/components/Advert/BrandActivation';

function brandActivation() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <Layout
      footerStatus={true}
      title="Brand Activation Agency in Lagos, Nigeria | NIMBUS MEDIA"
      description="Nimbus Media Is the Leading Brand Activation Agency in Nigeria with Vast Experience in Experiential Marketing, Offline or Virtual Events, Flash Mob, Street and Market Shows."
    >
      <BrandActivation />
    </Layout>
  )
}

export default brandActivation;