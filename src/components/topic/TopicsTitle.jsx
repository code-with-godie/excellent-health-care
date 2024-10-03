import { useEffect, useState } from 'react';
import { useFetch } from '../../api/useFetch';
import { Skeleton } from '@mui/material';
import { Link } from 'react-scroll';

/* eslint-disable react/prop-types */
const TopicTitle = ({ careerID }) => {
  const { loading, error, data } = useFetch(`/topics/${careerID}`);
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    if (data) {
      setTopic(data?.topics);
    }
  }, [data]);

  if (loading)
    return (
      <Skeleton
        variant='rounded'
        height={200}
      />
    );
  if (error) return null;
  return (
    <ul className=' p-4  w-full list-disc'>
      {topics?.map(item => (
        <li key={item._id}>
          <Link
            to={item._id}
            smooth={true}
            duration={700}
            offset={-100} // For example, offset for a fixed header
            spy={true}
            activeClass='active'
            className='cursor-pointer hover:text-blue-500'
            key={item._id}
          >
            {' '}
            {item?.title}{' '}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopicTitle;
