import React, { useEffect } from 'react'
import ShoppingMall from '../../src/components/Advert/ShoppingMall';
import Layout from "../../src/layout/Layout";

function ShoppingMallSuperstores() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <Layout
      footerStatus={true}
      title="Shopping Mall Advertising Agency in Nigeria | NIMBUS MEDIA"
      description="Nimbus Media Is the Leading Shopping Mall Advertising Agency in Nigeria with a Network of Shopping Malls and Superstores in Lagos, Abuja, Port Harcourt, Kano, Oyo, Ogun, Asaba, Delta, Abia, Enugu, etc."
    >
      <ShoppingMall />
    </Layout>
  )
}

export default ShoppingMallSuperstores;