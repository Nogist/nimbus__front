import React from 'react'
import AdminLayout from '../../../src/layout/AdminLayout';
import NomineeDetails from "../../../src/components/charity/NomineeDetails";
import { useRouter } from 'next/router';

function NomineeDetailsPage() {

    const { pathname } = useRouter();
    
    return (
        <AdminLayout section={""} pathname={pathname}>
            <NomineeDetails />
        </AdminLayout>
    )
}

export default NomineeDetailsPage