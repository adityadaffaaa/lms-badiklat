import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonGradient from "./ButtonGradient";
import LogoutIcon from '@mui/icons-material/Logout';
import routes from "../../routes";

export const NavBar = () => {
  const { isSignIn, pages } = routes[1];
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <header className='flex justify-center w-full bg-white py-6 shadow-defaultShadow fixed top-0 z-50'>
      <nav className='w-4/5 flex justify-between items-center'>
        <img className='h-10' src='dashboard-assets/logo-nav.png' alt='' />
        <ul className='flex gap-6'>
          {pages.map(({ path, title }, index) =>
            <li key={index}>
              <NavLink to={path}>
                {({ isActive }) =>
                  <a className={`transition-default hover:text-neutral-600 ${isActive ? "text-neutral-600" : "text-neutral-400"}`}>{title}</a>
                }
              </NavLink>
            </li>
          )}
        </ul>
        {
          isSignIn ?
            <div className="relative w-auto">
              <button onClick={handleToggle} className='flex flex-row gap-3'>
                <div className='flex items-center gap-2 text-neutral-600'>
                  <AccountCircleIcon />
                  <p className='text-paragraph3'>Daffa Fawwaz Aditya</p>
                </div>
                <KeyboardArrowDownIcon className={`${open ? "rotate-0" : "rotate-180"}`} />
              </button>
              <div className={`absolute left-0 top-16 w-full shadow-defaultShadow bg-white p-2 rounded-lg ${open ? "block" : "hidden"}`}>
                <button className=" btn-gradient-logout w-full relative before:content-[''] before:absolute before:h-3 before:w-3 before:bg-white before:-top-3 before:left-1/2 before:rotate-45 before:rounded-sm before:-z-20" href="#">
                  <LogoutIcon />
                  Log Out
                </button>
              </div>
            </div>
            :
            <ButtonGradient text={"Sign In"} padX={"px-6"} padY={"py-3"} fontWeight={"font-bold"} />
        }
      </nav>
    </header >
  );
};

export default NavBar;
