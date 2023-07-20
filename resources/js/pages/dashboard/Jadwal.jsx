import { React, useState } from 'react';
import {
  dataJadwal,
  dataPeserta,
  months
} from '../../static/dashboard';
import {
  ButtonGradient,
  DialogJadwal,
  ReminderDialog,
  DetailJadwalDialog
} from '../../components/dashboard';
import { stringAvatar } from "../../settings"
import routes from '../../routes';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dashboard from '@/layouts/dashboard/Dashboard';
import { usePage } from '@inertiajs/react';

export const Jadwal = ({ jadwalData }) => {
  console.log({
    data_jadwal: jadwalData
  })

  const [openTambahJadwal, setOpenTambahJadwal] = useState(false);
  const [openEditJadwal, setOpenEditJadwal] = useState(false);
  const [openReminder, setOpenReminder] = useState(true);
  const [openDetailJadwal, setOpenDetailJadwal] = useState(false);
  const handleOpenTambahJadwal = () => setOpenTambahJadwal(true)
  const handleCloseTambahJadwal = () => setOpenTambahJadwal(false)
  const handleOpenEditJadwal = () => setOpenEditJadwal(true)
  const handleCloseEditJadwal = () => setOpenEditJadwal(false)
  const handleCloseReminder = () => setOpenReminder(false)
  const handleOpenDetailJadwal = () => setOpenDetailJadwal(true)
  const handleCloseDetailJadwal = () => setOpenDetailJadwal(false)

  const [idJadwal, setIdJadwal] = useState(0)

  const { role_id } = usePage().props.auth.user

  const roles = {
    management: role_id === 1 ? 1 : 0,
    panitia: role_id === 2 ? 1 : 0,
    fasilitator: role_id === 3 ? 1 : 0,
  }

  const dateFormat = (d) => {
    const date = new Date(d);
    const hari = date.getDate();
    const bulan = months[date.getMonth()];
    const tahun = date.getFullYear();

    return `${hari} ${bulan} ${tahun}`
  }


  return (
    <section className="mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full gap-6 h-full p-4 bg-white shadow-defaultShadow rounded-lg md:border-2 md:border-skyBlue10 relative">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 ">
          <label clas sName="cursor-pointer" htmlFor="hari_ini">
            <input className="peer sr-only" defaultChecked type="radio" name="waktu" id="hari_ini" />
            <span className="px-6 py-2 rounded-lg border-2 border-skyBlue10 text-skyBlue70 text-paragraph2 inline-block peer-checked:bg-skyBlue70 peer-checked:text-white peer-checked:border-skyBlue70 transition-default hover:text-white hover:bg-skyBlue70 hover:border-skyBlue70">
              Hari Ini
            </span>
          </label>
          <label className="cursor-pointer" htmlFor="besok">
            <input className="peer sr-only" type="radio" name="waktu" id="besok" />
            <span className="px-6 py-2 rounded-lg border-2 border-skyBlue10 text-skyBlue70 text-paragraph2 inline-block peer-checked:bg-skyBlue70 peer-checked:text-white peer-checked:border-skyBlue70 transition-default hover:text-white hover:bg-skyBlue70 hover:border-skyBlue70">
              Besok
            </span>
          </label>
        </div>
        <ButtonGradient onclick={handleOpenTambahJadwal} text={'Tambah jadwal'} icon={<AddIcon />} padY={'py-2'} padX={'px-4'} fontWeight={'font-bold'}></ButtonGradient>
        <DialogJadwal handleClose={handleCloseTambahJadwal} open={openTambahJadwal} title={"Tambah Jadwal Meeting"} textButton={"Tambah Jadwal"} namaFasilitator={"Pak Contoh"} role={roles} />
        <DialogJadwal handleClose={handleCloseEditJadwal} open={openEditJadwal} title={"Edit Jadwal Meeting"} textButton={"Simpan Perubahan"} namaFasilitator={"Pak Contoh"} role={roles} />
        <ReminderDialog handleClose={handleCloseReminder} open={openReminder} />

        <DetailJadwalDialog handleClose={handleCloseDetailJadwal} jadwalData={jadwalData} idJadwal={idJadwal} open={openDetailJadwal} />
      </div>
      <div className="list-jadwal flex flex-col gap-3 w-full">
        {jadwalData.map(({ id, topik, fasilitator, jam_mulai, jam_selesai, pesertas, tanggal, meeting_link }, index) => {
          return (
            <a key={index} className=" flex  flex-wrap p-4 justify-between w-full bg-skyBlue50 rounded-lg items-center">
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="text-white text-heading4">{roles.fasilitator ? "You have a meeting Today" : "Meetings"}</h4>
                <p className="text-white text-paragraph2">
                  Topic : <a className="text-paragraph1">{topik} <br />
                    <a href={meeting_link} target='_blank' className='underline font-normal'>{meeting_link}</a> </a>{' '}
                </p>
                <p className="text-white text-paragraph2">
                  With <a className="text-paragraph1">{fasilitator.nama}</a>
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <AvatarGroup max={5}>
                  {pesertas.map(({ nama }, index) => (
                    <Avatar key={index} {...stringAvatar(nama)} />
                  ))}
                </AvatarGroup>
              </div>
              <div className="flex flex-col items-end flex-1 gap-6">
                <h5 className="text-heading5 text-white">{dateFormat(tanggal)}</h5>
                <div className="flex flex-row items-center text-white gap-1">
                  <span className="py-1 px-3 rounded-lg  bg-warm90">2 Hours</span>
                  <span className=" bg-[#009E5C] rounded-lg">
                    <IconButton onClick={handleOpenEditJadwal}>
                      <BorderColorIcon className="text-white" sx={{ fontSize: 16 }} />
                    </IconButton>
                  </span>
                  <span className='bg-skyBlue100 rounded-lg'>
                    <IconButton onClick={() => {
                      setOpenDetailJadwal(true)
                      setIdJadwal(id)
                    }
                    }>
                      <VisibilityIcon className='text-white' sx={{ fontSize: 16 }} />
                    </IconButton>
                  </span>
                  <span className=" bg-[#D00000] rounded-lg">
                    <IconButton >
                      <DeleteForeverIcon className="text-white" sx={{ fontSize: 16 }} />
                    </IconButton>
                  </span>
                </div>
                <p className="text-white text-paragraph2">
                  {jam_mulai} <a className="text-paragraph1">to</a> {jam_selesai}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

Jadwal.layout = page => <Dashboard children={page} title={"Jadwal"} />

export default Jadwal;
