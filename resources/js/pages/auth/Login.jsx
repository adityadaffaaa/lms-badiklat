import React, { useState, useEffect } from 'react'
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
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import {
  router,
  usePage
} from '@inertiajs/react';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { errors } = usePage().props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const key = event.target.id
    const value = event.target.value
    setValues(values => ({
      ...values,
      [key]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault;
    router.post(route('/'), values);
  }

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (errors.loginError) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [errors.loginError])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <main className='h-screen w-full overflow-x-hidden flex flex-wrap-reverse lg:flex-wrap'>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errors.loginError}
        action={action}
        ContentProps={{
          sx: {
            background: "red"
          }
        }}
      />
      <section className='bg-gradient-to-bl from-skyBlue90 to-skyBlue20 flex justify-center items-center flex-[2_1_400px] h-full relative p-6'>
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
      <section className='flex-[1_1_400px] flex justify-center items-center flex-col p-6 gap-6'>
        <img src={logoBpk} alt="" className='w-[140px]' />
        <div className='flex flex-col items-center w-full'>
          <h4 className='text-neutral-600 text-heading4 font-extrabold'>Hello Again!</h4>
          <h5 className='text-neutral-600 text-heading5'>Welcome Back</h5>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[500px] gap-6'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1, my: 0.5 }} className='text-skyBlue70' />
            <TextField id="email" label="Email Address" variant="outlined"
              value={values.email}
              onChange={handleChange}
              fullWidth type='email'
              autoFocus required error={errors.email ? true : false}
              helperText={errors.email && "Email wajib diisi dengan benar"} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LockIcon sx={{ mr: 1, my: 0.5 }} className='text-skyBlue70' />
            <div className='flex flex-col w-full'>
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  label="Password"
                  className='text-neutral-600'
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password ? true : false}
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
                  required
                />
              </FormControl>
              {errors.password && <p className='text-paragraph5 font-medium ml-3 text-red-600'>Password wajib diisi dengan benar</p>}
            </div>
          </Box>
          <ButtonGradient text={"Login"} padY={'py-4'} fontWeight={'font-bold'} fullWidth submit />
        </form>

      </section>
    </main>
  )
}

export default Login;
