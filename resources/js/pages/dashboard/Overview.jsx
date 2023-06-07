import React from 'react';
import {
  dataPeserta,
  overviewCardHeadData,
  jadwal
} from '../../static/dashboard';
import Dashboard from '@/layouts/dashboard/Dashboard';
import { PieChart, ButtonGradient } from '../../components/dashboard';
import routes from '../../routes';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import Odometer from 'react-odometerjs';
export const Overview = () => {
  const { role } = routes[0]
  return (
    <div className="mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full gap-3">
      <section
        className="flex flex-wrap gap-3
          "
      >
        {overviewCardHeadData.map((value, index) =>
          role.fasilitator && index === 2 ? null :
            (role.fasilitator && index === 3) ||
              (role.panitia && index === 3) ?
              null :
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
                    <h3 className="text-heading3 text-skyBlue70 my-0">{value.count}</h3>
                    {/* <Odometer duration={2000} className="text-heading3 text-skyBlue70" value={value.count} format="(.ddd),dd" animation='count' /> */}
                    <p className="text-paragraph5 text-neutral-400 my-0">{value.desc}</p>
                  </div>
                </div>
              )
        )}
      </section >
      <section className="flex flex-wrap gap-3">
        <div className="flex flex-col gap-3 flex-[1_1_200px] shadow-defaultShadow p-3 rounded-lg border-2 border-skyBlue40">
          <div className="flex flex-row justify-between gap-3 w-full md:pb-2 md:border-b-2 md:border-neutral-200">
            <div className="flex flex-row  ">
              <CalendarMonthIcon className="text-warm80" />
              <div className="flex flex-col">
                <h5 className="text-heading5 text-neutral-600">Jadwal</h5>
                <p className="text-paragraph5 text-neutral-400">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <ButtonGradient text={'Lihat lainnya'} padY={'py-2'} padX={'px-6'}></ButtonGradient>
          </div>
          <div className="flex flex-wrap md:gap-8">
            {jadwal.map((value, index) => {
              return (
                <div key={index} className="py-3 border-t-2 md:border-none flex-[1_1_200px] border-neutral-300 w-full flex flex-col gap-3 ">
                  <div className="flex flex-col gap-1">
                    <p className="text-paragraph1 text-neutral-600 my-0">{value.title}</p>
                    <p className="text-paragraph4 text-neutral-400 my-0">{value.desc} </p>
                  </div>
                  <div className="flex flex-row justify-between md:flex-col md:gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <AccessTimeFilledIcon className="text-skyBlue70" />
                      <p className="text-paragraph3 text-neutral-600">{value.time}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <FmdGoodIcon className="text-skyBlue70" />
                      <p className="text-paragraph5 text-neutral-600">{value.place}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-[1_1_200px] shadow-defaultShadow p-3 rounded-lg border-2 border-skyBlue40">
          <div className="flex flex-col">
            <h5 className="text-heading5 text-neutral-600">Track Peserta</h5>
            <p className="text-paragraph5 text-neutral-400">Lorem ipsum dolor sit amet</p>
          </div>
          <PieChart></PieChart>
        </div>
      </section>
      <section className="calendar-overview flex flex-wrap md:flex-wrap-reverse gap-3 ">
        <div className="flex flex-col gap-3 flex-[1_1_200px] shadow-defaultShadow p-3 rounded-lg border-2 border-warm90">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"></FullCalendar>
        </div>
        <div className="flex flex-col gap-3 flex-[1_1_200px] md:flex-[1_1_500px]  shadow-defaultShadow p-3 rounded-lg border-2 border-warm90">
          <h5 className="text-heading5 text-neutral-600">Data Peserta Workshop</h5>
          <table className="table-peserta-overview w-full">
            <thead className="border-b-2 text-neutral-700 text-paragraph1">
              <tr>
                <th align="left" className="py-3">
                  ID
                </th>
                <th className="pl-1" align="left">
                  Nama
                </th>
                <th align="center">Total JP</th>
                <th align="center">Status</th>
              </tr>
            </thead>
            <tbody className="text-paragraph2 text-neutral-600">
              {dataPeserta.map((value, index) => {
                return (
                  <tr key={index} className="border-b-2 ">
                    <td className=" py-3" align="left">
                      {value.id}
                    </td>
                    <td className="pl-1" align="left">
                      {value.name}
                    </td>
                    <td align="center">{value.totalJp}</td>
                    <td align="center">
                      <span
                        className={`py-1 px-2 rounded-full text-neutral-50 ${value.status === "Online" ? "bg-[#00C773]" : "bg-[#D00000]"}`}
                      >{value.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div >
  );
};

Overview.layout = page => <Dashboard children={page} title={"Overview"} />

export default Overview;
