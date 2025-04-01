import { useAPPContext } from "../../context/AppContext";
import { Navlinksdata } from "../../data/Navlink";
import { Link, NavLink } from "react-router-dom";
import Drawer from "../drawer/Drawer";
import { FaBars, FaHome } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";

const Navbar = () => {
  const { setShowDrawer } = useAPPContext();

  // Map icon names to actual components
  const iconComponents = {
    FaHome: FaHome,
    GrAchievement: GrAchievement,
    MdOutlineMedicalServices: MdOutlineMedicalServices,
    BsFillPeopleFill: BsFillPeopleFill,
  };

  return (
    <div className='gap-4 w-full items-center shadow-lg bg-white flex justify-between top-0 fixed  z-50 p-2'>
      <div className=' flex items-center justify-between  gap-2 w-full md:w-auto'>
        <Link to='/'>
          <img src='/logo.png' alt='logo' className=' size-14 md:size-16' />
        </Link>
        <Link to='/'>
          <div className='flex flex-col items-start flex-1'>
            <span className='font-bold uppercase text-blue-500 block text-xl md:text-2xl tracking-wide logo'>
              Excellent Health
            </span>
            <span className='text-base text-blue-500 md:text-lg tracking-wide'>
              Training College
            </span>
          </div>
        </Link>
        <button
          onClick={() => setShowDrawer(true)}
          className=' p-3 md:p-5 md:hidden rounded-full mt-2 mr-2'
        >
          <FaBars className=' text-2xl' />
        </button>
      </div>
      <div className='hidden bg-white md:bg-blue-950 shadow-2xl  md:flex items-center justify-between md:rounded-full md:p-4 gap-4'>
        <div>
          <ul className='flex items-center gap-10 '>
            {Navlinksdata.map(({ _id, title, link, icon }) => {
              const IconComponent = iconComponents[icon];
              return (
                <li
                  className='font-normal text-white hover:text-blue-500 duration-300 tracking-wide cursor-pointer flex items-center gap-1 text-lg'
                  key={_id}
                >
                  <IconComponent className='mr-1 size-5' />
                  <NavLink to={link}>{title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Drawer />
    </div>
  );
};

export default Navbar;
