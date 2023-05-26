import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useLocation } from 'react-router-dom';
const NavBar = () => {
  const { pathname } = useLocation();
  const [page] = pathname.split('/').filter((el) => el !== '');

  return (
    <header className="fixed flex flex-col w-[calc(100%-48px)] md:w-[calc(100%-24px)] lg:w-[calc(100%-308px)] mt-3 shadow-defaultShadow p-3 rounded-lg gap-2  bg-[rgba(255,255,255,0.8)] backdrop-blur-md z-50 top-0 md:flex-row md:justify-between md:items-center md:border-2 md:border-skyBlue10">
      <h4 className="text-heading4 text-neutral-600 capitalize">{!page ? "overview" : page}</h4>
      <div className="flex flex-row justify-between md:gap-2 items-center">
        <div className="flex flex-row flex-1 border-2 rounded-lg overflow-hidden items-center border-neutral-500 py-3 px-6">
          <input className="outline-none border-none w-full text-paragraph4 bg-transparent placeholder:text-neutral-400" placeholder="Cari sesuatu..." type="text" name="" id="" />
          <SearchIcon className="text-neutral-500" />
        </div>
        <IconButton color="primary">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon className="text-skyBlue70" />
          </Badge>
        </IconButton>
        <IconButton>
          <MenuIcon className="text-neutral-500" />
        </IconButton>
        <div className="flex flex-row items-center">
          <IconButton>
            <AccountCircleIcon className="text-neutral-500" />
          </IconButton>
          <p className="hidden md:block text-paragraph3 text-neutral-500">Daffa Fawwaz Aditya</p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
