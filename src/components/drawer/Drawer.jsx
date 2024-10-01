import { FaTimes } from 'react-icons/fa';
import { useAPPContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
const Drawer = () => {
  const { showDrawer: isOpen, setShowDrawer: onClose } = useAPPContext();
  const navigate = useNavigate();
  const goto = to => {
    navigate(to);
    onClose(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex justify-between items-center p-4 border-b<h2 border-gray-200'>
        <div className='flex flex-col'>
          <span className='font-bold uppercase text-blue-500 block text-lg  tracking-wide'>
            Excellent Health
          </span>
          <span className='text-base md:text-lg text-gray-700 tracking-wide'>
            Training College
          </span>
        </div>
        {/* <h2 className='text-lg font-bold text-blue-500'>Menu</h2> */}
        <button
          className='text-black focus:outline-none'
          onClick={() => onClose(false)}
        >
          <FaTimes />
        </button>
      </div>
      <ul className='flex flex-col p-4 space-y-5'>
        <li
          onClick={() => goto('/')}
          className='text-gray-700 hover:text-blue-500 cursor-pointer'
        >
          Home
        </li>
        <li
          onClick={() => goto('/')}
          className='text-gray-700 hover:text-blue-500 cursor-pointer'
        >
          Careers
        </li>
        <li
          onClick={() => goto('/why-us')}
          className='text-gray-700 hover:text-blue-500 cursor-pointer'
        >
          Why Join Us
        </li>
        <li
          onClick={() => goto('/about')}
          className='text-gray-700 hover:text-blue-500 cursor-pointer'
        >
          About Us
        </li>
      </ul>
      <div className='p-4 mt-auto'>
        <button
          className='w-full bg-blue-500 text-white px-4 py-2 rounded-md text-base font-medium 
          cursor-pointer transform transition-transform duration-500 ease-in-out hover:bg-blue-600'
          onClick={onClose}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Drawer;
