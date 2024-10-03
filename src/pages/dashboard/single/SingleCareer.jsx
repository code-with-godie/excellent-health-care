import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../../api/useFetch';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { deleteData } from '../../../api/apiCalls';
import { useAPPContext } from '../../../context/AppContext';

const SingleCareer = () => {
  const location = useLocation();
  const [career, setCareer] = useState(null);
  const { token } = useAPPContext();
  const [topics, setTopics] = useState([]);
  const { id } = useParams();
  const { loading, data, error } = useFetch(`/topics/${id}`);
  const navigate = useNavigate();

  const deleteTopic = async id => {
    try {
      await deleteData(`/topics/${id}`, {}, token);

      setTopics(prev => prev.filter(item => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCareer = async id => {
    try {
      await deleteData(`/programs/${id}`, {}, token);
      navigate('/dashboard/careers');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCareer(location.state.career);
  }, [location]);
  useEffect(() => {
    setTopics(data?.topics);
  }, [data]);
  return (
    <div className=' w-full md:h-full flex flex-col md:flex-row gap-2 md:overflow-auto p-2'>
      <div className='md:flex-1 md:overflow-auto flex flex-col gap-2'>
        <h1 className='  text-3xl capitalize '>career details</h1>
        <div className=' flex flex-col gap-2'>
          <img
            src={career?.image}
            alt={career?.title}
          />
          <h1 className=' text-lg'> {career?.title} </h1>
          <ul className=' flex flex-col gap-2 list-disc text-sm'>
            {career?.description?.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
          <div className=' flex items-center gap-2  p-2 justify-between'>
            <button
              onClick={() =>
                navigate(`/dashboard/careers/add/`, {
                  state: { career },
                })
              }
              className=' py-2 px-4 cursor-pointer rounded-lg bg-blue-500 flex items-center gap-2 hover:bg-blue-600'
            >
              <FaEdit /> edit
            </button>
            <button
              onClick={() => deleteCareer(career?._id)}
              className=' py-2 px-4 cursor-pointer rounded-lg bg-red-500 hover:bg-red-600 transition-colors duration-150 flex items-center gap-2'
            >
              <FaTrash /> delete
            </button>
          </div>
        </div>
      </div>
      <div className='md:flex-1 overflow-auto gap-2 flex flex-col'>
        <h1 className=' capitalize text-2xl md:text-end'>
          career topics details
        </h1>
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>could not load topics</p>
        ) : topics?.length === 0 ? (
          <div>
            <p>you have not added any topics yet</p>
          </div>
        ) : (
          topics?.map(item => (
            <div
              className=' flex flex-col md:flex-row  gap-2 '
              key={item._id}
            >
              <div className='md:w-1/3 w-full'>
                <img
                  className='w-full object-contain'
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
              <div className='w-full md:w-2/3 flex flex-col gap-2'>
                <h1> {item.title} </h1>
                <ul className=' flex flex-col gap-2 list-disc text-sm'>
                  {item?.description?.map((item, index) => (
                    <li key={index}> {item} </li>
                  ))}
                </ul>
                <div className=' flex items-center gap-2  p-2 justify-between'>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/careers/add/topic/${item?._id}`, {
                        state: { career, topic: item },
                      })
                    }
                    className=' py-2 px-4 cursor-pointer rounded-lg bg-blue-500 flex items-center gap-2 hover:bg-blue-600'
                  >
                    <FaEdit /> edit
                  </button>
                  <button
                    onClick={() => deleteTopic(item?._id)}
                    className=' py-2 px-4 cursor-pointer rounded-lg bg-red-500 hover:bg-red-600 transition-colors duration-150 flex items-center gap-2'
                  >
                    <FaTrash /> delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SingleCareer;
