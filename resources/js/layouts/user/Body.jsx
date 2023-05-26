import React from 'react'
import { NavBar, Footer } from '../../components/user'
import {
  Beranda,
  Kursus,
  DetailKursus,
  TanyaKami,
  Fasilitator
} from "../../pages/user"
import { Route, Routes } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Beranda />}></Route>
        <Route path='/kursus' element={<Kursus />}></Route>
        <Route path='/kursus/detail-kursus' element={<DetailKursus />}></Route>
        <Route path='/fasilitator' element={<Fasilitator />}></Route>
        <Route path='/tanya-kami' element={<TanyaKami />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default Body