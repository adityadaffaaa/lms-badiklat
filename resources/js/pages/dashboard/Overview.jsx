import React from 'react';
import {
  dataPeserta,
  overviewCardHeadData,
  jadwal,
  dataPanitia
} from '../../static/dashboard';
import { listKursus } from '@/static/user';
import Dashboard from '@/layouts/dashboard/Dashboard';
import {
  PieChart,
  ButtonGradient
} from '../../components/dashboard';
import { stringAvatar } from '@/settings';
import routes from '../../routes';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePage, Link } from '@inertiajs/react';
// import Odometer from 'react-odometerjs';
export const Overview = ({ listPeserta, countPeserta, countLeaf, countFasilitator, countPanitia, recentLeaf, popularLeaf, dataJadwal, panitiaData }) => {

  const count = [
    countPeserta,
    countFasilitator,
    countPanitia,
    countLeaf,
  ]

  const { role_id } = usePage().props.auth.user

  const roles = {
    management: role_id === 1 ? 1 : 0,
    panitia: role_id === 2 ? 1 : 0,
    fasilitator: role_id === 3 ? 1 : 0,
  }
  return (
    <div className="mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full gap-3">
      <section
        className="flex flex-wrap gap-3
          "
      >
        {overviewCardHeadData.map((value, index) => {
          return (roles.fasilitator && index === 2) || (roles.panitia && index === 2) ? null :
            (
              <div key={index} className="flex flex-col flex-[1_1_200px] gap-2 md:gap-8 w-full shadow-defaultShadow p-3 rounded-lg border-2 border-skyBlue40">
                <div
                  className="flex flex-row justify-between
                  "
                >
                  <h5 className="text-heading5 text-neutral-600">{value.title}</h5>
                  <value.icon className="text-skyBlue70" />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-heading3 text-skyBlue70 my-0">{count[index]}</h3>
                  <p className="text-paragraph5 text-neutral-400 my-0">{value.desc}</p>
                </div>
              </div>
            )
        }

        )}
      </section >
      <section className="flex flex-wrap gap-3">
        <div className="flex flex-col gap-3 flex-[1_1_200px] shadow-defaultShadow p-3 rounded-lg border-2 border-skyBlue40">
          <div className="flex flex-row justify-between gap-3 w-full md:pb-2 md:border-b-2 md:border-neutral-200">
            {
              roles.management ? <h5 className="text-heading5 text-neutral-600">Popular LEAF</h5>
                :
                <div className="flex flex-row">
                  <CalendarMonthIcon className="text-warm80" />
                  <div className="flex flex-col">
                    <h5 className="text-heading5 text-neutral-600">Jadwal</h5>
                    <p className="text-paragraph5 text-neutral-400">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
            }
            {roles.management ? null :
              <Link href='/jadwal'>
                <ButtonGradient text={'Lihat lainnya'} padY={'py-2'} padX={'px-6'}></ButtonGradient>
              </Link>
            }
          </div>
          {roles.management ?
            <div className='flex flex-col gap-4'>
              {popularLeaf.map(({ leaf_title, pesertas }, index) => {
                return <div key={index} className='flex flex-row gap-2 items-center'>
                  <div className={`rounded-full h-7 w-7 grid place-items-center ${index === 0 ? "bg-warm90" : "bg-skyBlue70"}`}>
                    <p className='text-paragraph1 text-white'>{index + 1}</p>
                  </div>
                  <div className='p-2 border-2 rounded-lg flex-1 flex flex-wrap items-center'>
                    <div className='flex flex-row gap-2 flex-[1_1_200px] items-center'>
                      <LibraryBooksIcon sx={{ fontSize: 24 }} className='text-skyBlue70' />
                      <div className='flex flex-col gap-1'>
                        <p className='text-paragraph1 text-neutral-500'>{leaf_title}</p>
                        <p className='text-paragraph4 text-neutral-400'>95% menyukainya</p>
                      </div>
                    </div>
                    <AvatarGroup max={5} className='flex-[1_1_100px]'>
                      {pesertas.map(({ nama }, index) => (
                        <Avatar key={index} {...stringAvatar(nama)} />
                      ))}
                    </AvatarGroup>
                  </div>
                </div>

              }
              )}
              {/* {listKursus.slice(0, 3).map(({ title }, index) =>
                <div key={index} className='flex flex-row gap-2 items-center'>
                  <div className={`rounded-full h-7 w-7 grid place-items-center ${index === 0 ? "bg-warm90" : "bg-skyBlue70"}`}>
                    <p className='text-paragraph1 text-white'>{index + 1}</p>
                  </div>
                  <div className='p-2 border-2 rounded-lg flex-1 flex flex-wrap items-center'>
                    <div className='flex flex-row gap-2 flex-[1_1_200px] items-center'>
                      <LibraryBooksIcon sx={{ fontSize: 24 }} className='text-skyBlue70' />
                      <div className='flex flex-col gap-1'>
                        <p className='text-paragraph1 text-neutral-500'>{title}</p>
                        <p className='text-paragraph4 text-neutral-400'>95% menyukainya</p>
                      </div>
                    </div>
                    <AvatarGroup max={5} className='flex-[1_1_100px]'>
                      {["Peserta A",
                        "Peserta B",
                        "Peserta C",
                        "Peserta D",
                        "Peserta E",
                        "Peserta F"].map((name, index) => (
                          <Avatar key={index} {...stringAvatar(name)} />
                        ))}
                    </AvatarGroup>
                  </div>
                </div>
              )} */}
            </div>
            :
            <div className="flex flex-wrap md:gap-8">
              {dataJadwal.map(({ topik, deskripsi, meeting_link, jam_mulai, jam_selesai }, index) => {
                return (
                  <div key={index} className="py-3 border-t-2 md:border-none flex-[1_1_200px] border-neutral-300 w-full flex flex-col gap-3 ">
                    <div className="flex flex-col gap-1">
                      <p className="text-paragraph1 text-neutral-600 my-0">{topik}</p>
                      <p className="text-paragraph4 text-neutral-400 my-0">{deskripsi} </p>
                    </div>
                    <div className="flex flex-row justify-between md:flex-col md:gap-3">
                      <div className="flex flex-row items-center gap-2">
                        <AccessTimeFilledIcon className="text-skyBlue70" />
                        <p className="text-paragraph3 text-neutral-600">{jam_mulai} - {jam_selesai}</p>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FmdGoodIcon className="text-skyBlue70" />
                        <p className="text-paragraph5 text-neutral-600">Zoom Meeting <a href={meeting_link} target='_blank' className='underline text-skyBlue70' >{meeting_link}</a></p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          }

        </div>
        <div className="flex flex-col gap-3 flex-[1_1_200px] shadow-defaultShadow p-3 rounded-lg border-2 border-skyBlue40">
          <div className="flex flex-row justify-between gap-3 w-full md:pb-2 md:border-b-2 md:border-neutral-200">
            {roles.management ? <h5 className="text-heading5 text-neutral-600">LEAF Terbaru</h5> :
              <div className="flex flex-col">
                <h5 className="text-heading5 text-neutral-600">Track Peserta</h5>
                <p className="text-paragraph5 text-neutral-400">Lorem ipsum dolor sit amet</p>
              </div>
            }
          </div>
          {roles.management ?
            <div className='flex flex-col gap-4'>
              {recentLeaf.map(({ leaf_title, pesertas }, index) => {

                return <div key={index} className='flex flex-row gap-2 items-center'>
                  <div className='p-2 border-2 rounded-lg flex-1 flex flex-wrap items-center'>
                    <div className='flex flex-row gap-2 flex-[1_1_200px] items-center'>
                      <LibraryBooksIcon sx={{ fontSize: 24 }} className='text-skyBlue70' />
                      <div className='flex flex-col gap-1'>
                        <p className='text-paragraph1 text-neutral-500'>{leaf_title}</p>
                        <p className='text-paragraph4 text-neutral-400'>95% menyukainya</p>
                      </div>
                    </div>
                    <AvatarGroup max={5} className='flex-[1_1_100px]'>
                      {pesertas.map(({ nama }, index) => (
                        <Avatar key={index} {...stringAvatar(nama)} />
                      ))}
                    </AvatarGroup>
                  </div>
                </div>

              }
              )}
              {/* {listKursus.slice(0, 3).map(({ title }, index) =>
                <div key={index} className='flex flex-row gap-2 items-center'>
                  <div className='p-2 border-2 rounded-lg flex-1 flex flex-wrap items-center'>
                    <div className='flex flex-row gap-2 flex-[1_1_200px] items-center'>
                      <LibraryBooksIcon sx={{ fontSize: 24 }} className='text-skyBlue70' />
                      <div className='flex flex-col gap-1'>
                        <p className='text-paragraph1 text-neutral-500'>{title}</p>
                        <p className='text-paragraph4 text-neutral-400'>95% menyukainya</p>
                      </div>
                    </div>
                    <AvatarGroup max={5} className='flex-[1_1_100px]'>
                      {["Peserta A",
                        "Peserta B",
                        "Peserta C",
                        "Peserta D",
                        "Peserta E",
                        "Peserta F"].map((name, index) => (
                          <Avatar key={index} {...stringAvatar(name)} />
                        ))}
                    </AvatarGroup>
                  </div>
                </div>
              )} */}
            </div>
            :

            <PieChart></PieChart>
          }

        </div>
      </section>
      <section className="calendar-overview flex flex-wrap md:flex-wrap-reverse gap-3 ">
        <div className="flex flex-col gap-3 flex-[1_1_200px] shadow-defaultShadow p-3 rounded-lg border-2 border-warm90">
          {
            roles.management ?
              <>
                <h5 className='text-heading5 text-neutral-600'>Recent Activity</h5>
                <hr />
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row items-center gap-3'>
                    <AccountCircleIcon
                      sx={{ fontSize: 38 }}
                      className='text-skyBlue70'
                    />
                    <div className='flex flex-col'>
                      <p className='text-paragraph4 text-neutral-500'>
                        Panitia 1 <a className='text-neutral-700'>(Nama Panitia)</a>
                      </p>
                      <p className='text-paragraph1 text-neutral-500'>
                        Menambah Fasilitator
                      </p>
                      <p className='text-paragraph4 text-neutral-400'>
                        14 March, 11.30AM
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <AccountCircleIcon
                      sx={{ fontSize: 38 }}
                      className='text-skyBlue70'
                    />
                    <div className='flex flex-col'>
                      <p className='text-paragraph4 text-neutral-500'>
                        Panitia 1 <a className='text-neutral-700'>(Nama Panitia)</a>
                      </p>
                      <p className='text-paragraph1 text-neutral-500'>
                        Menambah Fasilitator
                      </p>
                      <p className='text-paragraph4 text-neutral-400'>
                        14 March, 11.30AM
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <AccountCircleIcon
                      sx={{ fontSize: 38 }}
                      className='text-skyBlue70'
                    />
                    <div className='flex flex-col'>
                      <p className='text-paragraph4 text-neutral-500'>
                        Panitia 1 <a className='text-neutral-700'>(Nama Panitia)</a>
                      </p>
                      <p className='text-paragraph1 text-neutral-500'>
                        Menambah Fasilitator
                      </p>
                      <p className='text-paragraph4 text-neutral-400'>
                        14 March, 11.30AM
                      </p>
                    </div>
                  </div>
                </div>
              </>
              :
              <div className='-z-10'>
                <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"></FullCalendar>
              </div>
          }
        </div>
        <div className="flex flex-col gap-3 flex-[1_1_200px] md:flex-[1_1_500px]  shadow-defaultShadow p-3 rounded-lg border-2 border-warm90">
          <h5 className="text-heading5 text-neutral-600">Data {roles.management ? "Panitia" : "Peserta"}</h5>
          <table className="table-peserta-overview w-full">
            <thead className="border-b-2 text-neutral-700 text-paragraph1">
              <tr>
                <th align="left" className="py-3">
                  {roles.management ? "No" : "ID"}
                </th>
                <th className="pl-1" align="left">
                  Nama
                </th>
                {roles.management ? null :
                  <th align="center">Total JP</th>
                }
                <th align="center">Status</th>
              </tr>
            </thead>
            <tbody className="text-paragraph2 text-neutral-600">
              {roles.management ?

                panitiaData.map(({ nama }, index) =>
                  <tr key={index} className="border-b-2 ">
                    <td className=" py-3" align="left">
                      {index + 1}
                    </td>
                    <td className="pl-1" align="left">
                      {nama}
                    </td>
                    <td align="center">
                      <span
                        className={`py-1 px-2 rounded-full text-neutral-50  bg-[#00C773]`}
                      >Online</span>
                    </td>
                  </tr>)
                :
                listPeserta.map(({ nama, is_online, total_jp }, index) =>
                  <tr key={index} className="border-b-2 ">
                    <td className=" py-3" align="left">
                      {index + 1}
                    </td>
                    <td className="pl-1" align="left">
                      {nama}
                    </td>
                    <td align="center">{total_jp}</td>
                    <td align="center">
                      <span
                        className={`py-1 px-2 rounded-full text-neutral-50 ${is_online ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                      >{is_online ? "Online" : "Offline"}</span>
                    </td>
                  </tr>

                )
                //   dataPeserta.map((value, index) =>
                //     <tr key={index} className="border-b-2 ">
                //       <td className=" py-3" align="left">
                //         {value.id}
                //       </td>
                //       <td className="pl-1" align="left">
                //         {value.name}
                //       </td>
                //       <td align="center">{value.totalJp}</td>
                //       <td align="center">
                //         <span
                //           className={`py-1 px-2 rounded-full text-neutral-50 ${value.status === "Online" ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                //         >{value.status}</span>
                //       </td>
                //     </tr>
                //   )
              }
            </tbody>
          </table>
        </div>
      </section >
    </div >
  );
};

Overview.layout = page => <Dashboard children={page} title={"Overview"} />

export default Overview;
