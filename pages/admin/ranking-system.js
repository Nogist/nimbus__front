import React from 'react'
import AdminLayout from '../../src/layout/AdminLayout'
import RankingSystemAdmin from "../../src/components/team/RankingSystemAdmin";
import { useRouter } from 'next/router';

function RankingSystem() {
  const { pathname } = useRouter();
  return (
    <AdminLayout section={""} pathname={pathname}>
        <RankingSystemAdmin />
    </AdminLayout>
  )
}

export default RankingSystem