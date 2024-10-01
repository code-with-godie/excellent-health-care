import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import WhyUs from '../pages/why/WhyUs';
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
]);
