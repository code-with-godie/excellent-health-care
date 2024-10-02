import { useState } from 'react';
import { postData } from '../../api/apiCalls';
import { useAPPContext } from '../../context/AppContext';
import Model from '../models/Model';
import { CircularProgress } from '@mui/material';
// eslint-disable-next-line react/prop-types
const Enroll = ({ title, showModel, careerID }) => {
  const { token, handleUser, setSuccessShowToast, setToastMesage } =
    useAPPContext();
  const [loading, setLoading] = useState(false);
  const handleEnroll = async () => {
    try {
      setLoading(true);
      const res = await postData(`/users/enroll/${careerID}`, null, token);
      if (res) {
        const { user, message } = res;
        setSuccessShowToast(message);
        setToastMesage(message);
        handleUser(user, token);
        console.log(message);
      }
    } catch (error) {
      setToastMesage('Failed to enroll. please try again later');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Model>
      <div className=' p-4 bg-white rounded-lg w-full max-w-[900px] my-shadow'>
        <div>
          <h2 className='text-xl font-semibold text-blue-500 mb-4'>
            Enroll in Program
          </h2>
          <p className='text-gray-800 mb-1'>
            Are you sure you want to enroll in the
          </p>
          <div className='flex flex-col'>
            <span className='font-semibold text-blue-500 text-xl'>
              {title}?
            </span>
          </div>
        </div>
        <div
          className='flex justify-between mt-3'
          onClick={() => showModel(false)}
        >
          <button className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600'>
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={handleEnroll}
            className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400'
          >
            {loading ? <CircularProgress size={20} /> : ' Enroll'}
          </button>
        </div>
      </div>
    </Model>
  );
};

export default Enroll;
