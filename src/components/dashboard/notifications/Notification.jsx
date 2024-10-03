import { FaTimes } from 'react-icons/fa';
import { useAPPContext } from '../../../context/AppContext';
import MyNotification from './MyNotification';
// import { useEffect, useState } from 'react';
const Notifications = () => {
  const {
    notifications,
    showNotifications: isOpen,
    setShowNotifications: onClose,
  } = useAPPContext();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-[400px] pt-4 bg-bg_main my-shadow shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex justify-between items-center p-4 border-b<h2 border-gray-200'>
        <div className='flex flex-col text-white'>
          <span className='font-bold uppercase block text-lg  tracking-wide'>
            Excellent Health
          </span>
          <span className='text-base md:text-lg  tracking-wide'>
            Training College
          </span>
        </div>
        <button
          className='text-white focus:outline-none'
          onClick={() => onClose(false)}
        >
          <FaTimes />
        </button>
      </div>
      <h2 className=' font-bold p-2 text-2xl'>Notifications</h2>

      <div className=' p-2 flex flex-col gap-2 overflow-auto flex-1'>
        {notifications.length === 0 ? (
          <div className=' flex-1 p-2'>
            {' '}
            <p>there no notification</p>{' '}
          </div>
        ) : (
          notifications.map(item => (
            <MyNotification
              key={item.id}
              {...item}
            />
          ))
        )}
      </div>
      <div className=' flex items-center justify-between text-textSoft italic p-2 mb-2'>
        {' '}
        <p>excellent health</p>{' '}
        <p> &copy; All rights reserved {new Date().getFullYear()}. </p>{' '}
      </div>
    </div>
  );
};

export default Notifications;
