import React, { useEffect } from 'react'
import Lampost from '../../src/components/Advert/Lampost';
import Layout from "../../src/layout/Layout";

function LampPostAdvertising() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout
      footerStatus={true}
      title="Lamp Post Advertising Agency in Nigeria | NIMBUS MEDIA"
      description="Nimbus Media Is the Leading Lamp Post Advertising Agency in Lagos with OOH Media Network in High Traffic Locations and Major Cities across Nigeria."
    >
      <Lampost />
    </Layout>
  )
}

export default LampPostAdvertising;