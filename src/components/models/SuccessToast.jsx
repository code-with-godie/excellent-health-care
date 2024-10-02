import { useEffect } from 'react';
import { useAPPContext } from '../../context/AppContext';

const SuccessToast = () => {
  const { successToast, setSuccessShowToast } = useAPPContext();
  useEffect(() => {
    const id = setTimeout(() => {
      setSuccessShowToast(null);
    }, 3000);
    return () => clearTimeout(id);
  }, [setSuccessShowToast]);
  return (
    <div className=' fixed top-2 w-screen  z-[1000000]  text-white p-2 flex justify-center gap-4 items-center'>
      <div className=' w-full max-w-[300px] p-2 bg-green-500 text-white rounded-lg flex justify-center items-center'>
        {successToast}
      </div>
    </div>
  );
};

export default SuccessToast;
