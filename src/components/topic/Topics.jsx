import { useEffect, useState } from 'react';
import { useFetch } from '../../api/useFetch';
import Topic from './Topic';
import ProgramSkeleton from '../skeleton/ProgramSkeleton';
// eslint-disable-next-line react/prop-types
const Topics = ({ careerID }) => {
  const { loading, error, data } = useFetch(`/topics/${careerID}`);
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    if (data) {
      setTopic(data?.topics);
    }
  }, [data]);

  if (loading) return <ProgramSkeleton />;
  if (error) return <p>{error}</p>;
  return (
    <div className='flex flex-col gap-2'>
      {topics.map(item => (
        <Topic
          key={item._id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Topics;
