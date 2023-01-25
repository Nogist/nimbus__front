import React, { useState, useEffect, useContext } from "react";
import AidProjectVerificationPage from '../../src/components/charity/AidProjectVerificationPage'
import Layout from "../../src/layout/Layout";


function verify() {

 
 

 

  return (
    <Layout
        footerStatus={true}
        title="Nimbus Aid Project"
        description=""
    >
        <AidProjectVerificationPage
        />
    </Layout>
    
  )
}

export default verify
