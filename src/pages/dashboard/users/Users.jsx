import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from '../../../api/useFetch';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useFetch('/users');

  useEffect(() => {
    if (data) {
      setUsers(data?.users);
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
          no users yets. when users register,they will appear here or
        </p>
        <Link
          className=' bg-sky-600 p-4 rounded-lg'
          href='/dashboard/new/user'
        >
          click to add a user
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
          href='/dashboard'
        >
          back
        </Link>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-1 max-h-[90vh] `}>
      <h1 className=' capitalize text-lg text-textSoft '> users </h1>
      <div className='bg-bgSoft  p-2'>
        <div className=' flex-1 rounded-md w-full overflow-auto h-[55vh]'>
          <table className=' w-full overflow-auto'>
            <thead>
              <tr className=' '>
                <td className=' p-2 capitalize font-bold text-sm'>username</td>
                <td className=' p-2 capitalize font-bold text-sm'>email</td>
                <td className=' p-2 capitalize font-bold text-sm'>date</td>
                <td className=' p-2 capitalize font-bold text-sm'>role</td>
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
                      src={item?.avatar}
                      alt={item?.username}
                    />{' '}
                    {item?.username}{' '}
                  </td>
                  <td>
                    <span className={`text-sm p-[.2rem] rounded-md  `}>
                      {item?.email}
                    </span>
                  </td>
                  <td className=' text-sm'>
                    {' '}
                    {item?.createdAt?.toString().slice(2, 10)}{' '}
                  </td>
                  <td className=' text-sm'>
                    <button className=' px-3 py-1 bg-blue-500 rounded-md cursor-pointer'>
                      {item?.role}
                    </button>
                  </td>
                  <td className=' text-sm flex gap-2 items-start'>
                    <Link
                      href={`/dashboard/users/${item?._id}`}
                      className=' px-3 py-1 bg-cyan-600 rounded-md cursor-pointer'
                    >
                      viewed
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

export default Users;
