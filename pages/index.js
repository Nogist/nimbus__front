import React, { useEffect, useState, useContext } from 'react'
import About from '../src/components/about/About'
import Brand from '../src/components/brand/Brand'
import Charity from '../src/components/charity/Charity'
import Contact from '../src/components/contact/Contact'
import LandingPageSlider from '../src/components/landingPageSlider/LandingPageSlider'
import LandingPageTeam from '../src/components/team/LandingPageTeam'
import Layout from '../src/layout/Layout'
import { AidProjectContext } from '../src/context/AidProjectContext'
import CountDownSection from '../src/components/charity/CountDownSection'

export default function Home() {

  return (
    <>
      <Layout
        footerStatus={true}
        title="Digital Out-of-Home Advertising Agency in Nigeria | NIMBUS MEDIA"
        description="We Are the Leading Digital Out-of-home Advertising Agency in Nigeria with Networks Nationwide and Proven Records across Digital OOH Media Platforms."
      >
        <LandingPageSlider />
        <CountDownSection />
        <About />
        <Charity />
        <Brand />
        <LandingPageTeam />
        <Contact />
      </Layout>
    </>
  )
}
