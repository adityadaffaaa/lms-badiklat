import { React, useState } from 'react'
import {
  BarChart,
  LineChart,
  ButtonGradient,
  FasilitatorDialog,
  InputSuratDialog
} from "../../components/dashboard";
import Dashboard from '@/layouts/dashboard/Dashboard';

import { aktivitasPeserta } from "../../static/dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LinearProgress from "@mui/material/LinearProgress";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';



export const DetailFasilitator = () => {
  const [value, setValue] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [openST, setOpenST] = useState(false);
  const [openSKM, setOpenSKM] = useState(false);
  const [openSPJ, setOpenSPJ] = useState(false);
  const handleChange = (event) => setValue(event.target.value)
  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => setOpenEdit(false)
  const handleOpenST = () => setOpenST(true)
  const handleCloseST = () => setOpenST(false)
  const handleOpenSKM = () => setOpenSKM(true)
  const handleCloseSKM = () => setOpenSKM(false)
  const handleOpenSPJ = () => setOpenSPJ(true)
  const handleCloseSPJ = () => setOpenSPJ(false)
  return (
    <section className='mt-[calc(102px+20px)] md:mt-[calc(68px+20px)] flex flex-col w-full gap-5 h-full rounded-lg '>
      <FasilitatorDialog handleClose={handleCloseEdit} open={openEdit} title={"Edit Fasilitator"} textButton={"Simpan Perubahan"} />
      <InputSuratDialog open={openST} handleClose={handleCloseST} title={"surat tugas"} textButton={"Lampirkan Surat"} />
      <InputSuratDialog open={openSKM} handleClose={handleCloseSKM} title={"surat keterangan mengajar"} textButton={"Lampirkan Surat"} />
      <InputSuratDialog open={openSPJ} handleClose={handleCloseSPJ} title={"surat pertanggung jawaban"} textButton={"Lampirkan Surat"} />
      <div className='flex flex-wrap gap-5'>
        <div className='flex flex-col shadow-defaultShadow rounded-lg flex-[1_1_200px] overflow-hidden'>
          <div className='flex justify-center items-center p-4 bg-neutral-200'>
            <AccountCircleIcon
              sx={{ fontSize: 158 }}
              className='text-skyBlue70 bg-white rounded-full'
            />
          </div>
          <div className='p-4 flex justify-between items-center'>
            <div className='flex flex-col gap-2 text-neutral-500'>
              <h5 className='text-heading5'>Nama Fasilitator</h5>
              <p className='text-paragraph4'><a className='font-bold'>NIP :</a>  12345678910</p>
              <p className='text-paragraph4'><a className='font-bold'>NIK :</a>  12345678910</p>
              <p className='text-paragraph4'><a className='font-bold'>No Rekening :</a>  12345678910 (BNI)</p>

              <p className='text-paragraph1'>KSBA</p>
            </div>
            <ButtonGradient onclick={handleOpenEdit} text={"Edit"} padX={"px-4"} padY={"py-2"} fontWeight={"font-bold"} icon={<BorderColorIcon sx={{ fontSize: 16 }} />} />
          </div>
        </div>

        <div className='monitoring-progress flex flex-col gap-6 shadow-defaultShadow rounded-lg flex-[1_1_200px] p-4'>
          <div className='flex flex-wrap gap-3'>
            <h5 className='text-heading5 flex-[1_1_150px] text-neutral-600'>Monitoring Progress</h5>
            <FormControl className='flex-[1_1_100px]'>
              <InputLabel id="demo-simple-select-label">Rincian</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Rincian"
                onChange={handleChange}
              >
                <MenuItem value={10}>Mingguan</MenuItem>
                <MenuItem value={20}>Bulanan</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='progress-bar flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <p className='text-paragraph1 text-skyBlue70 my-0'>90%</p>
            </div>
            <div className='progress-bar flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <p className='text-paragraph1 text-warm80 my-0'>90%</p>
            </div>
            <div className='progress-bar flex flex-row flex-[2] items-center gap-7'>
              <LinearProgress
                variant='determinate'
                className='w-full'
                value={90}
              />
              <p className='text-paragraph1 text-warm40 my-0'>90%</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <span className='p-1 rounded-full bg-skyBlue70'></span>
              <p className='text-paragraph3 text-neutral-600'>Penilaian</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='p-1 rounded-full bg-warm80'></span>
              <p className='text-paragraph3 text-neutral-600'>Pertemuan</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='p-1 rounded-full bg-warm40'></span>
              <p className='text-paragraph3 text-neutral-600'>Diskusi</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col shadow-defaultShadow rounded-lg flex-[1_1_100px] p-4 gap-3'>
          <h5 className='text-heading5 text-neutral-600'>Recent Activity</h5>
          <hr />
          <div className='flex flex-row items-center gap-3'>
            <ChatBubbleIcon
              sx={{ fontSize: 38 }}
              className='text-skyBlue70'
            />
            <div className='flex flex-col'>
              <p className='text-paragraph1 text-neutral-500'>
                Membuat Threads
              </p>
              <p className='text-paragraph4 text-neutral-400'>
                14 March, 11.30AM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='forum-chat-chart flex flex-wrap gap-5'>
        <div className='flex flex-col gap-6 shadow-defaultShadow rounded-lg flex-[1_1_100px] p-4'>
          <div className='flex flex-col '>
            <h5 className='text-heading5 text-neutral-600'>Forum Chat</h5>
            <p className='text-paragraph2 text-neutral-500'>
              Lorem ipsum dolor
            </p>
          </div>
          <LineChart />
        </div>
        <div className='flex flex-col shadow-defaultShadow rounded-lg flex-[1_1_400px] p-4 gap-3'>
          <div className='flex flex-col'>
            <h5 className='text-heading5 text-neutral-600'>Surat - surat</h5>
            <p className='text-paragraph4 text-neutral-500'>
              Unduh surat lalu lampirkan dalam bentuk scan dengan format pdf
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center py-4 border-t-2'>
              <div className='flex flex-col flex-1 text-neutral-500'>
                <p className='text-paragraph1'>ST</p>
                <p className='text-paragraph2'>Surat Tugas</p>
              </div>
              <div className='flex items-center justify-end flex-1'>
                <span
                  className={`py-1 px-2 rounded-full text-neutral-50 bg-[#00C773]`}
                >Sudah Ada</span>
                <IconButton>
                  <DownloadIcon className='text-skyBlue70' />
                </IconButton>
                <IconButton>
                  <VisibilityIcon className='text-skyBlue70' />
                </IconButton>
                <ButtonGradient onclick={handleOpenST} text={"Lampirkan"} padX={"px-4"} padY={"py-2"} fontWeight={"font-bold"} />
              </div>
            </div>
            <div className='flex flex-row items-center py-4 border-t-2'>
              <div className='flex flex-col flex-1 text-neutral-500'>
                <p className='text-paragraph1'>SKM</p>
                <p className='text-paragraph2'>Surat Keterangan Mengajar</p>
              </div>
              <div className='flex items-center justify-end flex-1'>
                <span
                  className={`py-1 px-2 rounded-full text-neutral-50 bg-[#00C773]`}
                >Sudah Ada</span>
                <IconButton>
                  <DownloadIcon className='text-skyBlue70' />
                </IconButton>
                <IconButton>
                  <VisibilityIcon className='text-skyBlue70' />
                </IconButton>
                <ButtonGradient onclick={handleOpenSKM} text={"Lampirkan"} padX={"px-4"} padY={"py-2"} fontWeight={"font-bold"} />
              </div>
            </div>
            <div className='flex flex-row items-center py-4 border-t-2'>
              <div className='flex flex-col flex-1 text-neutral-500'>
                <p className='text-paragraph1'>SPJ</p>
                <p className='text-paragraph2'>Surat Pertanggung Jawaban</p>
              </div>
              <div className='flex items-center justify-end flex-1'>
                <span
                  className={`py-1 px-2 rounded-full text-neutral-50 bg-[#D00000]`}
                >Belum Ada</span>
                <IconButton>
                  <DownloadIcon className='text-skyBlue70' />
                </IconButton>
                <IconButton>
                  <VisibilityIcon className='text-skyBlue70' />
                </IconButton>
                <ButtonGradient onclick={handleOpenSPJ} text={"Lampirkan"} padX={"px-4"} padY={"py-2"} fontWeight={"font-bold"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

DetailFasilitator.layout = page => <Dashboard children={page} title={"Detail Fasilitator"} />

export default DetailFasilitator