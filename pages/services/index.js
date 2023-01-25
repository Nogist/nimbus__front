import React, { useEffect } from 'react'
import Service from '../../src/components/OurServices/Services'
import Layout from "../../src/layout/Layout";

function Services() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout
      footerStatus={true}
      title="Out of Home Advertising Company in Nigeria | NIMBUS MEDIA "
      description="We Are the Leading Out of Home Advertising Company in Nigeria with Out-of-home Media Network in High Traffic Locations across the Country."
    >
      <Service />
    </Layout>
  )
}

export default Services