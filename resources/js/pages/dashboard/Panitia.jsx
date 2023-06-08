import React from 'react'
import {
  ButtonGradient
} from "../../components/dashboard"
import { dataPanitia } from '@/static/dashboard';
import { Link } from '@inertiajs/react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dashboard from '@/layouts/dashboard/Dashboard';
export const Panitia = () => {
  return (
    <section className='mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex md:border-2 md:border-skyBlue10 flex-col  w-full gap-3 h-full  bg-white shadow-defaultShadow rounded-lg'>
      <div className='flex justify-between p-4'>
        <h5 className='text-heading5 text-neutral-600'>Daftar Panitia</h5>
        <ButtonGradient text={'Tambah Panitia'} icon={<AddIcon />} padY={'py-2'} padX={'px-4'} fontWeight={'font-bold'}></ButtonGradient>
      </div>
      {/* <FasilitatorDialog handleClose={handleClose} open={open} title={"Tambah Panitia"} textButton={"Tambah Tambah Panitia"} /> */}
      <div className='overflow-x-auto'>
        <table className="w-full border-collapse">
          <thead className="border-b-2 text-neutral-500 text-paragraph1">
            <tr>
              <th width="50%" align="left" className="py-3 pl-4 ">
                Nama
              </th>
              <th width="15%" className="" align="left">
                NIP
              </th>
              <th width="20%" align="center">Satuan Kerja</th>
              <th width="15%" ></th>
            </tr>
          </thead>
          <tbody className="text-paragraph2 text-neutral-600">
            {dataPanitia.map(({ nama, nip, satKer }, index) => {
              const oddIndex = index % 2 === 1;
              return <tr key={index} className={`${oddIndex ? "bg-neutral-100" : ""} `}>
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
                <td align="center">{satKer}</td>
                <td align='center' className=''>
                  <Link href='panitia/list-fasilitator'>
                    <ButtonGradient text={"Detail"} padX={"px-4"} padY={"py-1"} />
                  </Link>
                  <IconButton >
                    <DeleteForeverIcon className="text-[#D00000]" sx={{ fontSize: 24 }} />
                  </IconButton>
                </td>
              </tr>

            }
            )}

          </tbody>
        </table>
      </div>

    </section>
  )
}

Panitia.layout = page => <Dashboard children={page} title={"Panitia"} />

export default Panitia