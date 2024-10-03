import { Notifications, Search, Settings } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { useAPPContext } from '../../../context/AppContext';
import NotificationsComponents from '../../dashboard/notifications/Notification';
import { useEffect, useState } from 'react';
const DashboardTopnav = () => {
  const { notifications, setShowNotifications } = useAPPContext();
  const [nots, setNots] = useState([]);

  useEffect(() => {
    setNots(notifications.filter(item => item.read === false));
  }, [notifications]);
  return (
    <div className=' flex-col md:flex-row p-1 bg-bgSoft rounded-sm flex items-center gap-2'>
      <h1 className='hidden md:flex text-lg md:text-2xl capitalize p-2 text-blue-500'>
        excellent health
      </h1>
      <div className=' flex-col-reverse md:flex-row flex items-center gap-2 flex-1'>
        <form
          action=''
          className=' bg-bg_main px-4 py-2 rounded-md flex items-center gap-2 w-full'
        >
          <Search className=' cursor-pointer' />
          <input
            type='text'
            placeholder='search...'
            className=' bg-transparent outline-none border-none '
          />
        </form>
        <div className=' w-full flex justify-evenly md:justify-end gap-2 p-2'>
          <h1 className=' flex-1 text-lg capitalize md:hidden'>Dashboard</h1>
          <IconButton onClick={() => setShowNotifications(true)}>
            <Badge
              color='error'
              badgeContent={`${nots.length}`}
            >
              <Notifications className=' cursor-pointer text-white' />
            </Badge>
          </IconButton>
          <Settings className=' cursor-pointer' />
        </div>
      </div>
      <NotificationsComponents />
      {/* {showNotifications && <NotificationsComponents />} */}
    </div>
  );
};

export default DashboardTopnav;
