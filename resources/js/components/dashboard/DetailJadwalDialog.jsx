import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const DetailJadwalDialog = ({ open, handleClose, dataPeserta }) => {
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
            <h5 className='text-heading5 text-neutral-600'><a className='font-normal'>Topic : </a> Lorem ipsum dolor sit amet consectetur</h5>
            <p className='text-paragraph2 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur. Eget cras proin magna aliquam lacus. Fringilla gravida tincidunt amet turpis euismod ac malesuada. Duis semper dolor sem in. In non at at eleifend sit blandit eu proin dui.</p>
            <h5 className='text-heading5 text-neutral-600'><a className='font-normal'>With </a>Lorem Ipsum</h5>
          </div>
          <div className='flex flex-col gap-4 items-start md:items-end flex-[1_1_100px] text-neutral-600'>
            <h5 className='text-heading5'>24 February 2023</h5>
            <p className='text-paragraph2'>03.00 PM <a className='text-paragraph1'>to</a> 03.45 PM</p>
            <span className="py-1 px-3 rounded-lg text-white bg-warm90 text-paragraph1">45 Minutes</span>
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
              <th width="" align="center">Kelompok</th>
              <th width="" align="center" >Status</th>
            </tr>
          </thead>
          <tbody className="text-paragraph2 text-neutral-600">
            {dataPeserta.slice(0, 10).map(({ name, totalJp, kelompok, status }, index) => {
              let no = index + 1;
              return <tr className="border-b-2 ">
                <td className=" py-3" align="left">
                  {no}
                </td>
                <td className="pl-1" align="left">
                  {name}
                </td>
                <td align="center">{totalJp}</td>
                <td align='center'>{kelompok}</td>
                <td align="center">
                  <span
                    className={`py-1 px-2 rounded-full text-neutral-50 ${status === "Online" ? " bg-[#00C773]" : "bg-[#D00000]"}`}
                  >{status}</span>
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