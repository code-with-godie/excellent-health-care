import { Link } from "react-scroll";
import banner from "../../assets/banner.png";
import { FaArrowDown } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=' w-full flex  py-5 md:py-20 items-center gap-2 '>
      <div className=' w-full  md:w-2/3 flex flex-col px-5 gap-5 '>
        <h1 className=' text-lg sm:text-5xl text-start  font-bold text-gray-700'>
          {" "}
          WELCOME TO EXCELLENT HEALTH CAREER TRAINING COLLEGE
        </h1>
        <p className='hidden sm:block text-lg tracking-wide leading-6'>
          At{" "}
          <span className='text-blue-500 font-bold'>
            Excellent Health Career Training College,
          </span>{" "}
          we are committed to providing high-quality education and hands-on
          training to prepare students for successful careers in the healthcare
          industry.Join us today and take the first step towards a rewarding
          career that makes a difference.
        </p>
        <div className='grid place-content-center '>
          <Link
            to='career'
            smooth={true}
            duration={700}
            offset={-100} // For example, offset for a fixed header
            spy={true}
            className=' p-4 shadow-lg rounded-full animate-bounce cursor-pointer'
          >
            <FaArrowDown color='#3B82F6' size={20} />
          </Link>
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
