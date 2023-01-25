import React, { useEffect } from 'react'
import Layout1 from '../../src/layout/Layout1'
import AboutUs from "../../src/components/about/AboutUs";

function About() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout1
      title="Outdoor Advertising Agency in Lagos, Nigeria | NIMBUS MEDIA"
      description="Nimbus Media is the Leading Outdoor Advertising Agency in Lagos, Nigeria with a Network of OOH Nationwide and Proven Records with Brands across All Sectors."
    >
      <AboutUs />
    </Layout1>
  )
}

export default About