import { React, useState } from 'react'
import ButtonGradient from './ButtonGradient';
import ButtonBorder from './ButtonBorder';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
export const InputSuratDialog = ({ handleClose, open, title, textButton }) => {
  const [image, setImage] = useState(null)
  const handleFoto = (event) => setImage(event.target.value)
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm' sx={{ fontFamily: "raleway" }} >
      <DialogTitle >
        <h4 className='text-heading4 text-neutral-600 capitalize'>
          Lampirkan {title}
        </h4>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-4' >
        <label className='cursor-pointer flex flex-col gap-2 items-center w-full p-6 border-dotted border-2 rounded-lg' >
          <input type="file" value={image ? image.name : null} onChange={handleFoto} className='hidden' id='foto' name="foto" accept="file/pdf" pattern="([^\s]+(\.(?i)(pdf))$)" />
          <InsertPhotoIcon className='text-skyBlue70' sx={{ fontSize: 42 }} />
          <p className='text-paragraph1 text-neutral-500 text-center max-w-sm'>Kirim sebagai Kirim hasil scan <a className='text-skyBlue70 lowercase'>{title}</a>  dengan format PDF disini! </p>
          <p className='text-paragraph4 text-neutral-400 text-center'>{`${image ? image : "Support PDF"}`}</p>
        </label>
      </DialogContent>
      <DialogActions>
        <ButtonBorder onclick={handleClose} text={"Batal"} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
        <ButtonGradient onclick={handleClose} text={textButton} flex={"flex-1"} padY={"py-3"} fontWeight={"font-bold"} />
      </DialogActions>
    </Dialog >
  )
}

export default InputSuratDialog