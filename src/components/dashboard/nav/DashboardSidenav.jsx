import { Dashboard, Help, Home, Logout, Settings } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAPPContext } from '../../../context/AppContext';
import { MdShoppingBag, MdSupervisedUserCircle } from 'react-icons/md';
const DashboardSidenav = () => {
  const { user } = useAPPContext();
  return (
    <div className='w-max md:w-1/5 bg-bgSoft md:min-w-[250px] overflow-auto p-2'>
      <div className=' flex gap-2 items-center mb-2'>
        <Avatar
          className=' w-10 h-10 md:w-14 md:h-14'
          src={user?.avatar}
          alt={user?.username}
        />
        <div className=' flex-1 flex flex-col'>
          <h1 className=' hidden md:block capitalize font-bold text-lg'>
            {user?.username}
          </h1>
          <p className=' hidden md:block italic text-textSoft '>
            administrator
          </p>
        </div>
      </div>
      <div className=' flex flex-col gap-1'>
        <h1 className=' text-textSoft capitalize'>pages</h1>
        <div className=' flex flex-col gap-1'>
          <Link
            to='/dashboard'
            className=' flex items-center  hover:bg-gray-50/10 px-2 rounded-lg cursor-pointer py-2 gap-2'
          >
            <Dashboard className=' text-3xl md:text-lg' />
            <p className='hidden md:block text-lg  capitalize'>dashboard</p>
          </Link>
          <Link
            to='/dashboard/users'
            className=' flex items-center gap-2 hover:bg-gray-50/10 px-2 rounded-lg cursor-pointer py-2'
          >
            <MdSupervisedUserCircle className=' text-3xl md:text-lg' />
            <p className=' hidden md:block text-lg capitalize'>users</p>
          </Link>
          <Link
            to='/dashboard/careers'
            className=' flex items-center gap-2 hover:bg-gray-50/10 px-2 rounded-lg cursor-pointer py-2'
          >
            <MdShoppingBag className=' text-3xl md:text-lg' />
            <p className=' hidden md:block text-lg  capitalize'>careers</p>
          </Link>
          <Link
            to='/'
            className=' flex items-center gap-2 hover:bg-gray-50/10 px-2 rounded-lg cursor-pointer py-2'
          >
            <Home className=' text-3xl md:text-lg' />
            <p className='hidden md:block text-lg capitalize'>back to app</p>
          </Link>
        </div>
      </div>

      <div className=' flex flex-col gap-1'>
        <h1 className=' text-textSoft capitalize'>users</h1>
        <div className=' flex flex-col gap-2'>
          <div className=' flex items-center  hover:bg-gray-50/10 px-2 rounded-lg cursor-pointer py-2 gap-2'>
            <Settings className=' text-3xl md:text-lg' />
            <p className='hidden md:block text-lg capitalize'>settings</p>
          </div>
          <div className=' flex items-center gap-2 hover:bg-gray-50/10 px-2 rounded-lg cursor-pointer py-2'>
            <Help className='text-3xl md:text-lg' />
            <p className='hidden md:block text-lg  capitalize'>help</p>
          </div>
          <div className=' flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-2 rounded-lg cursor-pointer py-2 justify-center'>
            <Logout className=' text-3xl md:text-lg' />
            <p className='hidden md:block text-lg  capitalize'>logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidenav;
