import React, { useRef } from 'react'
import AidProjectVotingPage from '../../src/components/charity/AidProjectVotingPage'
import Layout from "../../src/layout/Layout";
function vote() {

  const leaderboardRef = useRef(null);

  return (
    <Layout
        footerStatus={true}
        title="Nimbus Aid Project"
        description=""
    >
        <AidProjectVotingPage leaderboardRef={leaderboardRef} />
    </Layout>
    
  )
}

export default vote
