import React, { useEffect } from 'react'
import PrivacyPolicy from '../src/components/about/PrivacyPolicy'
import Layout from '../src/layout/Layout'

function PrivacyPage() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout
      footerStatus={true}>
        <div className='mt-20 w-full'>
            <PrivacyPolicy />
        </div>
    </Layout>
  )
}

export default PrivacyPage

