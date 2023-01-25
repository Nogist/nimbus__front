import React from 'react'
import AdminLayout from '../../../src/layout/AdminLayout';
import NomineeDetail from "../../../src/components/charity/NomineeDetail";
import { useRouter } from 'next/router';

function NomineeDetailPage() {
    
    const  { query } = useRouter();

  return (
    <AdminLayout section={""} pathname={"/admin/nominee-details/"+query.id}>
        <NomineeDetail id={query.id}/>
    </AdminLayout>
  )
}

export default NomineeDetailPage;