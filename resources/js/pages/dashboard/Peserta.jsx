import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { dataPeserta, dataLeaf } from "../../static/dashboard";
import { stringAvatar } from "../../settings";

import Dashboard from "@/layouts/dashboard/Dashboard";
import { Link } from "@inertiajs/react";
import routes from '@/routes';
export const Peserta = () => {
  const { role } = routes[0];
  return (
    <section className={`mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full h-full ${role.fasilitator ? "md:border-2 md:border-skyBlue10 gap-3 p-4 bg-white shadow-defaultShadow rounded-lg" : "gap-6"}`}>
      <h5 className='text-heading5 text-neutral-600'>Daftar Peserta</h5>
      <div className={`flex ${role.fasilitator ? "flex-col w-full gap-3" : "flex-wrap gap-5"} `}>
        {role.fasilitator ? dataPeserta.map((value, index) => {
          return (
            <Link
              key={index}
              href='/peserta/detail-peserta'
              className='flex flex-col md:flex-row gap-2 w-full p-3 bg-white items-center justify-between transition-default hover:shadow-defaultShadow rounded-lg'
            >
              <div className='flex flex-row items-center w-full md:w-[40%] justify-between'>
                <div className='flex flex-row gap-3 items-center'>
                  <AccountCircleIcon
                    sx={{ fontSize: 36 }}
                    className=' text-skyBlue70
                '
                  />
                  <div className='flex flex-col'>
                    <h5 className='text-heading5 text-neutral-600'>
                      {value.name}
                    </h5>
                    <p
                      className='text-paragraph2 text-neutral-400
                  '
                    >
                      {value.nip}
                    </p>
                  </div>
                </div>
                <p className='text-paragraph2 text-neutral-600'>
                  {value.totalJp}
                </p>
                <span
                  className={`py-1 px-2 rounded-full text-neutral-50 ${value.status === "Online" ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                >
                  {value.status}
                </span>
              </div>
              <div className='point-keaktifan flex flex-col w-full gap-2 md:w-1/2 '>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-paragraph3 text-neutral-600 my-0'>
                    Poin Keaktifan
                  </p>
                  <p className='text-paragraph1 text-skyBlue70 my-0'>
                    {value.point}%
                  </p>
                </div>
                <LinearProgress variant='determinate' value={value.point} />
              </div>
            </Link>
          );
        }) :
          dataLeaf.map(({ id, jmlPeserta, tanggalMulai, tanggalSelesai, peserta }, index) =>
            <Link key={index} href="/peserta/list-peserta" className="p-4 flex flex-col group bg-white shadow-defaultShadow rounded-lg gap-4 flex-[1_1_360px] transition-default hover:bg-skyBlue70 hover:text-white">
              <h5 className="text-heading5 text-neutral-600 group-hover:text-inherit">Leaf {id}</h5>
              <div className="flex flex-row text-neutral-500 gap-4 group-hover:text-inherit">
                <div className="flex flex-col">
                  <h2 className="text-heading2">{jmlPeserta}</h2>
                  <p className="text-paragraph5">Jumlah Peserta</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Tanggal Pelaksanaan</p>
                <p className="text-paragraph4 text-neutral-400 leading-5 group-hover:text-inherit">{tanggalMulai} - {tanggalSelesai}</p>
              </div>
              <div className="flex flex-col items-start gap-2 ">
                <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Peserta</p>
                <AvatarGroup max={5}>
                  {peserta.map((name, index) => (
                    <Avatar key={index} {...stringAvatar(name)} />
                  ))}
                </AvatarGroup>
              </div>
            </Link>)
        }
      </div>
    </section>
  );
};

Peserta.layout = page => <Dashboard children={page} title={"Peserta"} />

export default Peserta;
