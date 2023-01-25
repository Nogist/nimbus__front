import React, { useEffect } from 'react'
import Billboard from '../../src/components/Advert/Billboard';
import Layout from "../../src/layout/Layout";

function BillboardAdvertising() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout
      footerStatus={true}
      title="Billboard Advertising Agency in Nigeria | NIMBUS MEDIA"
      description="Nimbus Media is the Leading Billboard Advertising Agency in Lagos with Digital Out-of-home Media Network in High Traffic Locations and Malls across Nigeria."
    >
      <Billboard />
    </Layout>
  )
}

export default BillboardAdvertising