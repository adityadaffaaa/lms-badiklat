import React from 'react'
import TextField from '@mui/material/TextField';
import { ButtonGradient } from '../../components/user';
export const TanyaKami = () => {
  return (
    <main className='flex justify-center w-full mt-[88px] relative'>
      <img
        className='absolute top-0 left-0 h-[300px] -z-40'
        src='dashboard-assets/dot-grid-blue.png'
        alt=''
      />
      <img
        className='absolute bottom-0 right-0 h-[300px] -z-40'
        src='dashboard-assets/dot-grid-blue.png'
        alt=''
      />
      <section className='container max-w-[710px] py-20 flex flex-col items-center gap-20'>
        <div className='flex items-center gap-2'>
          <h1 className='text-heading1 text-neutral-600'>Kirim <a className='text-skyBlue70'>Pertanyaan</a> Kepada Kami </h1>
          <img className='h-10' src="user-assets/icon-mail.png" alt="" />
        </div>
        <div className='flex flex-col w-full gap-6 items-end'>
          <div className='flex flex-col w-full gap-4'>
            <h5 className='text-heading5 text-neutral-500'>Nama Lengkap</h5>
            <TextField fullWidth label="Ketik nama lengkap Anda" variant='outlined' autoComplete="true" />
          </div>
          <div className='flex flex-col w-full gap-4'>
            <h5 className='text-heading5 text-neutral-500'>Email</h5>
            <TextField fullWidth label="Ketik email Anda" variant='outlined' autoComplete="true" />
          </div>
          <div className='flex flex-col w-full gap-4'>
            <h5 className='text-heading5 text-neutral-500'>Email</h5>
            <textarea className='w-full border-2 border-neutral-200 rounded-lg p-3 placeholder:text-neutral-600 outline-skyBlue70' placeholder='Ketik pertanyaan Anda' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <ButtonGradient text={"Kirim Sekarang"} padX={"px-6"} padY={"py-4"} fontWeight={"font-bold"} />
        </div>
      </section>
    </main>
  )
}

export default TanyaKami