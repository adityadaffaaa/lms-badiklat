import React from 'react'
import Avatar from '@mui/material/Avatar';

export const CardFasililtator = ({ img, nama, jabatan, nip }) => {
  return (
    <div className='flex flex-col items-center max-w-[295px] w-[295px] border-2 border-skyBlue40 p-6 rounded-2xl gap-6 transition-default hover:shadow-defaultShadow'>
      <Avatar src={img} sx={{ height: 126, width: 126 }} />
      <div className='flex flex-col items-center'>
        <h5 className='text-heading5 text-neutral-600'>{nama}</h5>
        <p className='text-neutral-400 text-paragraph1'>{jabatan}</p>
        <p className='text-neutral-500 text-paragraph2'>{nip}</p>
      </div>
    </div>
  )
}

export default CardFasililtator;
