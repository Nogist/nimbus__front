import React from 'react'
import AdminLayout from '../../../src/layout/AdminLayout';
import AdminGallery from "../../../src/components/gallery/AdminGallery";
import { useRouter } from 'next/router';

function gallery() {
  

  return (
    <AdminLayout section={""} pathname={"/admin/gallery"}>
        <AdminGallery section={""} />
    </AdminLayout>
  )
}
export default gallery
