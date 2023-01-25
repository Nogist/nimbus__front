import React, { useEffect } from 'react'
import Contact from '../src/components/contact/Contact'
import Layout from '../src/layout/Layout'

function contact() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout
      footerStatus={true}>
        <div className='mt-20 w-full'>
            <Contact />
        </div>
    </Layout>
  )
}

export default contact

