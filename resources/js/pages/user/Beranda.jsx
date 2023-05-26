import React from "react";

import {
  ButtonGradient,
  KursusTerbaruSwiper,
  AccordionFaq
} from "../../components/user";

import {
  faqData,
  cardCountData
} from "../../static/user";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Beranda = () => {
  const classBodySection = "py-[72px] flex relative";
  const classContainer = "container flex w-4/5";

  const middleIndexFaqData = Math.floor(faqData.length / 2);
  const firstHalfFaqData = faqData.slice(0, middleIndexFaqData);
  const secondHalfFaqData = faqData.slice(middleIndexFaqData);

  return (
    <main className='flex justify-center w-full flex-col mt-[88px]'>
      <section className='hero w-full flex justify-center relative overflow-hidden'>
        <img
          className='absolute left-0 top-4 h-20'
          src='dashboard-assets/ellipse-hero-blue.png'
          alt=''
        />
        <img
          className='absolute top-0 right-0 h-[300px]'
          src='dashboard-assets/dot-grid-blue.png'
          alt=''
        />
        <img
          className='absolute -bottom-10 left-0 h-[300px]'
          src='dashboard-assets/dot-grid-blue.png'
          alt=''
        />
        <div className={`${classContainer} py-[160px] justify-between items-center relative`}>
          <div className="wrap-ellipse absolute right-1/2 top-1/4 -translate-x-1/2 -z-40">
            <img src="dashboard-assets/ellipse-full-blue.png" className="relative -right-16 h-20" alt="" />
            <img src="dashboard-assets/ellipse-full-blue-small.png" className="relative -top-32 -right-36 h-10" alt="" />
          </div>
          <div className='flex flex-col max-w-xl items-start gap-6'>
            <div className='flex gap-2 items-center'>
              <img
                className='h-6'
                src='dashboard-assets/books-icon.png'
                alt=''
              />
              <h5 className='text-heading5 text-neutral-400'>
                Lorem ipsum dolor sit amet consectetur.
              </h5>
            </div>
            <h1 className='text-heading1 text-neutral-600'>
              Lorem ipsum <a className='text-skyBlue70'>dolor sit amet</a>
              consectetur elit vitae{" "}
              <a className='text-skyBlue70'>condimentum</a> ut
            </h1>
            <ButtonGradient
              text={"Ikuti Kursus Sekarang"}
              padX={"px-6"}
              padY={"py-4"}
              fontWeight={"font-bold"}
            />
          </div>
          <div className='h-[330px] w-[500px] bg-skyBlue80 shadow-defaultShadow rounded-[32px] overflow-hidden relative'>
            <img
              className='absolute top-0 left-0 z-10'
              src='dashboard-assets/dot-grid.png'
              alt=''
            />
            <img
              className='absolute top-0 right-0'
              src='dashboard-assets/ellipse-hero.png'
              alt=''
            />
            <img src='dashboard-assets/illustration-hero.png' alt='' />
          </div>
        </div>
      </section>
      <section className={`${classBodySection} bg-[#FCFCFC] justify-center`}>
        <div className='container flex flex-col items-center gap-[52px]'>
          <div className='flex flex-col items-center'>
            <h1 className='text-neutral-600 text-heading1'>
              Lorem ipsum <a className='text-skyBlue70'>dolor sit amet</a>
            </h1>
            <p className='text-paragraph2 max-w-xl text-neutral-600 text-center'>
              Lorem ipsum dolor sit amet consectetur. Elit vitae condimentum
              ut mi arcu cras amet. Nunc facilisis commodo sed vitae
              vulputate.
            </p>
          </div>
          <div className='flex flex-row justify-evenly w-full'>
            {cardCountData.map(({ count, desc, icon }, index) => (<div key={index} className="max-w-[250px] w-[250px] h-[150px] bg-white shadow-defaultShadow flex flex-col  rounded-2xl items-center justify-center">
              <h1 className="text-heading1 text-skyBlue70">{count}</h1>
              <div className="flex flex-row items-center">
                <img className="h-[18px]" src={icon} alt="" />
                <h5 className="text-heading5 text-neutral-400">{desc}</h5>
              </div>
            </div>))}
          </div>
        </div>
      </section>
      <section className={`${classBodySection} justify-center overflow-hidden`}>
        <div className="wrap-ellipse-kursus absolute left-0 top-0">
          <img src="dashboard-assets/ellipse-full-blue-small.png" className="relative left-16 top-4 h-10" alt="" />
          <img src="dashboard-assets/ellipse-full-blue.png" className="relative top-6 h-20" alt="" />
        </div>
        <img
          className='absolute -top-[20%] right-0 h-[300px]'
          src='dashboard-assets/dot-grid-blue.png'
          alt=''
        />
        <div className={`${classContainer} flex-col gap-8`}>
          <div className="flex flex-row justify-between">
            <h3 className="text-heading3 text-neutral-600 font-extrabold">Kursus terbaru dari kami</h3>
            <a className="flex items-center text-paragraph1 text-skyBlue70 gap-2" href="#">Lihat lainnya <KeyboardArrowRightIcon /></a>
          </div>
          <div>
            <KursusTerbaruSwiper />
          </div>
        </div>
      </section>
      <section className={`${classBodySection} bg-[#FCFCFC] justify-center`}>
        <div className={`${classContainer} flex-col items-center gap-8`}>
          <div className="flex flex-col items-center">
            <p className="text-paragraph1 text-neutral-400">Tanya Kami</p>
            <h3 className="text-neutral-600 text-heading3 font-extrabold">Frequently Asked <a className="text-skyBlue70">Questions</a></h3>
          </div>
          <div className="flex flex-wrap gap-5 w-full">
            <div className="flex flex-col flex-[1_1_400px] gap-4">
              {firstHalfFaqData.map(({ title, summary }, index) =>
                (<AccordionFaq key={index} title={title} summary={summary} />))}
            </div>
            <div className="flex flex-col flex-[1_1_400px] gap-4">
              {secondHalfFaqData.map(({ title, summary }, index) =>
                (<AccordionFaq key={index} title={title} summary={summary} />))}
            </div>
          </div>
        </div>
      </section>
      <section className={`${classBodySection} bg-skyBlue100 overflow-hidden justify-center`}>
        <img
          className='absolute h-[90px] -top-10 -left-10'
          src='user-assets/ellipse-white.png'
          alt=''
        />
        <img
          className='absolute h-[300px] -bottom-56 -left-24'
          src='user-assets/dot-white.png'
          alt=''
        />
        <img
          className='absolute h-[300px] -top-56 -right-24'
          src='user-assets/dot-white.png'
          alt=''
        />
        <img
          className='absolute h-[90px] -bottom-10 -right-10'
          src='user-assets/ellipse-white.png'
          alt=''
        />
        <div className="container flex flex-col items-center max-w-[562px] gap-6">
          <h1 className="text-white text-heading1 text-center leading-10">Lorem ipsum dolor sit amet <a className="text-warm100">consectetur</a> elit vitae?</h1>
          <p className="text-paragraph2 text-white text-center">Lorem ipsum dolor sit amet consectetur. Elit vitae condimentum ut mi arcu cras amet. Nunc facilisis commodo sed vitae vulputate. Habitasse facilisi</p>
          <ButtonGradient text={"Tanya Kami Sekarang"} padX={"px-6"} padY={"py-4"} icon={<KeyboardArrowRightIcon />} fontWeight={"font-bold"} />
        </div>
      </section>
    </main>
  );
};

export default Beranda;
