import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import ProtecedLayout from './layout/ProtectedLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import WhyUs from '../pages/why/WhyUs';
import Dashboard from '../pages/dashboard/Dashboard';
import AdminLayout from './AdminLayout';
import Careers from '../pages/dashboard/careers/Careers';
import Users from '../pages/dashboard/users/Users';
import Career from '../pages/dashboard/add/Career';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/why-us',
        element: <WhyUs />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtecedLayout />,
    children: [
      {
        path: '/',
        element: <AdminLayout />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/dashboard/users', element: <Users /> },
          { path: '/dashboard/careers', element: <Careers /> },
          { path: '/dashboard/careers/add', element: <Career /> },
        ],
      },
    ],
  },
]);
