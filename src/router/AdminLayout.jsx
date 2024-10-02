import { Outlet } from 'react-router-dom';
import DashboardFooter from '../components/dashboard/footer/DashboardFooter';
import DashboardSidenav from '../components/dashboard/nav/DashboardSidenav';
import DashboardTopnav from '../components/dashboard/nav/DashboardTopnav';

// eslint-disable-next-line react/prop-types
const AdminLayout = () => {
  return (
    <section className=' flex justify-center bg-bg_main text-white'>
      <div className=' h-screen overflow-auto flex w-full max-w-[1500px] gap-4'>
        <DashboardSidenav />
        <div className=' md:w-4/5  overflow-auto flex flex-col gap-4 p-4'>
          <DashboardTopnav />
          <Outlet />
          <DashboardFooter />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
