import Program from './Program';
import { useFetch } from '../../api/useFetch';
import { useEffect, useState } from 'react';
import ProgramSkeleton from '../skeleton/ProgramSkeleton';
const Programs = () => {
  const { loading, data, error } = useFetch('/programs');
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    if (data) {
      setPrograms(data?.programs);
    }
  }, [data]);
  return (
    <section id='career'>
      <article
        id='careers'
        className=' flex flex-col gap-4'
      >
        <h1 className=' text-center capitalize text-4xl  text-blue-500 font-semibold font-serif md:text-6xl'>
          careers
        </h1>
        {loading ? (
          <ProgramSkeleton />
        ) : error ? (
          <p>could not load careers</p>
        ) : (
          <div className='flex flex-col gap-2'>
            {programs.map(item => (
              <Program
                key={item._id}
                {...item}
              />
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default Programs;
