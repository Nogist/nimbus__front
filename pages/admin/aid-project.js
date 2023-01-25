import React from 'react'
import AdminLayout from '../../src/layout/AdminLayout';
import AidProjectAdmin from '../../src/components/charity/AidProjectAdmin';
import { useRouter } from 'next/router';

function AidProject() {
  const { pathname } = useRouter();
  return (
    <AdminLayout section={""} pathname={pathname}>
        <AidProjectAdmin />
    </AdminLayout>
  )
}

export default AidProject;