import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { ForumChat, Peserta, Jadwal, Overview, Panitia } from './pages/dashboard';

const routes = [
  {
    layout: "Dashboard",
    role: {
      fasilitator: 1,
      panitia: 0,
      management: 0
    },
    isSignIn: true,
    pages: [
      {
        title: 'Overview',
        element: <Overview />,
        icon: <HomeIcon />,
        path: '/',
      },
      {
        element: <p className="text-paragraph5 font-bold text-neutral-400">MENU</p>
      },
      {
        title: 'Panitia',
        element: <Panitia />,
        icon: <SupervisorAccountIcon />,
        path: '/panitia',
      },
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
        path: '/forum-chat',
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
