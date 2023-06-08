import { React, useState } from 'react'
// import { useNavigate } from "react-router-dom";
import {
  ButtonGradient,
  FasilitatorDialog
} from '../../components/dashboard';
import { dataFasilitator } from '../../static/dashboard';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dashboard from '@/layouts/dashboard/Dashboard';
import { Link } from '@inertiajs/react';

export const Fasilitator = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <section className='mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex md:border-2 md:border-skyBlue10 flex-col  w-full gap-3 h-full  bg-white shadow-defaultShadow rounded-lg'>
      <div className='flex justify-between p-4'>
        <h5 className='text-heading5 text-neutral-600'>Daftar Fasilitator</h5>
        <ButtonGradient onclick={handleOpen} text={'Tambah Fasilitator'} icon={<AddIcon />} padY={'py-2'} padX={'px-4'} fontWeight={'font-bold'}></ButtonGradient>
      </div>
      <FasilitatorDialog handleClose={handleClose} open={open} title={"Tambah Fasilitator"} textButton={"Tambah Fasilitator"} />
      <div className='overflow-x-auto'>
        <table className="w-full border-collapse">
          <thead className="border-b-2 text-neutral-500 text-paragraph1">
            <tr>
              <th width="30%" align="left" className="py-3 pl-4 ">
                Nama
              </th>
              <th width="10%" className="" align="left">
                NIP
              </th>
              <th width="15%" align="center">Satuan Kerja</th>
              <th width="10%" align="center">ST</th>
              <th width="10%" align="center">SKM</th>
              <th width="10%" align="center">SPJ Honor</th>
              <th width="15%" ></th>
            </tr>
          </thead>
          <tbody className="text-paragraph2 text-neutral-600">
            {dataFasilitator.map(({ nama, nip, bidang, st, skm, spj }, index) => {
              const oddIndex = index % 2 === 1;
              return (
                <tr key={index} className={`${oddIndex ? "bg-neutral-100" : ""} `}>
                  <td className=" py-3 pl-4" align="left">
                    <div className='flex items-center gap-3 text-neutral-500'>
                      <AccountCircleIcon className='text-skyBlue70' sx={{ fontSize: 36 }} />
                      <h5 className='text-heading5 '>
                        {nama}
                      </h5>
                    </div>
                  </td>
                  <td className="" align="left">
                    {nip}
                  </td>
                  <td align="center">{bidang}</td>
                  <td align="center">
                    <span
                      className={`py-1 px-2 rounded-full text-neutral-50 ${st ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                    >{`${st ? "Sudah Ada" : "Belum Ada"}`}</span>
                  </td>
                  <td align="center">
                    <span
                      className={`py-1 px-2 rounded-full text-neutral-50 ${skm ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                    >{`${skm ? "Sudah Ada" : "Belum Ada"}`}</span>
                  </td>
                  <td align="center">
                    <span
                      className={`py-1 px-2 rounded-full text-neutral-50 ${spj ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                    >{`${spj ? "Sudah Ada" : "Belum Ada"}`}</span>
                  </td>
                  <td align='center' className=''>
                    <Link href='fasilitator/detail-fasilitator'>
                      <ButtonGradient text={"Detail"} padX={"px-4"} padY={"py-1"} />
                    </Link>
                    <IconButton >
                      <DeleteForeverIcon className="text-[#D00000]" sx={{ fontSize: 24 }} />
                    </IconButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </section>
  )
}

Fasilitator.layout = page => <Dashboard children={page} title={"Fasilitator"} />

export default Fasilitator