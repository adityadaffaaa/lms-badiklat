import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Scrollbar, Navigation } from "swiper";

import React from 'react'
import ButtonGradient from "./ButtonGradient";
import Avatar from '@mui/material/Avatar';

import { listKursus } from "../../static/user";

export const KursusTerbaruSwiper = () => {
  return (
    <>
      <Swiper

        spaceBetween={20}
        scrollbar={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 }
        }}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="swiper-kursus-terbaru px-2 pt-2 pb-12"
      >
        {listKursus.map(({ img, status, title, jmlPeserta, tglMulai, durasi, imgFasilitator, namaFasilitator }, index) => (
          <SwiperSlide className="bg-white flex flex-col shadow-defaultShadow gap-2 items-center mb-8 p-2 rounded-2xl" key={index}>
            <div className="w-full h-[238px] overflow-hidden rounded-lg ">
              <img className="object-cover w-full h-full" src={img} alt="" />
            </div>
            <div className="flex flex-col p-3 gap-6 items-start w-full">
              <span className={`text-paragraph1  py-2 px-[10px] rounded-lg capitalize ${status === "tersedia" ? "bg-skyBlue10 text-skyBlue70" : "bg-warm100 text-white"}`}>{status}</span>
              <h5 className="text-heading5 text-neutral-600">{title}</h5>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row items-center gap-1">
                  <img className="h-4" src="user-assets/icon-peserta.png" alt="" />
                  <p className="text-paragraph2 text-neutral-400">{jmlPeserta} Peserta</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img className="h-4" src="user-assets/icon-calendar.png" alt="" />
                  <p className="text-paragraph2 text-neutral-400">{tglMulai}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img className="h-4" src="user-assets/icon-clock.png" alt="" />
                  <p className="text-paragraph2 text-neutral-400">{durasi}</p>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <Avatar src={imgFasilitator} sx={{ height: 42, width: 42 }} />
                  <p className="text-paragraph1 text-neutral-600">{namaFasilitator}</p>
                </div>
                <ButtonGradient text={"Daftar Sekarang"} padX={"px-6"} padY={"py-4"} fontWeight={"font-bold"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper >
    </>
  )
}

export default KursusTerbaruSwiper