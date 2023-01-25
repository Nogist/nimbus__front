import React, { useEffect } from 'react'
import Layout from "../../src/layout/Layout";
import GuerillaAdvertising from '../../src/components/Advert/GuerillaAdvertising';

function Guerilla_Advertising() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <Layout
      footerStatus={true}
      title="Guerilla Advertising Agency in Lagos, Nigeria | NIMBUS MEDIA"
      description="Nimbus Media Is the Leading Guerilla Advertising Agency in Nigeria That Leverage Unconventional, Low Cost Advertising Tactics to Boost Sales and Consumer Actions."
    >
      <GuerillaAdvertising />
    </Layout>
  )
}

export default Guerilla_Advertising;