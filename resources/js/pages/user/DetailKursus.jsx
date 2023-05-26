import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonGradient } from '../../components/user';
import Avatar from '@mui/material/Avatar';
import fasilitatorIllustration from "../../../public/user-assets/fasilitator-illustration.png"
import iconPeserta from "../../../public/user-assets/icon-peserta.png"
import iconCalendar from "../../../public/user-assets/icon-calendar.png"
import iconClock from "../../../public/user-assets/icon-clock.png"
import imgHero from "../../../public/user-assets/img-kursus1.png"
import dotGridBlue from "../../../public/dashboard-assets/dot-grid-blue.png"
export const DetailKursus = () => {
  return (
    <main className='flex w-full flex-col gap-8 mt-[88px] relative'>
      <img
        className='absolute top-0 left-0 h-[300px]'
        src={dotGridBlue}
        alt=''
      />
      <img
        className='absolute bottom-0 right-0 h-[300px]'
        src={dotGridBlue}
        alt=''
      />
      <section className='pt-12 flex justify-center'>
        <div className='container w-4/5 flex flex-row justify-between items-center bg-skyBlue90 py-12 rounded-2xl px-7'>
          <div className='flex flex-col gap-6 items-start'>
            <h2 className='text-heading2 text-white'>Judul Kursus Lorem Ipsum Dolor</h2>
            <div className="flex flex-row items-center gap-2 ">
              <Avatar src={fasilitatorIllustration} sx={{ height: 42, width: 42 }} />
              <p className="text-paragraph1 text-white">Jhon Doe</p>
            </div>
            <p className='text-white text-paragraph2 max-w-[566px]'>Lorem ipsum dolor sit amet consectetur. Diam fringilla donec lacus nullam. Ac eu est purus feugiat. Rhoncus arcu faucibus imperdiet faucibus. Ullamcorper aenean pulvinar mauris magna lacus lectus placerat id. Molestie augue cras tellus arcu interdum vitae. Cras quis quis ac morbi varius dui in viverra gravida. Urna parturient vitae sem auctor mauris platea.</p>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row items-center gap-1">
                <img className="h-4" src={iconPeserta} alt="" />
                <p className="text-paragraph1 text-white">50 Peserta</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img className="h-4" src={iconCalendar} alt="" />
                <p className="text-paragraph1 text-white">1 April 2023</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img className="h-4" src={iconClock} alt="" />
                <p className="text-paragraph1 text-white">1 Bulan</p>
              </div>
            </div>
            <div className='flex flex-row gap-6 items-center'>
              <p className='text-paragraph1 text-white'>Status :</p>
              <span className='text-paragraph1  py-2 px-[10px] rounded-lg capitalize bg-skyBlue10 text-skyBlue70'>Tersedia</span>
            </div>
            <ButtonGradient text={"Daftar Sekarang"} padX={"px-6"} padY={"py-4"} fontWeight={"font-bold"} />
          </div>
          <div className='max-w-[514px] h-[323px] bg-red-300 overflow-hidden rounded-lg'>
            <img className='object-cover w-full h-full' src={imgHero} alt="" />
          </div>
        </div>
      </section>
      <section className='flex justify-center'>
        <div className='container w-4/5'>
          <p className='text-paragraph1 text-neutral-400'>Kursus dibuka <a className='text-neutral-500'>berakhir 4 hari lagi</a></p>
        </div>
      </section>
      <section className='flex justify-center'>
        <div className='container w-4/5 flex flex-wrap items-start gap-5'>
          <div className='flex flex-col flex-[1_1_600px] p-6 shadow-defaultShadow rounded-lg gap-8'>
            <div className='flex flex-col gap-6'>
              <h4 className='text-neutral-500 text-heading4'>Lorem ipsum dolor sit amet consectetur elit vitae condimentum ut </h4>
              <p className='text-paragraph2 text-neutral-500'>Lorem ipsum dolor sit amet consectetur. Purus tortor tortor tellus ac ut et nisl tincidunt. Nunc sit accumsan in quis varius pharetra vel sit at. Laoreet vel viverra aliquam nunc habitasse elit pharetra. Vel aliquam commodo venenatis nec nisi. Egestas massa nisl molestie mi adipiscing. <a className='font-semibold'>Mauris in egestas condimentum molestie </a>vitae. Dolor purus cras eget suspendisse nec interdum. Nunc iaculis orci risus quis. Arcu sodales auctor cras neque commodo amet et mauris nisl. <a className='font-semibold'>Porta eget nibh tincidunt mauris amet</a> . Risus ut ut mauris ac. Morbi vehicula id massa facilisi. Eget pellentesque adipiscing in pellentesque sem urna et amet.</p>
            </div>
            <div className='flex flex-col gap-6'>
              <h4 className='text-neutral-500 text-heading4'>Lorem ipsum dolor sit amet consectetur elit vitae condimentum ut
              </h4>
              <ul className='text-paragraph2 flex flex-col gap-4 text-neutral-500'>
                <li className='list-disc ml-4'>Lorem ipsum dolor sit amet consectetur. Purus tortor tortor tellus ac ut et nisl tincidunt.
                </li>
                <li className='list-disc ml-4'>Lorem ipsum dolor sit amet consectetur. Purus tortor tortor tellus ac ut et nisl tincidunt.
                </li>
                <li className='list-disc ml-4'>Lorem ipsum dolor sit amet consectetur. Purus tortor tortor tellus ac ut et nisl tincidunt.
                </li>
                <li className='list-disc ml-4'>Lorem ipsum dolor sit amet consectetur. Purus tortor tortor tellus ac ut et nisl tincidunt.
                </li>
                <li className='list-disc ml-4'>Lorem ipsum dolor sit amet consectetur. Purus tortor tortor tellus ac ut et nisl tincidunt.
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col flex-[1_1_100px] p-6 shadow-defaultShadow rounded-lg gap-6'>
            <h4 className='text-heading4 text-neutral-500'>Kursus lainnya</h4>
            <ul className='text-paragraph2 flex flex-col gap-4 text-skyBlue70'>
              <li className='list-disc ml-4'>
                <Link to={"#"} className='text-paragraph1'>Judul kursus lorem ipsum dolor</Link>
              </li>
              <li className='list-disc ml-4'>
                <Link to={"#"} className='text-paragraph1'>Judul kursus lorem ipsum dolor</Link>
              </li>
              <li className='list-disc ml-4'>
                <Link to={"#"} className='text-paragraph1'>Judul kursus lorem ipsum dolor</Link>
              </li>
              <li className='list-disc ml-4'>
                <Link to={"#"} className='text-paragraph1'>Judul kursus lorem ipsum dolor</Link>
              </li>
              <li className='list-disc ml-4'>
                <Link to={"#"} className='text-paragraph1'>Judul kursus lorem ipsum dolor</Link>
              </li>

            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
export default DetailKursus