import { FaTimes, FaHome } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { useAPPContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Navlinksdata } from "../../data/Navlink"; // Import your data

const Drawer = () => {
  const { showDrawer: isOpen, setShowDrawer: onClose } = useAPPContext();
  const navigate = useNavigate();

  // Create icon mapping
  const iconComponents = {
    FaHome: FaHome,
    MdOutlineMedicalServices: MdOutlineMedicalServices,
    BsFillPeopleFill: BsFillPeopleFill,
  };

  const goto = (to) => {
    navigate(to);
    onClose(false);
  };

  return (
    <div
      className={`fixed top-16 rounded-lg left-0 p-4 h-auto  bg-white ring ring-gray-300/85 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className='flex justify-between items-start gap-6 p-4 border-b border-gray-200'>
        <div className='flex flex-col'>
          <span className='font-bold uppercase text-blue-500 block text-lg tracking-wide'>
            Excellent Health
          </span>
          <span className='text-base md:text-lg text-gray-700 tracking-wide'>
            Training College
          </span>
        </div>
        <button
          className='text-black focus:outline-none'
          onClick={() => onClose(false)}
        >
          <FaTimes />
        </button>
      </div>

      <ul className='flex flex-col p-4 space-y-5'>
        {Navlinksdata.map(({ _id, title, link, icon }) => {
          const IconComponent = iconComponents[icon];
          return (
            <li
              key={_id}
              onClick={() => goto(link)}
              className='flex items-center gap-3 text-black hover:text-blue-500 cursor-pointer'
            >
              <IconComponent className='text-lg' />
              {title}
            </li>
          );
        })}
      </ul>
      <p className=' p-2'>&copy; All rights reserved.</p>
      <p className=' p-2 max-w-[300px]'>
        Excellent Health Care college 2024-
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Drawer;
