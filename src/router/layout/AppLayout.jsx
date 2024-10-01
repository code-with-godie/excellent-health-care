import { Outlet } from 'react-router-dom';
import { useAPPContext } from '../../context/AppContext';
import Model from '../../components/models/Model';
import Register from '../../components/auth/Register';
import Login from '../../components/auth/Login';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
const AppLayout = () => {
  const { showModel, isLogin } = useAPPContext();
  return (
    <section className='p-2 flex justify-center'>
      <article className=' w-full max-w-[1500px]'>
        <Navbar />
        <Outlet />
        <Footer />
        {showModel && <Model>{isLogin ? <Login /> : <Register />}</Model>}
      </article>
    </section>
  );
};

export default AppLayout;
