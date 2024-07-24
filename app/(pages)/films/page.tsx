import React, { Suspense } from 'react'
import Films from './Films'
import DashboardLayout from '@/app/common/layouts/dashboardLayout'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Films',
  description: 'This is the Films page of Demoviez web app',
  alternates: {
    canonical: '/films',
  },
};

const Page = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
      <Films />
      </Suspense>
    </DashboardLayout>
  )
}

export default Page
