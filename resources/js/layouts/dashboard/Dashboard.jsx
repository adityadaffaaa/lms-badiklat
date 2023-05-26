import React from 'react';
import SideNavBar from './SideNavBar';
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom';

import {
  Overview,
  Peserta,
  Jadwal,
  ForumChat,
  Kelompok,
  DetailPeserta,
  DetailKalender,
  Fasilitator,
  DetailFasilitator
} from '../../pages/dashboard';

const Dashboard = () => {
  return (
    <div className="mx-6 my-3 flex flex-col md:flex-row md:mx-0 md:my-0 md:h-screen items-center md:items-start">
      <SideNavBar />
      <main className="flex flex-col md:items-start w-full lg:w-[calc(100%-270px)] gap-3 md:p-3">
        <NavBar />
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/peserta" element={<Peserta />}></Route>
          <Route path="/chat" element={<ForumChat />}></Route>
          <Route path="/jadwal" element={<Jadwal />}></Route>
          <Route path="/chat/kelompok" element={<Kelompok />}></Route>
          <Route path="/peserta/detail-peserta" element={<DetailPeserta />}></Route>
          <Route path="/detail-kalender" element={<DetailKalender />}></Route>
          <Route path="/fasilitator" element={<Fasilitator />}></Route>
          <Route path='/fasilitator/detail-fasilitator' element={<DetailFasilitator />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
