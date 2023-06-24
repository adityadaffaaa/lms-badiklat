import React, { useState } from 'react'
import ButtonGradient from './ButtonGradient';
import ButtonBorder from './ButtonBorder';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const PenilaianPeserta = ({ open, handleClose, namaPeserta, isWeeklyEval }) => {
  const [pekan, setPekan] = useState('');
  const handleChangePekan = (event) => setPekan(event.target.value)
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm' sx={{ fontFamily: "raleway" }} >
      <DialogTitle className='flex gap-5 justify-center items-center mb-8'>
        <h4 className='text-heading4 text-neutral-600'>
          {isWeeklyEval ? "Nilai Formatif & Sumatif Pekanan" : "NIlai Formatif Akhir"}
        </h4>
      </DialogTitle>
      <DialogContent className='flex flex-col items-start gap-6' >
        <h5 className='text-heading5 text-neutral-600'>{namaPeserta}</h5>
        {isWeeklyEval ?
          <div className='flex flex-col w-full gap-3'>
            <DialogContentText>
              <h5 className='text-heading5 text-neutral-600'>
                Pekan<span className='text-red-600'>*</span>
              </h5>
            </DialogContentText>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pekan</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pekan}
                label="Pekan"
                onChange={handleChangePekan}
              >
                <MenuItem value={10}>Pekan 1</MenuItem>
                <MenuItem value={20}>Pekan 2</MenuItem>
                <MenuItem value={30}>Pekan 3</MenuItem>
                <MenuItem value={40}>Pekan 4</MenuItem>
              </Select>
            </FormControl>
          </div>
          : null}
        <div className='flex flex-col gap-3 w-full'>
          <DialogContentText >
            <h5 className='text-heading5 text-neutral-600'>
              Deskripsi<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <textarea
            className='border-neutral-300 w-full rounded-md'
            placeholder='Ketik deskripsi disini...'
            name='textfield-topic'
            id=''
            rows='5'
          ></textarea>
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonBorder onclick={handleClose} text={"Batal"} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
        <ButtonGradient onclick={handleClose} text={"Masukkan Nilai"} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
      </DialogActions>
    </Dialog >
  )
}

export default PenilaianPeserta