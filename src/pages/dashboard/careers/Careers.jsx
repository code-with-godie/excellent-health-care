import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from '../../../api/useFetch';
import { FaPlus } from 'react-icons/fa';

const Careers = () => {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useFetch('/programs');

  useEffect(() => {
    if (data) {
      setUsers(data?.programs);
    }
    console.log(data);
  }, [data]);
  if (loading) {
    return <p>loading...</p>;
  }
  if (users?.length === 0) {
    return (
      <div
        className={`flex flex-col gap-4 items-center justify-center h-[90vh] `}
      >
        <p className=' text-gray-400 italic'>
          no carreers yets. when you register a career,they will appear here or
        </p>
        <Link
          className=' bg-sky-600 p-4 rounded-lg'
          to='/dashboard/careers/add'
        >
          click to add a career
        </Link>
      </div>
    );
  }
  if (error) {
    return (
      <div
        className={`flex flex-col gap-4 items-center justify-center h-[90vh] `}
      >
        <p className=' text-gray-400 italic'>could not load users</p>
        <Link
          className=' bg-sky-600 p-4 rounded-lg'
          to='/dashboard'
        >
          back
        </Link>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-1 max-h-[90vh] `}>
      <h1 className=' capitalize text-lg text-textSoft '> careers </h1>
      <div className='bg-bgSoft  p-2'>
        <div className='py-4 px-2 flex  justify-end'>
          <Link
            to='/dashboard/careers/add'
            className=' p-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 text-lg'
          >
            {' '}
            <FaPlus /> add careeer{' '}
          </Link>
        </div>
        <div className=' flex-1 rounded-md w-full overflow-auto h-[55vh]'>
          <table className=' w-full overflow-auto'>
            <thead>
              <tr className=' '>
                <td className=' p-2 capitalize font-bold text-sm'>career</td>
                <td className=' p-2 capitalize font-bold text-sm'>
                  date created
                </td>
                <td className=' p-2 capitalize font-bold text-sm'>action</td>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr
                  key={index}
                  className=''
                >
                  <td className=' flex items-center gap-2 p-2 text-sm'>
                    {' '}
                    <Avatar
                      width={20}
                      height={20}
                      src={item?.image}
                      alt={item?.title}
                    />{' '}
                    {item?.title}{' '}
                  </td>
                  <td className=' text-sm'>
                    {' '}
                    {item?.createdAt?.toString().slice(2, 10)}{' '}
                  </td>
                  <td className=' text-sm flex gap-2 items-start'>
                    <Link
                      href={`/dashboard/users/${item?._id}`}
                      className=' px-3 py-1 bg-cyan-600 rounded-md cursor-pointer'
                    >
                      view
                    </Link>
                    <form>
                      <input
                        type='hidden'
                        name='id'
                        value={item?._id}
                      />
                      <button className=' px-3 py-1 bg-red-400 rounded-md cursor-pointer'>
                        delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Careers;
