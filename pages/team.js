import React, { useEffect } from 'react'
import TeamProfile from '../src/components/team/TeamProfile';
import Layout1 from '../src/layout/Layout1';

function team() {

 useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
      <Layout1>
        <TeamProfile />
      </Layout1>
  )
}

export default team;