import React, { useEffect } from 'react';
import { useAPPContext } from '../../context/AppContext';

const Toast = () => {
  const { toastMessage, setToastMesage } = useAPPContext();
  useEffect(() => {
    const id = setTimeout(() => {
      setToastMesage(null);
    }, 3000);
    return () => clearTimeout(id);
  }, [setToastMesage]);
  return (
    <div className=' fixed top-2 w-screen  z-[1000000]  text-white p-2 flex justify-center gap-4 items-center'>
      <div className=' w-full max-w-[300px] p-2 bg-red-400 text-white rounded-lg flex justify-center items-center'>
        {toastMessage}
      </div>
    </div>
  );
};

export default Toast;
