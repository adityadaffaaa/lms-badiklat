import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from "@mui/material/Avatar";
import ButtonGradient from './ButtonGradient';
import { stringAvatar } from '../../settings';
export const ThreadsDialog = ({ open, handleClose, data }) => {
  const result = data.find(value => value.id === 1);
  const { nama, nip, threads } = result;
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
            <Avatar {...stringAvatar(nama)} sx={{ height: 52, width: 52 }} />
            <div className='flex flex-col'>
              <p className='text-paragraph3 text-neutral-600'>{nama}</p>
              <p className='text-paragraph5 text-neutral-400'>{nip}</p>
            </div>
          </div>
          <p className='text-paragraph5 text-neutral-400'>24 menit yang lalu</p>
        </div>
        <div className='flex flex-col gap-3 py-4 border-b-2'>
          <p className='text-paragraph1 text-neutral-500'>Lorem ipsum dolor sit amet consectetur. Eget est ac sed nisl ut?</p>
          <p className='text-paragraph2 text-neutral-500'>Lorem ipsum dolor sit amet consectetur. Eget est ac sed nisl ut. Tempor tellus rhoncus sed placerat placerat cras commodo est. Consectetur elit non sed massa massa malesuada id viverra lobortis. Ultricies placerat pulvinar scelerisque diam sagittis luctus blandit duis.</p>
          <p className='text-paragraph1 text-neutral-600'>{countThreads} {`Thread${countThreads > 1 ? "s" : ""}`}</p>
        </div>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-3'>
        {threads.map(({ nama, body }, index) =>
          <div key={index} className='flex items-center gap-5'>
            <Avatar {...stringAvatar(nama)} sx={{ height: 32, width: 32 }} />
            <div className='flex flex-col gap-2 p-3 border-2 flex-1 rounded-lg'>
              <div className='flex flex-row gap-3'>
                <p className='text-paragraph3 text-neutral-600'></p>
                <p className='text-paragraph4 text-neutral-400'>10 menit yang lalu</p>
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

export default ThreadsDialog