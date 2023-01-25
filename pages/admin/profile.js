import React from 'react'
import AdminLayout from '../../src/layout/AdminLayout';
import TeamProfileAdmin from '../../src/components/team/TeamProfileAdmin';
import { useRouter } from 'next/router';

function profile() {
  const { pathname } = useRouter();
  return (
    <AdminLayout section={""} pathname={pathname}>
        <TeamProfileAdmin />
    </AdminLayout>
  )
}

export default profile