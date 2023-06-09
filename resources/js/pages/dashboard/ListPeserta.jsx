import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinearProgress from "@mui/material/LinearProgress";
import { dataPeserta } from "../../static/dashboard";
import Dashboard from "@/layouts/dashboard/Dashboard";
import { Link } from "@inertiajs/react";
export const ListPeserta = () => {
  return (
    <section className={`mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full h-full md:border-2 md:border-skyBlue10 gap-3 p-4 bg-white shadow-defaultShadow rounded-lg`}>
      <h5 className='text-heading5 text-neutral-600'>Daftar Peserta</h5>
      <div className={`flex flex-col w-full gap-3 `}>
        {dataPeserta.map(({ name, nip, totalJp, status, point }, index) => {
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
                      {name}
                    </h5>
                    <p
                      className='text-paragraph2 text-neutral-400
                  '
                    >
                      {nip}
                    </p>
                  </div>
                </div>
                <p className='text-paragraph2 text-neutral-600'>
                  {totalJp}
                </p>
                <span
                  className={`py-1 px-2 rounded-full text-neutral-50 ${status === "Online" ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                >
                  {status}
                </span>
              </div>
              <div className='point-keaktifan flex flex-col w-full gap-2 md:w-1/2 '>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-paragraph3 text-neutral-600 my-0'>
                    Poin Keaktifan
                  </p>
                  <p className='text-paragraph1 text-skyBlue70 my-0'>
                    {point}%
                  </p>
                </div>
                <LinearProgress variant='determinate' value={point} />
              </div>
            </Link>
          );
        })
        }
      </div>
    </section>
  )
}

ListPeserta.layout = page => <Dashboard children={page} title={"List Peserta"} />

export default ListPeserta;