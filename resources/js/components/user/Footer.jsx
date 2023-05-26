import React from 'react'
import { Link } from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <footer className='py-[72px] flex justify-center w-full'>
      <div className='w-4/5 flex flex-wrap gap-8'>
        <div className='flex flex-col flex-[1_1_200px] items-start gap-8 text-paragraph2 text-neutral-500'>
          <img className='h-10' src="user-assets/logo-footer.png" alt="" />
          <p className='leading-[150%]'>Lorem ipsum dolor sit amet consectetur. Elit vitae condimentum ut mi arcu cras amet. Nunc facilisis commodo sed vitae vulputate. Habitasse facilisi lorem ipsum dolor sit amet consectetur. Elit vitae condimentum ut mi arcu cras amet. Nunc facilisis commodo sed vitae vulputate. Habitasse facilisi</p>
          <p className=''>©Copyright 2023 Learning From Others Badiklat </p>
        </div>
        <div className='flex flex-row justify-between flex-[1_1_500px] '>
          <div className='flex flex-col text-neutral-500 gap-8'>
            <p className='text-paragraph1'>Menu</p>
            <div className='flex flex-col text-paragraph2 gap-4'>
              <Link to={"/"} className='transition-default hover:text-skyBlue70'>Beranda</Link>
              <Link to={"/kursus"} className='transition-default hover:text-skyBlue70'>Kursus</Link>
              <Link to={"/fasilitator"} className='transition-default hover:text-skyBlue70'>Fasilitator</Link>
              <Link to={"/tanya-kami"} className='transition-default hover:text-skyBlue70'>Tanya Kami</Link>
            </div>
          </div>
          <div className='flex flex-col text-neutral-500 gap-8'>
            <p className='text-paragraph1'>Media Sosial</p>
            <div className='flex flex-col text-paragraph2 gap-4'>
              <a href="#" className='transition-default hover:text-skyBlue70'>Instagram</a>
              <a href="#" className='transition-default hover:text-skyBlue70'>Facebook</a>
              <a href="#" className='transition-default hover:text-skyBlue70'>Twitter</a>
            </div>
          </div>
          <div className='flex flex-col text-neutral-500 gap-8'>
            <p className='text-paragraph1'>Kontak</p>
            <div className='flex flex-col text-paragraph2 gap-4'>
              <div className='flex flex-row gap-2 '>
                <LocalPhoneIcon className='text-skyBlue70' />
                <p>(+62 21) 79190864</p>
              </div>
              <div className='flex flex-row gap-2 '>
                <WhatsAppIcon className='text-skyBlue70' />
                <p>08111232044</p>
              </div>
              <a href="#" className='transition-default hover:text-skyBlue70 flex flex-row gap-2'>
                <EmailIcon className='text-skyBlue70' />
                bpkcorpu@bpk.go.id</a>
            </div>
          </div>
          <div className='flex flex-col text-neutral-500 gap-8 max-w-[202px]'>
            <p className='text-paragraph1'>Alamat</p>
            <p className='text-paragraph2'>
              Jl. Binawarga II, Kalibata RayaJakarta Selatan 12750
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer