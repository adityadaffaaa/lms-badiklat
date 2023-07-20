import React from 'react'
import { dataPeserta } from '@/static/dashboard';

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from '@/layouts/dashboard/Dashboard';


export const ListPesertaPanitia = ({ peserta }) => {
  return (
    <section className='mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex md:border-2 md:border-skyBlue10 flex-col  w-full gap-3 h-full  bg-white shadow-defaultShadow rounded-lg'>
      <div className='flex justify-between p-4'>
        <h5 className='text-heading5 text-neutral-600'>Daftar Peserta</h5>
      </div>
      <div className='overflow-x-auto'>
        <table className="w-full border-collapse">
          <thead className="border-b-2 text-neutral-500 text-paragraph1">
            <tr>
              <th width="5%" className="py-3 " align='center'>
                No
              </th>
              <th width="50%" align="left">
                Nama
              </th>
              <th width="15%" className="" align="left">
                Total JP
              </th>
              <th width="15%" >Status</th>
            </tr>
          </thead>
          <tbody className="text-paragraph2 text-neutral-600">
            {peserta.map(({ nama, total_jp, is_online }, index) => {
              const oddIndex = index % 2 === 1;
              return <tr key={index} className={`${oddIndex ? "bg-neutral-100" : ""} `}>
                <td className=" py-3" align="center">
                  {index + 1}
                </td>
                <td align="left">
                  <div className='flex items-center gap-3 text-neutral-500'>
                    <AccountCircleIcon className='text-skyBlue70' sx={{ fontSize: 36 }} />
                    <h5 className='text-heading5 '>
                      {nama}
                    </h5>
                  </div>
                </td>
                <td className="" align="left">
                  {total_jp}
                </td>

                <td align='center' className=''>
                  <span
                    className={`py-1 px-2 rounded-full text-neutral-50 ${is_online ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                  >{is_online ? "Online" : "Offline"}</span>
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

ListPesertaPanitia.layout = page => <Dashboard children={page} title={"Fasiliator 1"} />

export default ListPesertaPanitia