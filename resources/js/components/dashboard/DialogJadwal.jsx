import { React, useState } from 'react'
import ButtonGradient from './ButtonGradient';
import ButtonBorder from './ButtonBorder';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const DialogJadwal = ({ open, handleClose, title, namaFasilitator, textButton, role }) => {
  const date = new Date();
  const [startValue, setStartValue] = useState(dayjs(date));
  const [endValue, setEndValue] = useState(dayjs(date));
  const [dateValue, setDateValue] = useState(dayjs(date));
  const [nama, setNama] = useState('');
  const [place, setPlace] = useState('');

  const handleChangeNama = (event) => setNama(event.target.value)
  const handleChangeTempat = (event) => setPlace(event.target.value);
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm' sx={{ fontFamily: "raleway" }} >
      <DialogTitle className='flex gap-5 items-center mb-8'>
        <img className='h-[60px]' src="dashboard-assets/icon-form-jadwal.png" alt="" />
        <div className='flex flex-col'>
          <h4 className='text-heading4 text-neutral-600'>
            {title}
          </h4>
          <p className='text-paragraph2 text-neutral-500'>Bagikan Jadwal Meeting untuk Peserta</p>
        </div>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-6' >
        <div className='flex flex-col'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Topik<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="topik"
            label="Masukkan topik"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <DialogContentText >
            <h5 className={`text-heading5  ${role.fasilitator && namaFasilitator ? "text-neutral-400" : "text-neutral-600"} `}>
              Fasilitator<span className={`${role.fasilitator && namaFasilitator ? "text-neutral-400" : "text-red-600"}`}>*</span>
            </h5>
          </DialogContentText>
          {role.fasilitator ?
            <TextField
              autoFocus
              margin="dense"
              id="fasilitator"
              label={`${namaFasilitator ? namaFasilitator : "Masukkan nama fasilitator"}`}
              type="text"
              fullWidth
              variant="outlined"
              disabled={namaFasilitator && true}

            />
            :
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Nama Fasilitator</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nama}
                label="Nama Fasilitator"
                onChange={handleChangeNama}
              >
                <MenuItem value={10}>Nama Fasilitator 1</MenuItem>
                <MenuItem value={20}>Nama Fasilitator 2</MenuItem>
                <MenuItem value={30}>Nama Fasilitator 3</MenuItem>
                <MenuItem value={40}>Nama Fasilitator 4</MenuItem>
              </Select>
            </FormControl>
          }

        </div>
        <div className='flex flex-col'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Deskripsi Meeting<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="deskripsi"
            label="Masukkan deskripsi"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-wrap gap-4'>
            <div className='flex flex-col flex-[1_1_150px] gap-3'>
              <DialogContentText>
                <h5 className='text-heading5 text-neutral-600'>
                  Jam Mulai<span className='text-red-600'>*</span>
                </h5>
              </DialogContentText>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Jam Mulai"
                  value={startValue}
                  onChange={(newValue) => setStartValue(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className='flex flex-col flex-[1_1_150px] gap-3'>
              <DialogContentText>
                <h5 className='text-heading5 text-neutral-600'>
                  Jam Selesai<span className='text-red-600'>*</span>
                </h5>
              </DialogContentText>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Jam Selesai"
                  value={endValue}
                  onChange={(newValue) => setEndValue(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className='flex flex-col flex-[1_1_150px] gap-3'>
              <DialogContentText>
                <h5 className='text-heading5 text-neutral-600'>
                  Tanggal<span className='text-red-600'>*</span>
                </h5>
              </DialogContentText>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Tanggal"
                  value={dateValue}
                  onChange={(newValue) => setDateValue(newValue)}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Tempat Pelaksanaan<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tempat Pelaksanaan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={place}
              label="Tempat Pelaksanaan"
              onChange={handleChangeTempat}
            >
              <MenuItem value={"zoom-meeting"}>Zoom Meeting</MenuItem>
              <MenuItem value={"onsite"}>On Site</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`flex-col ${place === "zoom-meeting" ? "flex" : "hidden"}`}>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Link Zoom Meeting<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="link"
            label="Masukkan Link"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonBorder onclick={handleClose} text={"Batal"} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
        <ButtonGradient onclick={handleClose} text={textButton} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
      </DialogActions>
    </Dialog >
  )
}

export default DialogJadwal
