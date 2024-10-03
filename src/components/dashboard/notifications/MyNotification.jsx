import { DoneAll } from '@mui/icons-material';
import { FaTrash } from 'react-icons/fa';
import { useAPPContext } from '../../../context/AppContext';

// eslint-disable-next-line react/prop-types
const MyNotification = ({ id, message, read }) => {
  const { socket } = useAPPContext();
  const readNotification = () => {
    socket?.emit('READ_NOTIFICATION', id);
  };
  //   const clearNotification = () => {
  //     socket?.emit('CLEAR_NOTIFICATION', id);
  //   };
  const deleteNotification = () => {
    socket?.emit('DELETE_NOTIFICATION', id);
  };
  return (
    <div className=' flex flex-col'>
      <div className=' p-2 flex items-start gap-2 rounded-lg cursor-pointer '>
        <div className=' flex flex-col'>
          <p className=' '> {message} </p>
          <div className=' flex justify-end'>
            {!read && (
              <button
                onClick={readNotification}
                className='rounded-l text-green-500 py-1 px-2 text-sm'
              >
                <DoneAll /> mark as read
              </button>
            )}
            <button
              onClick={deleteNotification}
              className=' text-red-400 py-1 px-2 text-sm rounded-l flex gap-2 items-center'
            >
              <FaTrash /> remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNotification;
