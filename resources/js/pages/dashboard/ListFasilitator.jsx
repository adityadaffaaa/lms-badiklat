import React from 'react'
import { dataLeaf } from '@/static/dashboard'
import { stringAvatar } from '@/settings';
import Dashboard from "@/layouts/dashboard/Dashboard";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Link } from '@inertiajs/react'



export const ListFasilitator = ({ dataLeafFasilitator }) => {

  console.log({
    leaf: dataLeafFasilitator,
  });

  return (
    <section className={`mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full h-full gap-6 `}>
      <h5 className='text-heading5 text-neutral-600'>Daftar Peserta</h5>
      <div className={`flex flex-wrap gap-5 `}>
        {dataLeafFasilitator.map(({ id, fasilitator, pesertas, mulai, selesai }, index) =>
          <Link key={index} href={`/panitia/list-fasilitator/${id}`} className="p-4 flex flex-col group bg-white shadow-defaultShadow rounded-lg gap-4 flex-[1_1_360px] transition-default hover:bg-skyBlue70 hover:text-white">
            <h5 className="text-heading5 text-neutral-600 group-hover:text-inherit">{fasilitator.nama}</h5>
            <div className="flex flex-row text-neutral-500 gap-4 group-hover:text-inherit">
              <div className="flex flex-col">
                <h2 className="text-heading2">{pesertas.length}</h2>
                <p className="text-paragraph5">Jumlah Peserta</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Tanggal Pelaksanaan</p>
              <p className="text-paragraph4 text-neutral-400 leading-5 group-hover:text-inherit">{mulai} - {selesai}</p>
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Peserta</p>
              <AvatarGroup max={5}>
                {pesertas.map(({ nama }, index) => (
                  <Avatar key={index} {...stringAvatar(nama)} />
                ))}
              </AvatarGroup>
            </div>
          </Link>)}
      </div>
    </section>
  )
}
ListFasilitator.layout = page => <Dashboard children={page} title={"Panitia 1"} />

export default ListFasilitator