import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { ForumChat, Peserta, Jadwal } from './pages/dashboard';

const routes = [
  {
    layout: "Dashboard",
    role: {
      fasilitator: 0,
      panitia: 1
    },
    isSignIn: true,
    pages: [
      {
        title: 'Peserta',
        element: <Peserta />,
        icon: <PeopleAltIcon />,
        path: '/peserta',
      },
      {
        title: 'Fasilitator',
        element: <Peserta />,
        icon: <HowToRegIcon />,
        path: '/fasilitator',
      },
      {
        title: 'Forum Chat',
        element: <ForumChat />,
        icon: <ChatBubbleIcon />,
        path: '/chat',
      },
      {
        title: 'Jadwal',
        element: <Jadwal />,
        icon: <CalendarMonthIcon />,
        path: '/jadwal',
      },
    ]
  },
  {
    layout: "User",
    isSignIn: true,
    pages: [
      {
        title: 'Beranda',
        path: '/'
      },
      {
        title: 'Kursus',
        path: '/kursus'
      },
      {
        title: 'Fasilitator',
        path: '/fasilitator'
      },
      {
        title: 'Tanya Kami',
        path: '/tanya-kami'
      },
    ],
  }
]

export default routes;
