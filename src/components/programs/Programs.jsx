import { programs } from '../../data/programs';
import Program from './Program';

const Programs = () => {
  return (
    <section
      id='careers'
      className=' flex flex-col gap-4'
    >
      <h1 className=' text-center capitalize text-4xl  text-blue-500 font-semibold font-serif md:text-6xl'>
        careers
      </h1>
      <div className='flex flex-col gap-2'>
        {programs.map((item, index) => (
          <Program
            key={item.id}
            {...item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;
