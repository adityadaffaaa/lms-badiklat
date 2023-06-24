import React, { useState } from "react";
import {
  BarChart,
  LineChart,
  PenilaianPeserta
} from "../../components/dashboard";
import { aktivitasPeserta } from "../../static/dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LinearProgress from "@mui/material/LinearProgress";
import Dashboard from "@/layouts/dashboard/Dashboard";

export const DetailPeserta = () => {
  const [open, setOpen] = useState(false);
  const [weeklyEval, setWeeklyEval] = useState(true);
  const handleOpenWeeklyEval = () => {
    setOpen(true);
    setWeeklyEval(true);
  }
  const handleOpenFinalEval = () => {
    setOpen(true);
    setWeeklyEval(false);
  }
  const handleClose = () => setOpen(false);
  return (
    <section className='mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full gap-5 h-full rounded-lg '>
      <PenilaianPeserta handleClose={handleClose} open={open} namaPeserta={"Nama Peserta"} isWeeklyEval={weeklyEval} />
      <div className='w-full bg-white border-2 border-skyBlue10 shadow-defaultShadow rounded-lg py-6 pl-8 pr-[52px] flex flex-wrap items-center justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <AccountCircleIcon
            sx={{ fontSize: 158 }} x
            className='text-skyBlue70'
          />
          <div className='flex flex-col text-neutral-600 gap-1'>
            <p className='text-paragraph2'>Kelompok 1</p>
            <h3 className='text-heading3'>Nama Peserta</h3>
            <p className='text-paragraph1'>12345678910</p>
          </div>
        </div>
        <div className='flex flex-row  w-[400px] justify-between'>
          <div className='flex flex-col'>
            <p className='text-paragraph1 text-neutral-500'>Modul</p>
            <h1 className='text-heading1 text-neutral-600'>3</h1>
            <p className='text-paragraph2 text-neutral-400'>Finish</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-paragraph1 text-neutral-500'>Learning</p>
            <h1 className='text-heading1 text-neutral-600'>29</h1>
            <p className='text-paragraph2 text-neutral-400'>Hours</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-paragraph1 text-neutral-500'>Threads</p>
            <h1 className='text-heading1 text-neutral-600'>89</h1>
            <p className='text-paragraph2 text-neutral-400'>Reply</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-5'>
        <div className='flex flex-col gap-6 shadow-defaultShadow rounded-lg flex-[1_1_300px] p-4'>
          <div className='flex flex-col'>
            <h5 className='text-heading5 text-neutral-600'>Membaca Modul</h5>
            <p className='text-paragraph2 text-neutral-500'>
              Lorem ipsum dolor
            </p>
          </div>
          <BarChart />
        </div>
        <div className='flex flex-col gap-6 shadow-defaultShadow rounded-lg flex-[1_1_400px] p-4'>
          <div className='flex flex-col '>
            <h5 className='text-heading5 text-neutral-600'>Forum Chat</h5>
            <p className='text-paragraph2 text-neutral-500'>
              Lorem ipsum dolor
            </p>
          </div>
          <LineChart />
        </div>
        <div className='flex flex-col shadow-defaultShadow rounded-lg flex-[1_1_200px] p-4 gap-3'>
          <h5 className='text-heading5 text-neutral-600'>Recent Activity</h5>
          <hr />
          {aktivitasPeserta.map((value, index) => {
            return (
              <div key={index} className='flex flex-row items-center gap-3'>
                {value.activity === "modul" ? (
                  <ImportContactsIcon
                    sx={{ fontSize: 38 }}
                    className='text-skyBlue70'
                  />
                ) : (
                  <ChatBubbleIcon
                    sx={{ fontSize: 38 }}
                    className='text-skyBlue70'
                  />
                )}
                <div className='flex flex-col'>
                  <p className='text-paragraph1 text-neutral-500'>
                    {value.title}
                  </p>
                  <p className='text-paragraph4 text-neutral-400'>
                    {value.date}, {value.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col w-full p-4 shadow-defaultShadow rounded-lg gap-6'>
        <div className='flex flex-row justify-between'>
          <h5 className='text-heading5 text-neutral-600'>
            Nilai Formatif & Sumatif Pekanan
          </h5>
          <button onClick={handleOpenWeeklyEval} className='btn-gradient-default py-2 px-6 rounded-lg text-white flex items-center gap-2 text-paragraph1'>
            Nilai Peserta
            <BorderColorIcon sx={{ fontSize: 18 }} />
          </button>

        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row items-center '>
            <div className=' flex-[6] flex items-center flex-row gap-6 border-r-2'>
              <span className="p-3 bg-warm80 rounded-lg text-white  text-heading5 relative after:content-[''] after:h-4 after:bg-neutral-200 after:w-[2px] after:absolute after:left-[50%] after:-bottom-5 after:rounded-full">
                Pekan 4
              </span>
              <p className='text-paragraph2 text-neutral-500'>
                Lorem ipsum dolor sit amet consectetur!
              </p>
            </div>
            <div className='h-full flex-1 flex justify-center'>
              <h3 className='text-heading3 text-neutral-600'>90</h3>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <div className=' flex-[6] flex items-center flex-row gap-6 border-r-2'>
              <span className="p-3 bg-warm60 rounded-lg text-white  text-heading5 relative after:content-[''] after:h-4 after:bg-neutral-200 after:w-[2px] after:absolute after:left-[50%] after:-bottom-5 after:rounded-full">
                Pekan 3
              </span>
              <p className='text-paragraph2 text-neutral-500'>
                Lorem ipsum dolor sit amet consectetur!
              </p>
            </div>
            <div className='h-full flex-1 flex justify-center'>
              <h3 className='text-heading3 text-neutral-600'>90</h3>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <div className=' flex-[6] flex items-center flex-row gap-6 border-r-2'>
              <span className="p-3 bg-warm80 rounded-lg text-white  text-heading5 relative after:content-[''] after:h-4 after:bg-neutral-200 after:w-[2px] after:absolute after:left-[50%] after:-bottom-5 after:rounded-full">
                Pekan 2
              </span>
              <p className='text-paragraph2 text-neutral-500'>
                Lorem ipsum dolor sit amet consectetur!
              </p>
            </div>
            <div className='h-full flex-1 flex justify-center'>
              <h3 className='text-heading3 text-neutral-600'>90</h3>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <div className=' flex-[6] flex items-center flex-row gap-6 border-r-2'>
              <span className='p-3 bg-warm60 rounded-lg text-white  text-heading5 '>
                Pekan 1
              </span>
              <p className='text-paragraph2 text-neutral-500'>
                Lorem ipsum dolor sit amet consectetur!
              </p>
            </div>
            <div className='h-full flex-1 flex justify-center'>
              <h3 className='text-heading3 text-neutral-600'>90</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-5'>
        <div className='poin-detail-peserta flex-[1_1_200px] flex flex-col gap-4'>
          <div className='p-6 shadow-defaultShadow rounded-lg flex flex-row justify-between items-center'>
            <p className='text-paragraph1 text-neutral-600 flex-1'>
              Poin Keaktifan
            </p>
            <div className='flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <h4 className='text-heading4 text-skyBlue70 my-0'>90%</h4>
            </div>
          </div>
          <div className='p-6 shadow-defaultShadow rounded-lg flex flex-row justify-between items-center'>
            <p className='text-paragraph1 text-neutral-600 flex-1'>
              Poin Keaktifan
            </p>
            <div className='flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <h4 className='text-heading4 text-skyBlue70 my-0'>90%</h4>
            </div>
          </div>
          <div className='p-6 shadow-defaultShadow rounded-lg flex flex-row justify-between items-center'>
            <p className='text-paragraph1 text-neutral-600 flex-1'>
              Poin Keaktifan
            </p>
            <div className='flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <h4 className='text-heading4 text-skyBlue70 my-0'>90%</h4>
            </div>
          </div>
          <div className='p-6 shadow-defaultShadow rounded-lg flex flex-row justify-between items-center'>
            <p className='text-paragraph1 text-neutral-600 flex-1'>
              Poin Keaktifan
            </p>
            <div className='flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <h4 className='text-heading4 text-skyBlue70 my-0'>90%</h4>
            </div>
          </div>
          <div className='p-6 shadow-defaultShadow rounded-lg flex flex-row justify-between items-center'>
            <p className='text-paragraph1 text-neutral-600 flex-1'>
              Poin Keaktifan
            </p>
            <div className='flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <h4 className='text-heading4 text-skyBlue70 my-0'>90%</h4>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-full shadow-defaultShadow p-6 rounded-lg flex-[1_1_400px] gap-6'>
          <div className='flex flex-row items-center justify-between'>
            <h5 className='text-heading5 text-neutral-600'>
              Nilai Formatif Akhir
            </h5>
            <button onClick={handleOpenFinalEval} className='btn-gradient-default py-2 px-6 rounded-lg text-white flex items-center gap-2 text-paragraph1'>
              Nilai Peserta
              <BorderColorIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
          <div className='flex flex-row'>
            <div className='flex-[1_1_600px] border-2 p-2 border-neutral-300 rounded-lg'>
              <p className='text-paragraph2 text-neutral-500 leading-5'>
                Lorem ipsum dolor sit amet consectetur. Diam fringilla donec
                lacus nullam. Ac eu est purus feugiat. Rhoncus arcu faucibus
                imperdiet faucibus. Ullamcorper aenean pulvinar mauris magna
                lacus lectus placerat id. Molestie augue cras tellus arcu
                interdum vitae. Cras quis quis ac morbi varius dui in viverra
                gravida. Urna parturient vitae sem auctor mauris platea. Sed a
                ipsum purus enim volutpat feugiat. Laoreet diam mauris diam
                molestie quis amet at pulvinar egestas.
              </p>
            </div>
            <div className='flex-[1_1_200px] flex justify-end'>
              <div className='flex flex-col items-center'>
                <h5 className='text-heading5 text-neutral-600 py-2 border-dotted border-b-2'>
                  Nilai Akhir
                </h5>
                <h2 className='text-heading2 text-neutral-800'>89</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DetailPeserta.layout = page => <Dashboard children={page} title={"Detail Peserta"} />

export default DetailPeserta;
