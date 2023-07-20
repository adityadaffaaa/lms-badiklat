import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  months
} from '../../static/dashboard';
export const DetailJadwalDialog = ({ open, handleClose, jadwalData, idJadwal }) => {

  const jadwal = idJadwal === 0 ? jadwalData[0] : jadwalData.find(({ id }) => id === idJadwal)

  const { topik, fasilitator, jam_mulai, jam_selesai, tanggal, meetink_link, pesertas, deskripsi } = jadwal


  const dateFormat = (d) => {
    const date = new Date(d);
    const hari = date.getDate();
    const bulan = months[date.getMonth()];
    const tahun = date.getFullYear();

    return `${hari} ${bulan} ${tahun}`
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth maxWidth="md"
    >
      <DialogTitle className='border-b-2'>
        <h4 className='text-heading4 text-neutral-600'>Detail Jadwal</h4>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-3 mt-4'>
        <div className='flex flex-wrap gap-4'>
          <div className='flex flex-col flex-[1_1_500px] gap-3'>
            <h5 className='text-heading5 text-neutral-600'><a className='font-normal'>Topic : </a> {topik}</h5>
            <p className='text-paragraph2 max-w-[500px]'>{deskripsi}</p>
            <h5 className='text-heading5 text-neutral-600'><a className='font-normal'>With </a>{fasilitator.nama} <br /> <a href={meetink_link}>{meetink_link}</a></h5>
          </div>
          <div className='flex flex-col gap-4 items-start md:items-end flex-[1_1_100px] text-neutral-600'>
            <h5 className='text-heading5'>{dateFormat(tanggal)}</h5>
            <p className='text-paragraph2'>{jam_mulai} <a className='text-paragraph1'>to</a> {jam_selesai}</p>
            <span className="py-1 px-3 rounded-lg text-white bg-warm90 text-paragraph1">2 Hours</span>
          </div>
        </div>
        <table className="table-peserta-overview w-full">
          <thead className="border-b-2 text-neutral-700 text-paragraph1">
            <tr>
              <th width="" align="left" className="py-3">
                No
              </th>
              <th width="40%" className="pl-1" align="left">
                Nama
              </th>
              <th width="" align="center">Total JP</th>
              <th width="" align="center" >Status</th>
            </tr>
          </thead>
          <tbody className="text-paragraph2 text-neutral-600">
            {pesertas.slice(0, 10).map(({ nama, total_jp, is_online }, index) => {
              let no = index + 1;
              return <tr className="border-b-2 ">
                <td className=" py-3" align="left">
                  {no}
                </td>
                <td className="pl-1" align="left">
                  {nama}
                </td>
                <td align="center">{total_jp}</td>

                <td align="center">
                  <span
                    className={`py-1 px-2 rounded-full text-neutral-50 ${is_online ? " bg-[#00C773]" : "bg-[#D00000]"}`}
                  >{is_online ? "Online" : "Offline"}</span>
                </td>
              </tr>
            }
            )}
          </tbody>
        </table>
      </DialogContent>
    </Dialog>
  )
}

export default DetailJadwalDialog