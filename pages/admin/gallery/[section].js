import React from 'react'
import AdminLayout from '../../../src/layout/AdminLayout';
import AdminGallery from "../../../src/components/gallery/AdminGallery";
import { useRouter } from 'next/router';

function gallery() {
  const { query, pathname } = useRouter();
  const { section } = query;
  return (
    <AdminLayout section={section ? section : ""} pathname="/admin/gallery">
        <AdminGallery section={section ? section : ""}/>
    </AdminLayout>
  )
}
export default gallery
