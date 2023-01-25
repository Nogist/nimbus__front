import React, { useEffect } from 'react'
import Gallery from '../../src/components/gallery/Gallery'
import Layout1 from '../../src/layout/Layout1'

function gallery() {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <Layout1>
        <Gallery />
    </Layout1>
  )
}

export default gallery