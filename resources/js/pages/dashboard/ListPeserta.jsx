import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinearProgress from "@mui/material/LinearProgress";
import { dataPeserta } from "../../static/dashboard";
import Dashboard from "@/layouts/dashboard/Dashboard";
import {
  Link,
  usePage
} from "@inertiajs/react";
export const ListPeserta = ({ dataLeafPeserta }) => {
  console.log(
    { leaf: dataLeafPeserta }
  )

  const { pesertas } = dataLeafPeserta[0]

  const { role_id } = usePage().props.auth.user

  const roles = {
    management: role_id === 1 ? 1 : 0,
    panitia: role_id === 2 ? 1 : 0,
    fasilitator: role_id === 3 ? 1 : 0,
  }
  // console.log(`data peserta: ${listpeserta}`)
  return (
    <section className={`mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full h-full md:border-2 md:border-skyBlue10 gap-3 bg-white shadow-defaultShadow rounded-lg ${roles.fasilitator ? "p-4" : "p-0"}`}>
      <h5 className={`text-heading5  text-neutral-600 ${roles.fasilitator ? "p-0" : "p-4"}`}>Daftar Peserta</h5>
      <div className={`flex flex-col w-full gap-3 `}>
        {roles.fasilitator ?
          // listpeserta.map(({ firstname, idnumber, status, point }, index) => {
          //   status = "Online";
          //   point = 90;
          //   return (
          //     <Link
          //       key={index}
          //       href='/peserta/detail-peserta'
          //       className='flex flex-col md:flex-row gap-2 w-full p-3 bg-white items-center justify-between transition-default hover:shadow-defaultShadow rounded-lg'
          //     >
          //       <div className='flex flex-row items-center w-full md:w-[40%] justify-between'>
          //         <div className='flex flex-row gap-3 items-center'>
          //           <AccountCircleIcon
          //             sx={{ fontSize: 36 }}
          //             className=' text-skyBlue70
          //         '
          //           />
          //           <div className='flex flex-col'>
          //             <h5 className='text-heading5 text-neutral-600'>
          //               {firstname}
          //             </h5>
          //             <p
          //               className='text-paragraph2 text-neutral-400
          //           '
          //             >
          //               {idnumber}
          //             </p>
          //           </div>
          //         </div>
          //         <p className='text-paragraph2 text-neutral-600'>
          //           24
          //         </p>
          //         <span
          //           className={`py-1 px-2 rounded-full text-neutral-50 ${status === "Online" ? "bg-[#00C773]" : "bg-[#D00000]"}`}
          //         >
          //           {status}
          //         </span>
          //       </div>
          //       <div className='point-keaktifan flex flex-col w-full gap-2 md:w-1/2 '>
          //         <div className='flex flex-row items-center justify-between'>
          //           <p className='text-paragraph3 text-neutral-600 my-0'>
          //             Poin Keaktifan
          //           </p>
          //           <p className='text-paragraph1 text-skyBlue70 my-0'>
          //             {point}%
          //           </p>
          //         </div>
          //         <LinearProgress variant='determinate' value={point} />
          //       </div>
          //     </Link>
          //   );
          // })
          pesertas.slice(0, 10).map(({ id, nama, nip, total_jp, is_online }, index) => {
            return (
              <Link
                key={index}
                href={`/peserta/detail-peserta/${id}`}
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
                        {nama}
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
                    {total_jp}
                  </p>
                  <span
                    className={`py-1 px-2 rounded-full text-neutral-50 ${is_online ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                  >
                    {is_online ? "Online" : "Offline"}
                  </span>
                </div>
                <div className='point-keaktifan flex flex-col w-full gap-2 md:w-1/2 '>
                  <div className='flex flex-row items-center justify-between'>
                    <p className='text-paragraph3 text-neutral-600 my-0'>
                      Poin Keaktifan
                    </p>
                    <p className='text-paragraph1 text-skyBlue70 my-0'>
                      {total_jp}%
                    </p>
                  </div>
                  <LinearProgress variant='determinate' value={total_jp} />
                </div>
              </Link>
            );
          })
          : roles.panitia &&
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
                {pesertas.slice(0, 10).map(({ nama, total_jp, is_online }, index) => {
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
        }

      </div>
    </section >
  )
}

ListPeserta.layout = page => <Dashboard children={page} title={"List Peserta"} />

export default ListPeserta;