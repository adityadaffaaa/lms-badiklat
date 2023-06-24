import React, { useState } from "react";

import {
  dataPeserta,
  dataTopik,
  dataThreads
} from "../../static/dashboard";
import {
  ButtonGradient,
  ThreadsDialog
} from "../../components/dashboard";
import Dashboard from "@/layouts/dashboard/Dashboard";
import { stringAvatar } from "../../settings";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const labelDecoration = { inputProps: { "aria-label": "Text Decoration" } };
const labelReact = { inputProps: { "aria-label": "React" } };



export const Kelompok = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-row  w-full gap-3'>
      <section className='lg:w-[calc(100%-300px)] w-full flex flex-col gap-5'>
        <div className='w-full border-2 border-skyBlue10 p-4 rounded-lg bg-white shadow-defaultShadow flex flex-col gap-5'>
          <div className='flex flex-row text-neutral-500 gap-2'>
            <EditIcon sx={{ fontSize: 24 }} />
            <p className='text-paragraph1 '>Buat Topik</p>
          </div>
          <div className='flex flex-row w-full gap-2'>
            <AccountCircleIcon className='text-neutral-500' />
            <textarea
              className='border-none enabled:border-none w-full'
              placeholder='Ketik topik mu disini...'
              name='textfield-topic'
              id=''
              rows='2'
            ></textarea>
          </div>
          <div className='flex flex-row pt-2 border-t-2 border-neutral-300 w-full justify-between'>
            <div className='flex flex-row'>
              <Checkbox
                {...labelDecoration}
                icon={<FormatBoldIcon />}
                checkedIcon={<FormatBoldIcon className='text-skyBlue70' />}
              />

              <Checkbox
                {...labelDecoration}
                icon={<FormatItalicIcon />}
                checkedIcon={<FormatItalicIcon className='text-skyBlue70' />}
              />
              <Checkbox
                {...labelDecoration}
                icon={<FormatUnderlinedIcon />}
                checkedIcon={
                  <FormatUnderlinedIcon className='text-skyBlue70' />
                }
              />
            </div>
            <ButtonGradient
              text={"Kirim"}
              padX={"px-6"}
              padY={"py-2"}
            ></ButtonGradient>
          </div>
        </div>
        <ThreadsDialog handleClose={handleClose} open={open} data={dataThreads} />
        <div className='flex flex-col w-full gap-3'>
          {dataTopik.map(({ name, nip, createdAt, thumbsUp, threads, role }, index) => {
            return (
              <div
                key={index}
                className='flex flex-col border-2 border-skyBlue10 p-4 rounded-lg bg-white shadow-defaultShadow gap-6'
              >
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row gap-3'>
                    <Avatar {...stringAvatar(name)} />
                    <div className='flex flex-col '>
                      <p className='text-paragraph3 text-neutral-500'>
                        {name}
                      </p>
                      <p className='text-paragraph5 text-neutral-400'>
                        {nip}
                      </p>
                    </div>
                  </div>
                  <p className='text-paragraph5 text-neutral-400'>
                    {createdAt} menit yang lalu
                  </p>
                </div>
                <p className='text-paragraph2 text-neutral-500 max-w-2xl'>
                  <b>
                    Lorem ipsum dolor sit amet consectetur. Eget est ac sed nisl
                    ut?{" "}
                  </b>
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Eget est ac sed nisl
                  ut. Tempor tellus rhoncus sed placerat placerat cras commodo
                  est. Consectetur elit non sed massa massa malesuada id viverra
                  lobortis. Ultricies placerat pulvinar scelerisque diam
                  sagittis luctus blandit duis.
                </p>
                <div className='flex flex-row pt-1 border-t-2 border-neutral-300 w-full justify-between items-center'>
                  <div className='flex flex-row gap-4 items-center'>
                    <div className='flex items-center'>
                      <Checkbox
                        {...labelReact}
                        icon={<ThumbUpOffAltIcon />}
                        checkedIcon={
                          <ThumbUpAltIcon className='text-skyBlue70' />
                        }
                      />
                      <p className='text-paragraph4 text-neutral-600'>
                        {thumbsUp}
                      </p>
                    </div>
                    <Checkbox
                      {...labelReact}
                      icon={<ThumbDownOffAltIcon />}
                      checkedIcon={
                        <ThumbDownAltIcon className='text-skyBlue70' />
                      }
                    />
                    <div className='flex items-center'>
                      <IconButton onClick={handleOpen}>
                        <ChatBubbleIcon className='text-skyBlue70' />
                      </IconButton>

                      <p className='text-paragraph4 text-neutral-600'>
                        {threads}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`items-center gap-2" ${role === "peserta" ? "hidden" : "flex"}`}
                  >
                    <span className=' bg-skyBlue70 rounded-lg'>
                      <IconButton>
                        <BorderColorIcon
                          className='text-white'
                          sx={{ fontSize: 16 }}
                        />
                      </IconButton>
                    </span>
                    <IconButton>
                      <DeleteForeverIcon
                        className='text-[#D00000]'
                        sx={{ fontSize: 32 }}
                      />
                    </IconButton>
                  </div >
                </div >
              </div >
            );
          })}
        </div >
      </section >
      <section className='w-[300px] hidden lg:block relative'>
        <div className='flex flex-col p-4 bg-white border-2 h-[calc(100%-112px)] w-[300px] border-skyBlue10 rounded-lg shadow-defaultShadow gap-5 fixed z-50'>
          <p className='text-neutral-400 text-paragraph1'>Peserta Kelompok 1</p>
          <div className='flex flex-col w-full overflow-auto'>
            {dataPeserta.map(({ name, nip, threads, topik }, index) => {
              return (
                <div
                  key={index}
                  className='py-2 pr-1 border-b-2 border-neutral-300 flex flex-row items-center justify-between'
                >
                  <div className='flex flex-row gap-3'>
                    <Avatar {...stringAvatar(name)} />
                    <div className='flex flex-col'>
                      <p className='text-paragraph3 text-neutral-500'>
                        {name}
                      </p>
                      <p className='text-paragraph5 text-neutral-400'>
                        {nip}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex flex-col'>
                      <p className='text-paragraph3 text-neutral-500'>
                        {threads}
                      </p>
                      <p className='text-paragraph5 text-neutral-500'>
                        Threads
                      </p>
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-paragraph3 text-neutral-500'>
                        {topik}
                      </p>
                      <p className='text-paragraph5 text-neutral-500'>Topik</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div >
  );
};

Kelompok.layout = page => <Dashboard children={page} title={"Kelompok"} />

export default Kelompok;
