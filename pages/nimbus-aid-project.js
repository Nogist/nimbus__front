import React, { useEffect } from 'react';
import NimbusAidProjectComponent from '../src/components/charity/NimbusAidProject';
import Layout from '../src/layout/Layout';

function NimbusAidProject() {

    return (
        <Layout
            footerStatus={true}
            title="Nimbus Aid Project"
            description="Nimbus Aid Project"
        >
            <NimbusAidProjectComponent />
        </Layout>
        
    )
}

export default NimbusAidProject;
