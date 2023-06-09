import React from "react";
import Dashboard from "@/layouts/dashboard/Dashboard";
import { Link } from "@inertiajs/react";
import { dataKelompok } from "../../static/dashboard";
import { stringAvatar } from "../../settings";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
export const ForumChat = () => {
  return (
    <section className="mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full gap-5  h-full rounded-lg ">
      <h5 className="text-neutral-600 text-heading5">Data Kelompok</h5>
      <div className="flex flex-wrap gap-5">
        {dataKelompok.map(({ id, jmlPeserta, totalThreads, newThread, peserta }, index) => {
          return (
            <Link key={index} href="/forum-chat/kelompok" className="p-4 flex flex-col group bg-white shadow-defaultShadow rounded-lg gap-4 flex-[1_1_360px] transition-default hover:bg-skyBlue70 hover:text-white">
              <h5 className="text-heading5 text-neutral-600 group-hover:text-inherit">Kelompok {id}</h5>
              <div className="flex flex-row text-neutral-500 gap-4 group-hover:text-inherit">
                <div className="flex flex-col">
                  <h2 className="text-heading2">{jmlPeserta}</h2>
                  <p className="text-paragraph5">Jumlah Peserta</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-heading2">{totalThreads}</h2>
                  <p className="text-paragraph5">Threads</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Threads terbaru</p>
                <p className="text-paragraph4 text-neutral-400 leading-5 group-hover:text-inherit">{newThread}</p>
              </div>
              <div className="flex flex-col items-start gap-2 ">
                <p className="text-paragraph3 text-neutral-500 group-hover:text-inherit">Peserta</p>
                <AvatarGroup max={5}>
                  {peserta.map((name, index) => (
                    <Avatar key={index} {...stringAvatar(name)} />
                  ))}
                </AvatarGroup>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

ForumChat.layout = page => <Dashboard children={page} title={"Forum Chat"} />

export default ForumChat;
