import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const ReminderDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ fontFamily: "raleway" }}
    >
      <DialogTitle id="alert-dialog-title" >
        <h4 className='text-heading4 text-neutral-600 text-center'>You have a meeting Today !</h4>
      </DialogTitle>
      <DialogContent className='flex flex-col items-center gap-3'>
        <div className='bg-skyBlue80 p-8 rounded-full'>
          <NotificationsActiveIcon className='text-white' sx={{ fontSize: 64 }} />
        </div>
        <h5 className='text-neutral-600 text-heading5'>Reminder!</h5>
        <p className='text-paragraph2 text-neutral-500'>Jumat, 23 Desember 2023</p>
        <h5 className='text-neutral-600 text-heading5'>Topic :</h5>
        <p className='px-6 py-2 bg-skyBlue80 text-white text-paragraph1 rounded-full'>Lorem Ipsum Dolor</p>
      </DialogContent>
    </Dialog>
  )
}
export default ReminderDialog