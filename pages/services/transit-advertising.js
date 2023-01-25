import React, { useEffect } from 'react'
import Layout from "../../src/layout/Layout";
import Transit from '../../src/components/Advert/Transit';

function transitAdvertising() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <Layout
      footerStatus={true}
      title="Transit Advertising Agency in Lagos, Nigeria | NIMBUS MEDIA"
      description="Nimbus Media Is the Leading Transit Advertising Agency in Lagos with a Network of OOH Media across Major Roads, Bus Shelters, Train Stations, Parks, Terminals and Cabs in Nigeria."
    >
      <Transit />
    </Layout>
  )
}

export default transitAdvertising