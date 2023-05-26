import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

import LogoutIcon from '@mui/icons-material/Logout';

import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const SideNavBar = () => {
  const { pages, role } = routes[0];

  return (
    <aside className="fixed lg:relative h-screen w-[290px] py-3 pl-3">
      <nav className="w-[270px] hidden fixed h-[calc(100%-24px)] lg:flex flex-col justify-between items-center p-4 bg-[#ffffff] shadow-defaultShadow rounded-lg">
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-row gap-3">
            <img className="h-10" src="dashboard-assets/logo-bpk.png" alt="" />
            <div className="flex flex-col">
              <p className="text-paragraph3 text-neutral-500">Dashboard LMS Badiklat</p>
              <p className="text-paragraph4 text-neutral-400">{`${role.fasilitator ? "Fasilitator" : "Panitia"}`}</p>
            </div>
          </div>
          <menu className="flex flex-col w-full gap-6">
            <NavLink to="/">
              {({ isActive }) => (
                <button className={`${isActive ? 'btn-gradient-nav-active' : 'btn-gradient-nav'} w-full`}>
                  <HomeIcon />
                  Overview
                </button>
              )}
            </NavLink>
            <p className="text-paragraph5 font-bold text-neutral-400">MENU</p>
            {pages.map(({ title, icon, path }, index) => index === 1 && role.fasilitator ? null : (
              <NavLink key={index} to={path}>
                {({ isActive }) => (
                  <button className={`${isActive ? 'btn-gradient-nav-active' : 'btn-gradient-nav'} w-full`}>
                    {icon}
                    {title}
                  </button>
                )}
              </NavLink>
            )
            )}
            <p className="text-paragraph5 font-bold text-neutral-400">LOG OUT</p>
            <a className=" btn-gradient-logout" href="#">
              <LogoutIcon />
              Log Out
            </a>
          </menu>
        </div>
        <p className="text-paragraph5 text-neutral-400">©2023 Dashboard Workshop Badiklat</p>
      </nav>
    </aside>
  );
};

export default SideNavBar;
