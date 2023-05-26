import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { CardFasililtator } from '../../components/user';
import { listFasilitator } from '../../static/user';
export const Fasilitator = () => {
  const classBodySection = "py-[72px] flex relative";
  return (
    <main className="flex w-full flex-col mt-[88px]">
      <section className={`${classBodySection} justify-center`}>
        <div className='container w-4/5 flex flex-row  justify-between items-center'>
          <div className='flex flex-col gap-6 max-w-[525px]'>
            <h1 className='text-heading1 text-neutral-500'>Lorem ipsum <a className='text-skyBlue70'>dolor sit amet </a>consectetur elit!</h1>
            <p className='text-paragraph2 text-neutral-500'>Lorem ipsum dolor sit amet consectetur. Elit vitae condimentum ut mi arcu cras amet. Nunc facilisis commodo sed vitae vulputate. Habitasse facilisi</p>
            <div className='w-full flex flex-row shadow-defaultShadow rounded-lg p-6  text-neutral-500 '>
              <input className='text-heading5 outline-none w-full' type="text" placeholder='Cari fasilitator berdasarkan nama...' autoComplete='off' />
              <SearchIcon />
            </div>
          </div>
          <div className='relative'>
            <div className="wrap-ellipse absolute -right-4 -top-12 -z-40 ">
              <img src="dashboard-assets/ellipse-full-blue.png" className="relative right-0 h-20" alt="" />
              <img src="dashboard-assets/ellipse-full-blue-small.png" className="relative top-0 -right-24 h-10" alt="" />
            </div>
            <div className="wrap-ellipse absolute -left-4 -bottom-12 -z-40 rotate-180">
              <img src="dashboard-assets/ellipse-full-blue.png" className="relative right-0 h-20" alt="" />
              <img src="dashboard-assets/ellipse-full-blue-small.png" className="relative top-0 -right-24 h-10" alt="" />
            </div>
            <img
              className='absolute -top-16 left-0 h-[300px] -z-40'
              src='user-assets/dot-blue.png'
              alt=''
            />
            <img
              className='absolute -bottom-16 right-0 h-[300px] -z-40'
              src='user-assets/dot-blue.png'
              alt=''
            />
            <div className='max-w-[484px] w-[484px] h-[300px] bg-skyBlue90 flex items-end justify-center rounded-3xl'>
              <img className='h-[393px] translate-y-6' src="user-assets/fasilitator-illustration-hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${classBodySection} justify-center`}>
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
        <div className='container flex flex-wrap justify-center gap-4'>
          {listFasilitator.map(({ img, nama, jabatan, nip }, index) =>
            <CardFasililtator key={index} img={img} nama={nama} jabatan={jabatan} nip={nip
            } />
          )}
        </div>
      </section>
    </main>
  )
}

export default Fasilitator