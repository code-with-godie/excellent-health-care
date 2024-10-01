import { useAPPContext } from '../../context/AppContext';
import { Navlinksdata } from '../../data/Navlink';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Drawer from '../drawer/Drawer';

import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const { setShowModel, setShowDrawer } = useAPPContext();
  return (
    <div className='mx-auto w-full items-center flex justify-between  top-0 sticky my-shadow bg-white z-50 p-2 '>
      <div className='flex flex-col items-start'>
        <span className='font-bold uppercase text-blue-500 block text-2xl md:text-2xl tracking-wide'>
          Excellent Health
        </span>
        <span className='text-base md:text-lg text-gray-700 tracking-wide'>
          Training College
        </span>
      </div>

      <div>
        <ul className='hidden md:flex items-center gap-10 '>
          {Navlinksdata.map(({ _id, title, link, same }) => (
            <li
              className='font-normal text-black hover:text-blue-500 duration-300 tracking-wide cursor-pointer'
              key={_id}
            >
              {same ? (
                <Link
                  activeClass='active'
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              ) : (
                <NavLink to={link}>{title}</NavLink>
              )}
            </li>
          ))}
          <button
            className='bg-blue-500 text-white px-4 py-2 border-none rounded-md text-base 
              cursor-pointer transform scale-100 transition-transform duration-500 ease-in-out'
            onClick={() => setShowModel(true)}
          >
            Login
          </button>
        </ul>
        <button
          onClick={() => setShowDrawer(true)}
          className='fixed z-10 top-0 right-2 p-3 md:p-5 md:hidden rounded-full mt-2 mr-2'
        >
          <FaBars className=' text-2xl' />
        </button>
      </div>
      <Drawer />
    </div>
  );
};

export default Navbar;
