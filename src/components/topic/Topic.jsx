/* eslint-disable react/prop-types */
const Topic = ({ title, image, description, normal, _id }) => {
  return (
    <div
      className=' p-4 bg-white w-full flex justify-center'
      id={_id}
    >
      <div
        className={`flex w-full gap-4 flex-col items-center md:flex-row ${
          normal && ' md:flex-row-reverse'
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
          <h1 className=' text-2xl md:w-4/5 text-start font-bold text-blue-500  self-start mb-4'>
            {title}
          </h1>
          <div className='flex flex-col gap-4 p-2'>
            {description?.map((item, index) => (
              <p
                className=' text-black/90 font-thin'
                key={index}
              >
                {' '}
                {item}{' '}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
