import banner from '../../assets/banner.png';
const Banner = () => {
  return (
    <div className=' w-full flex  py-5 md:py-20 items-center gap-2 '>
      <div className=' w-full  md:w-2/3 flex flex-col px-5 gap-5 '>
        <h1 className=' text-lg sm:text-5xl text-start  font-bold text-gray-700'>
          {' '}
          WELCOME TO EXCELLENT HEALTH CAREER TRAINING COLLEGE
        </h1>
        <p className='hidden sm:block text-lg tracking-wide leading-6'>
          At{' '}
          <span className='text-blue-500 font-bold'>
            Excellent Health Career Training College,
          </span>{' '}
          we are committed to providing high-quality education and hands-on
          training to prepare students for successful careers in the healthcare
          industry.Join us today and take the first step towards a rewarding
          career that makes a difference.
        </p>
        <div className='grid place-content-center '>
          <button
            className=' rounded-lg px-6 py-3 bg-blue-500 text-white border-none mt-5 md:mt-10 
             text-base md:text-lg font-medium hover:bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out'
          >
            Enroll Now
          </button>
        </div>
      </div>
      <div className='w-1/3 flex justify-center items-center relative  p-2  min-w-[170px] '>
        <img
          className=' min-h-[400px]   max-w-full max-h-full z-10 '
          src={banner}
          alt='banner'
        />
      </div>
    </div>
  );
};

export default Banner;
