import React from 'react';
import SideNavBar from './SideNavBar';
import NavBar from './NavBar'
import { Head } from '@inertiajs/react'

const Dashboard = ({ children, title, nama }) => {
  return (
    <div className="mx-6 my-3 flex flex-col md:flex-row md:mx-0 md:my-0 md:h-screen items-center md:items-start">
      <Head title={title}></Head>
      <SideNavBar />
      <main className="flex flex-col md:items-start w-full lg:w-[calc(100%-270px)] gap-3 md:p-3">
        <NavBar title={title} nama={nama} />
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
