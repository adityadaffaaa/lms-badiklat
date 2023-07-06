import React, { useState } from 'react'
import { ButtonGradient } from '@/components/dashboard';
import ellipseWhite from '../../../../public/assets/user-assets/ellipse-white.png';
import dotWhite from '../../../../public/assets/user-assets/dot-white.png';
import logoBpk from '../../../../public/assets/dashboard-assets/logo-bpk.png'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <main className='h-screen w-full overflow-x-hidden flex flex-wrap'>
      <section className='bg-gradient-to-bl from-skyBlue90 to-skyBlue20 flex justify-center items-center flex-[1_1_400px] h-full relative p-6'>
        <div className='absolute bottom-0 left-0 flex flex-col items-center gap-10'>
          <img
            className='relative h-[80px]'
            src={ellipseWhite}
            alt=''
          />
          <img
            className='relative h-[200px] '
            src={dotWhite}
            alt=''
          />
        </div>
        <div className='absolute top-0 right-0 flex flex-col items-center gap-10'>
          <img
            className='relative h-[200px] '
            src={dotWhite}
            alt=''
          />
          <img
            className='relative h-[80px]'
            src={ellipseWhite}
            alt=''
          />
        </div>
        <article className='text-white'>
          <h1 className='text-heading1'>Learning From Other</h1>
          <h4 className='text-heading4 font-normal'>Sign in and start managing your participants !</h4>
        </article>
      </section>
      <section className='flex-[1_1_100px] flex justify-center items-center flex-col p-6 gap-6'>
        <img src={logoBpk} alt="" className='w-[140px]' />
        <div className='flex flex-col w-full'>
          <h4 className='text-neutral-600 text-heading4 font-extrabold'>Hello Again!</h4>
          <h5 className='text-neutral-600 text-heading5'>Welcome Back</h5>
        </div>
        <div className='flex flex-col w-full gap-6'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1, my: 0.5 }} className='text-skyBlue70' />
            <TextField id="input-with-sx" label="Email Address" variant="outlined" fullWidth type='email' />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LockIcon sx={{ mr: 1, my: 0.5 }} className='text-skyBlue70' />
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                label="Password"
                className='text-neutral-600'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton

                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <ButtonGradient text={"Login"} padY={'py-4'} fontWeight={'font-bold'}  />
        </div>
      </section>
    </main>
  )
}

export default SignIn;
