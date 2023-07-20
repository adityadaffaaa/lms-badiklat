import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from "@mui/material/Avatar";
import ButtonGradient from './ButtonGradient';
import { stringAvatar } from '../../settings';
import { months } from "../../static/dashboard";
export const ThreadsDialog = ({ open, handleClose, topiks, topik_id }) => {

  const topik = topik_id === 0 ? topiks[0] : topiks.find(({ id }) => id === topik_id)

  const timeFormat = (created_at) => {
    const now = new Date();
    const date = new Date(created_at);
    const hari = date.getDate();
    const bulan = months[date.getMonth()];
    const tahun = date.getFullYear();
    const jam = date.getHours();
    const menit = date.getMinutes();

    if (now === date) {
      return `${jam} jam ${menit} menit yang lalu`
    }
    else {
      return `${hari} ${bulan} ${tahun} - ${jam}:${menit > 9 ? menit : "0" + menit}`
    }

  }
  if (topik !== undefined) {
    const { body, peserta, threads, created_at } = topik
    const countThreads = threads.length;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ fontFamily: "raleway" }} className='flex flex-col '>
          <div className='flex flex-row justify-between pb-4 border-b-2'>
            <div className='flex flex-row gap-3 items-center'>
              <Avatar {...stringAvatar(peserta.nama)} sx={{ height: 52, width: 52 }} />
              <div className='flex flex-col'>
                <p className='text-paragraph3 text-neutral-600'>{peserta.nama}</p>
                <p className='text-paragraph5 text-neutral-400'>{peserta.nip}</p>
              </div>
            </div>
            <p className='text-paragraph5 text-neutral-400'>{timeFormat(created_at)}</p>
          </div>
          <div className='flex flex-col gap-3 py-4 border-b-2'>
            <p className='text-paragraph2 text-neutral-500'>{body}</p>
            <p className='text-paragraph1 text-neutral-600'>{countThreads} {`Thread${countThreads > 1 ? "s" : ""}`}</p>
          </div>
        </DialogTitle>
        <DialogContent className='flex flex-col gap-3'>
          {threads.map(({ body, peserta, created_at }, index) =>
            <div key={index} className='flex items-center gap-5'>
              <Avatar {...stringAvatar(peserta.nama)} sx={{ height: 32, width: 32 }} />
              <div className='flex flex-col gap-2 p-3 border-2 flex-1 rounded-lg'>
                <div className='flex flex-row gap-3'>
                  <p className='text-paragraph3 text-neutral-600'>{peserta.nama}</p>
                  <p className='text-paragraph4 text-neutral-400'>{timeFormat(created_at)}</p>
                </div>
                <p className='text-paragraph2 text-neutral-500'>{body}</p>
              </div>
            </div>)}
        </DialogContent>
        <DialogActions className='' >
          <div className='flex p-3 w-full gap-5 items-center'>
            <Avatar sx={{ height: 32, width: 32 }} />
            <div className='flex-1 flex p-2 border-2 rounded-lg'>
              <input className='w-full outline-none text-paragraph2' placeholder='Ketik thread Anda...' type="text" />
            </div>
            <ButtonGradient text={"Kirim"} padX={"px-6"} padY={"py-3"} fontWeight={"font-bold"} />
          </div>
        </DialogActions>
      </Dialog >
    )
  }

}

export default ThreadsDialog