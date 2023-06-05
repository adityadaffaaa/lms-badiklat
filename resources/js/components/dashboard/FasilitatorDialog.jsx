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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export const FasilitatorDialog = ({ open, handleClose, title, textButton }) => {
  const date = new Date();
  const [bidang, setBidang] = useState('')
  const [agama, setAgama] = useState('')
  const [foto, setFoto] = useState(null)
  const [dateValue, setDateValue] = useState(dayjs(date));
  const [bank, setBank] = useState('');

  const handleBidang = (event) => setBidang(event.target.value)
  const handleAgama = (event) => setAgama(event.target.value)
  const handleFoto = (event) => {
    if (open) {
      setFoto(event.target.value)
    } else {
      setFoto(null)
    }
  }
  const handleBank = (event) => setBank(event.target.value);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm' sx={{ fontFamily: "raleway" }} >
      <DialogTitle >
        <h4 className='text-heading4 text-neutral-600'>
          {title}
        </h4>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-4' >
        <div className='flex flex-col'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Nama<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="topik"
            label="Masukkan nama fasilitator"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
        <div className='flex flex-col'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              NIK<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="topik"
            label="Masukkan nik"
            type="number"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
        <div className='flex flex-col'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              NIP<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="topik"
            label="Masukkan nip"
            type="number"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
        <div className='flex flex-col'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              NPWP<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="topik"
            label="Masukkan npwp"
            type="text"
            fullWidth
            variant="outlined"
            autoComplete='true'
          />
        </div>
        <div className='flex flex-wrap items-center gap-5'>
          <div className='flex flex-col gap-3 flex-[1_1_200px]'>
            <DialogContentText className=''>
              <h5 className='text-heading5 text-neutral-600'>
                Nama Bank<span className='text-red-600'>*</span>
              </h5>
            </DialogContentText>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pilih Bank</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bank}
                label="Pilih bank"
                onChange={handleBank}
              >
                <MenuItem value={10}>Bank 1</MenuItem>
                <MenuItem value={20}>Bank 2</MenuItem>
                <MenuItem value={30}>Bank 3</MenuItem>
                <MenuItem value={40}>Bank 4</MenuItem>
                <MenuItem value={"other"}>Lainnya</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='flex flex-col gap-3 flex-[1_1_200px]'>
            <DialogContentText className=''>
              <h5 className='text-heading5 text-neutral-600'>
                Rekening Bank<span className='text-red-600'>*</span>
              </h5>
            </DialogContentText>
            <TextField
              autoFocus
              id="topik"
              label="Masukkan rekening bank"
              type="number"
              fullWidth
              variant="outlined"
              autoComplete='true'
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Satuan Kerja<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Masukkan Satuan Kerja</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bidang}
              label="Masukkan Satuan Kerja"
              onChange={handleBidang}
            >
              <MenuItem value={10}>Bidang 1</MenuItem>
              <MenuItem value={20}>Bidang 2</MenuItem>
              <MenuItem value={30}>Bidang 3</MenuItem>
              <MenuItem value={40}>Bidang 4</MenuItem>
              <MenuItem value={"other"}>Lainnya</MenuItem>
            </Select>
          </FormControl>
        </div>
        {bidang === "other" &&
          <div className='flex flex-col'>
            <DialogContentText className=''>
              <h5 className='text-heading5 text-neutral-600'>
                Nama Satuan Kerja<span className='text-red-600'>*</span>
              </h5>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="topik"
              label="Masukkan nama satuan kerja"
              type="text"
              fullWidth
              variant="outlined"
              autoComplete='true'
            />
          </div>
        }

        <div className='flex flex-col gap-3'>
          <DialogContentText className=''>
            <h5 className='text-heading5 text-neutral-600'>
              Tempat, Tanggal Lahir<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <div className='flex items-center flex-wrap gap-4'>
            <div className='flex-[1_1_300px]'>
              <TextField
                autoFocus
                id="topik"
                label="Masukkan tempat lahir"
                type="text"
                fullWidth
                variant="outlined"
                autoComplete='true'

              />
            </div>
            <div className='flex-[1_1_200px] '>
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
              Agama<span className='text-red-600'>*</span>
            </h5>
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Masukkan Agama</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={agama}
              label="Masukkan Bidang"
              onChange={handleAgama}
            >
              <MenuItem value={10}>Islam</MenuItem>
              <MenuItem value={20}>Kristen</MenuItem>
              <MenuItem value={30}>Hindu</MenuItem>
              <MenuItem value={40}>Buddha</MenuItem>
              <MenuItem value={50}>Konghucu</MenuItem>
            </Select>
          </FormControl>
        </div>
        <label className='cursor-pointer flex flex-col gap-2 items-center w-full p-6 border-dotted border-2 rounded-lg' >
          <input type="file" value={foto ? foto.name : null} onChange={handleFoto} className='hidden' id='foto' name="foto" accept="image/jpg, image/png" pattern="([^\s]+(\.(?i)(jpg|png))$)" />
          <InsertPhotoIcon className='text-skyBlue70' sx={{ fontSize: 42 }} />
          <p className='text-paragraph1 text-neutral-500'>Kirim sebagai <a className='text-skyBlue70'>foto profil fasilitator</a> disini! (opsional)</p>
          <p className='text-paragraph4 text-neutral-400'>{`${foto ? foto : "Support PNG, JPG"}`}</p>
        </label>
      </DialogContent>
      <DialogActions>
        <ButtonBorder onclick={handleClose} text={"Batal"} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
        <ButtonGradient onclick={handleClose} text={textButton} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
      </DialogActions>
    </Dialog >
  )
}

export default FasilitatorDialog