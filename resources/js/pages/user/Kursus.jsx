import { React, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { listKursus } from '../../static/user';
import { CardKursus } from '../../components/user';
export const Kursus = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <main className='flex justify-center w-full flex-col mt-[88px]'>
      <section className='hero relative bg-skyBlue90 py-[122px] flex justify-center '>
        <img
          className='absolute h-[300px] -top-48 -left-24'
          src='user-assets/dot-white.png'
          alt=''
        />

        <div className='flex flex-col items-center max-w-[562px] gap-6'>
          <h1 className="text-white text-heading1 text-center leading-10">Lorem ipsum dolor sit amet <a className="text-warm100">consectetur</a> elit vitae!</h1>
          <p className="text-paragraph2 text-white text-center">Lorem ipsum dolor sit amet consectetur. Elit vitae condimentum ut mi arcu cras amet. Nunc facilisis commodo sed vitae vulputate. Habitasse facilisi</p>
        </div>
        <div className='container max-w-[900px] pr-6 py-5 shadow-defaultShadow rounded-lg absolute -bottom-8 z-10 bg-white flex'>
          <div className='relative flex-[1_1_100px] w-auto'>
            <button onClick={handleToggle} className='flex flex-row pl-6 w-full justify-between text-neutral-500 items-center'>
              <h5 className='text-heading5 '>Filter</h5>
              <KeyboardArrowRightIcon className={`${open ? "-rotate-90" : "rotate-90"}`} />
            </button>
            <div className='absolute left-0 top-16 w-full'>
              <div className={`relative flex-col shadow-defaultShadow bg-white rounded-lg ${open ? "flex" : "hidden"}`}>
                <div className="release flex flex-col w-full p-2 border-b-2 border-neutral-100 before:content-[''] before:absolute before:h-3 before:w-3 before:bg-white before:-top-2 before:left-1/2 before:rotate-45 before:rounded-sm before:-z-10 ">
                  <label className='w-full'>
                    <input className='sr-only peer' type="radio" name='release' />
                    <div className='flex flex-row items-center gap-2 p-2  rounded-lg cursor-pointer peer-checked:bg-neutral-100 transition-default hover:bg-neutral-100 w-full'>
                      <div className='relative bg-neutral-300 p-[10px] box-border rounded-full before:content-[""] before:p-[5px] before:bg-white before:rounded-full before:absolute before:top-0 before:right-0 before:-translate-x-1/2 before:translate-y-1/2'></div>
                      <p className='text-paragraph2 text-neutral-600'>Terbaru</p>
                    </div>
                  </label>
                  <label className=' w-full'>
                    <input className='sr-only peer' type="radio" name='release' />
                    <div className='flex flex-row items-center gap-2 p-2 rounded-lg cursor-pointer peer-checked:bg-neutral-100 transition-default hover:bg-neutral-100 w-full'>
                      <div className='relative bg-neutral-300 p-[10px] box-border rounded-full before:content-[""] before:p-[5px] before:bg-white before:rounded-full before:absolute before:top-0 before:right-0 before:-translate-x-1/2 before:translate-y-1/2'></div>
                      <p className='text-paragraph2 text-neutral-600'>Terlama</p>
                    </div>
                  </label>
                </div>
                <div className='abjad flex flex-col w-full p-2 border-b-2 border-neutral-100'>
                  <label className='w-full'>
                    <input className='sr-only peer' type="radio" name='abjad' />
                    <div className='flex flex-row items-center gap-2 p-2 rounded-lg cursor-pointer peer-checked:bg-neutral-100 group transition-default hover:bg-neutral-100 w-full'>
                      <div className='relative bg-neutral-300 p-[10px] box-border rounded-full before:content-[""] before:p-[5px] before:bg-white before:rounded-full before:absolute before:top-0 before:right-0 before:-translate-x-1/2 before:translate-y-1/2'></div>
                      <p className='text-paragraph2 text-neutral-600'>a-z</p>
                    </div>
                  </label>
                  <label className='w-full'>
                    <input className='sr-only peer' type="radio" name='abjad' />
                    <div className='flex flex-row items-center gap-2 p-2 rounded-lg cursor-pointer peer-checked:bg-neutral-100 transition-default hover:bg-neutral-100 w-full'>
                      <div className='relative bg-neutral-300 p-[10px] box-border rounded-full before:content-[""] before:p-[5px] before:bg-white before:rounded-full before:absolute before:top-0 before:right-0 before:-translate-x-1/2 before:translate-y-1/2'></div>
                      <p className='text-paragraph2 text-neutral-600'>z-a</p>
                    </div>
                  </label>
                </div>
                <div className='ketersediaan flex flex-col w-full p-2 '>
                  <label className='w-full'>
                    <input className='sr-only peer' type="checkbox" name='ketersediaan' />
                    <div className='flex flex-row gap-2 p-2 rounded-lg cursor-pointer peer-checked:bg-neutral-100 transition-default hover:bg-neutral-100 w-full'>
                      <CheckBoxIcon className='check text-neutral-300' />
                      <p className='text-paragraph2 text-neutral-600'>Tersedia</p>
                    </div>
                  </label>
                  <label className='w-full'>
                    <input className='sr-only peer' type="checkbox" name='ketersediaan' />
                    <div className='flex flex-row gap-2 p-2 rounded-lg cursor-pointer peer-checked:bg-neutral-100 transition-default hover:bg-neutral-100 w-full'>
                      <CheckBoxIcon className='check text-neutral-300' />
                      <p className='text-paragraph2 text-neutral-600'>Tersisa</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-[1_1_500px] border-l-2 pl-2'>
            <input type="text" className='text-heading5 text-neutral-500 w-full outline-none' placeholder='Cari kursus berdasarkan judul...' autoComplete='off' />
            <SearchIcon className='text-neutral-600' />
          </div>
        </div>
      </section>
      <section className='relative pt-[102px] pb-[72px] flex justify-center'>
        <div className="wrap-ellipse absolute -left-10 top-10 -z-40">
          <img src="dashboard-assets/ellipse-full-blue.png" className="relative left-0 h-20" alt="" />
          <img src="dashboard-assets/ellipse-full-blue-small.png" className="relative -top-20 left-28 h-10" alt="" />
        </div>
        {/* <div className="wrap-ellipse absolute -right-10 bottom-10 -z-40 rotate-180">
          <img src="dashboard-assets/ellipse-full-blue.png" className="relative left-0 h-20" alt="" />
          <img src="dashboard-assets/ellipse-full-blue-small.png" className="relative -top-20 left-28 h-10" alt="" />
        </div> */}
        <div className='container flex flex-wrap justify-center gap-4'>
          {listKursus.map(({ img, title, status, jmlPeserta, tglMulai, durasi, imgFasilitator, namaFasilitator }, index) => <CardKursus key={index} img={img} title={title} status={status} jmlPeserta={jmlPeserta} tglMulai={tglMulai} durasi={durasi} imgFasilitator={imgFasilitator} namaFasilitator={namaFasilitator} />)}
        </div>
      </section>
    </main>
  )
}
export default Kursus