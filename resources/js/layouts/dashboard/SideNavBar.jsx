import React, { useState } from 'react';
import { Link } from '@inertiajs/react'
import routes from '../../routes';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const SideNavBar = ({ open, handleClose }) => {
  const { pages, role } = routes[0];
  const [active, setActive] = useState(null);
  const handleChange = (index) => {
    if (active === index) {
      setActive(null)
    }
    setActive(index)
  }

  return (
    <aside className={`fixed z-[60] lg:block w-full p-3 lg:z-0 lg:relative h-screen lg:w-[290px] lg:py-3 lg:pl-3 ${open ? "block" : "hidden"}`}>
      <nav className={`lg:w-[270px] w-[calc(100%-24px)] fixed h-[calc(100%-42px)] md:h-[calc(100%-24px)] lg:h-[calc(100%-24px)] lg:flex flex-col justify-between items-center p-4 bg-[#ffffff] shadow-defaultShadow rounded-lg ${open ? "flex" : "hidden"}`}>
        <div className="flex flex-col w-full gap-10">
          <div className='header-sidenav flex justify-between'>
            <div className="flex flex-row gap-3">
              <img className="h-10" src="assets/dashboard-assets/logo-bpk.png" alt="" />
              <div className="flex flex-col">
                <p className="text-paragraph3 text-neutral-500">Dashboard LEAF</p>
                <p className="text-paragraph4 text-neutral-400">{`${role.fasilitator ? "Fasilitator" : role.panitia ? "Panitia" : "Manajemen"}`}</p>
              </div>
            </div>
            <IconButton onClick={handleClose}  >
              <CloseIcon />
            </IconButton>
          </div>
          <menu className="flex flex-col w-full gap-6">
            {pages.map(({ title, icon, path, element }, index) => index === 4 && role.fasilitator ?
              null : (index === 2 && role.fasilitator) || (index === 2 && role.panitia) ?
                null : index > 2 && role.management ? null :
                  index === 1 ?
                    element : (
                      <Link key={index} href={path}>
                        <button onClick={() => handleChange(index)} className={`${active === index ? "btn-gradient-nav-active" : "btn-gradient-nav"}  w-full`}>
                          {icon}
                          {title}
                        </button>
                      </Link>
                    )
            )}
            <p className="text-paragraph5 font-bold text-neutral-400">LOG OUT</p>
            <Link className=" btn-gradient-logout" href="#">
              <LogoutIcon />
              Log Out
            </Link>
          </menu>
        </div>
        <p className="text-paragraph5 text-neutral-400">©2023 Dashboard LEAF</p>
      </nav>
    </aside>
  );
};

export default SideNavBar;
