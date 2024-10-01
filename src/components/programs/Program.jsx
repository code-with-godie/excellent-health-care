/* eslint-disable react/prop-types */
const Program = ({ title, image, description, index }) => {
  return (
    <div className=' p-4 bg-white w-full flex justify-center'>
      <div
        className={`flex w-full gap-4 flex-col items-center md:flex-row ${
          index % 2 !== 0 && ' md:flex-row-reverse'
        }`}
      >
        <div className='flex-1 my-shadow grid place-content-center'>
          <img
            src={image}
            className=' max-w-full  max-h-[400px] object-covrer'
            alt=''
          />
        </div>
        <div className='flex-1 flex flex-col p-2 items-center'>
          <h1 className=' text-4xl md:w-4/5 text-start font-bold text-blue-500  self-start mb-4'>
            {title}
          </h1>
          <div className='flex flex-col gap-4 p-2'>
            {description?.map((item, index) => (
              <p
                className=' text-gray-500 font-thin'
                key={index}
              >
                {' '}
                {item}{' '}
              </p>
            ))}
          </div>
          <button className=' p-2 rounded-lg bg-blue-500 hover:bg-blue-600  transition-colors self-start text-white cursor-pointer px-6 text-lg w-3/5'>
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Program;
