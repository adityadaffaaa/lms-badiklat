import React from "react";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import {
  dataLeaf,
  months
} from "../../static/dashboard";
import { stringAvatar } from "../../settings";
import Dashboard from "@/layouts/dashboard/Dashboard";
import { Link, usePage } from "@inertiajs/react";

export const Peserta = ({ pesertaData, leafData }) => {
  const { role_id } = usePage().props.auth.user

  const roles = {
    management: role_id === 1 ? 1 : 0,
    panitia: role_id === 2 ? 1 : 0,
    fasilitator: role_id === 3 ? 1 : 0,
  }
  // const tglMulai = new Date();

  const leafOnGoing = dataLeaf.filter(({ status }) => status.berlangsung);
  const leafIsDone = dataLeaf.filter(({ status }) => status.selesai);

  return (
    <section className={`mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full h-full gap-6`}>
      <h5 className='text-heading5 text-neutral-600'>Daftar LEAF</h5>
      {
        roles.fasilitator ?
          <>
            <p className="text-paragraph1 text-neutral-500">Berlangsung</p>
            <div className={`flex flex-wrap gap-5`}>
              {
                leafData.map(({ id, leaf_title, mulai, selesai, pesertas }, index) => {
                  const dateParse = (date) => {
                    const d = new Date(date)
                    const hari = d.getDate()
                    const bulan = d.getMonth()
                    const tahun = d.getFullYear()
                    const parse = `${hari} ${months[bulan]} ${tahun}`
                    return parse
                  }
                  return <Link key={index} href={`/peserta/${id}`} className="p-4 flex flex-col group bg-white shadow-defaultShadow rounded-lg gap-4 flex-[1_1_360px] transition-default hover:bg-skyBlue70 hover:text-white">
                    <h5 className="text-heading5 text-neutral-600 group-hover:text-inherit">{index + 1}.  {leaf_title}</h5>
                    <div className="flex flex-row text-neutral-500 gap-4 group-hover:text-inherit">
                      <div className="flex flex-col">
                        <h2 className="text-heading2">{pesertas.slice(0, 10).length}</h2>
                        <p className="text-paragraph5">Jumlah Peserta</p>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Tanggal Pelaksanaan</p>
                      <p className="text-paragraph4 text-neutral-400 leading-5 group-hover:text-inherit">{dateParse(mulai)} - {dateParse(selesai)}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 ">
                      <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Peserta</p>
                      <AvatarGroup max={5}>
                        {pesertas.slice(0, 10).map(({ nama }, index) => (
                          <Avatar key={index} {...stringAvatar(nama)} />
                        ))}
                      </AvatarGroup>
                    </div>
                  </Link>
                }
                )
              }
            </div>
            <p className="text-paragraph1 text-neutral-500">Selesai</p>
            <div className={`flex flex-wrap gap-5 `}>
              {
                leafData.map(({ id, leaf_title, mulai, selesai, pesertas }, index) => {
                  const dateParse = (date) => {
                    const d = new Date(date)
                    const hari = d.getDate()
                    const bulan = d.getMonth()
                    const tahun = d.getFullYear()
                    const parse = `${hari} ${months[bulan]} ${tahun}`
                    return parse
                  }
                  return <Link key={index} href={`/peserta/${id}`} className="p-4 flex flex-col group bg-neutral-300 shadow-defaultShadow rounded-lg gap-4 flex-[1_1_360px] transition-default hover:bg-warm80 hover:text-white">
                    <h5 className="text-heading5 text-neutral-600 group-hover:text-inherit">{index + 1}.  {leaf_title}</h5>
                    <div className="flex flex-row text-neutral-500 gap-4 group-hover:text-inherit">
                      <div className="flex flex-col">
                        <h2 className="text-heading2">{pesertas.slice(0, 10).length}</h2>
                        <p className="text-paragraph5">Jumlah Peserta</p>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Tanggal Pelaksanaan</p>
                      <p className="text-paragraph4 text-neutral-400 leading-5 group-hover:text-inherit">{dateParse(mulai)} - {dateParse(selesai)}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 ">
                      <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Peserta</p>
                      <AvatarGroup max={5}>
                        {pesertas.slice(0, 10).map(({ nama }, index) => (
                          <Avatar key={index} {...stringAvatar(nama)} />
                        ))}
                      </AvatarGroup>
                    </div>
                  </Link>
                }
                )
              }

            </div>
          </>
          :
          <div className={`flex flex-wrap gap-5`}>
            {
              leafData.map(({ id, leaf_title, mulai, selesai, pesertas }, index) => {
                const dateParse = (date) => {
                  const d = new Date(date)
                  const hari = d.getDate()
                  const bulan = d.getMonth()
                  const tahun = d.getFullYear()
                  const parse = `${hari} ${months[bulan]} ${tahun}`
                  return parse
                }
                return <Link key={index} href={`/peserta/${id}`} className="p-4 flex flex-col group bg-white shadow-defaultShadow rounded-lg gap-4 flex-[1_1_360px] transition-default hover:bg-skyBlue70 hover:text-white">
                  <h5 className="text-heading5 text-neutral-600 group-hover:text-inherit">{index + 1}.  {leaf_title}</h5>
                  <div className="flex flex-row text-neutral-500 gap-4 group-hover:text-inherit">
                    <div className="flex flex-col">
                      <h2 className="text-heading2">{pesertas.slice(0, 10).length}</h2>
                      <p className="text-paragraph5">Jumlah Peserta</p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Tanggal Pelaksanaan</p>
                    <p className="text-paragraph4 text-neutral-400 leading-5 group-hover:text-inherit">{dateParse(mulai)} - {dateParse(selesai)}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 ">
                    <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Peserta</p>
                    <AvatarGroup max={5}>
                      {pesertas.slice(0, 10).map(({ nama }, index) => (
                        <Avatar key={index} {...stringAvatar(nama)} />
                      ))}
                    </AvatarGroup>
                  </div>
                </Link>
              }
              )
            }

          </div>
      }
    </section >
  );
};

Peserta.layout = page => <Dashboard children={page} title={"Peserta"} />

export default Peserta;
