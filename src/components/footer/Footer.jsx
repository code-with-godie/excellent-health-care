import {
  ChevronRight,
  Email,
  FacebookRounded,
  Instagram,
  LocationOn,
  Phone,
  X,
} from '@mui/icons-material';
import { programs } from '../../data/programs';

const Footer = () => {
  return (
    <footer className=' flex flex-col'>
      <div className=' mt-10 bg-blue-950 flex justify-center pb-10 text-white'>
        <div className=' w-full max-w-[1200px]  my-grid2 '>
          <div className='flex flex-col gap-4 '>
            <h1 className=' text-4xl w-2/3 font-serif font-semibold '>
              Excellent health career
            </h1>
            <div className=' flex items-center gap-2 text-lg font-semibold'>
              <Phone />
              <h1 className=' text-lg font-thin'>+1 2069450736</h1>
            </div>
            <div className=' flex items-center gap-2 text-lg font-semibold'>
              <Email />
              <h1 className=' text-lg font-thin'>lucymuchira4@gmail.com</h1>
            </div>
            <div className=' flex items-center gap-2 text-lg font-semibold'>
              <LocationOn />
              <h1 className=' text-lg font-thin'>
                10116 36th Ave Ct SW UNIT 207 Lakewood, WA 98499
              </h1>
            </div>
            <div className=' flex items-center gap-2 text-lg font-semibold text-blue-950 '>
              <div className=' bg-white text-blue-700 p-1 rounded-lg cursor-pointer'>
                <FacebookRounded fontSize='medium' />
              </div>
              <div className=' bg-white text-black p-1 rounded-lg cursor-pointer'>
                <X fontSize='medium' />
              </div>
              <div className=' bg-white  text-pink-500 p-1 rounded-lg cursor-pointer'>
                <Instagram fontSize='medium' />
              </div>
            </div>
            <div className=' flex gap-1 items-center'>
              <form className=' p-2 bg-white flex-1 rounded-l-lg'>
                <input
                  type='text'
                  className=' bg-transparent border-none  outline-none font-serif font-thin text-black flex-1'
                  placeholder='subscribe'
                />
              </form>
              <button className=' bg-blue-500 text-white p-2 px-6 rounded-r-lg'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2 lg:items-center'>
            <h1 className=' text-2xl font-serif font-semibold'>Programs</h1>
            <div className=' flex flex-col gap-4'>
              {programs.map((item, index) => (
                <div
                  key={index}
                  className=' flex items-center gap-1 hover:underline cursor-pointer'
                >
                  <p className=' font-semibold '> {item.title} </p>
                  <ChevronRight />
                </div>
              ))}
            </div>
            {programs?.length > 4 && (
              <button className=' p-2 px-6 min-w-[250px] capitalize font-semibold bg-white text-blue-500 rounded-lg cursor-pointer'>
                all programs
              </button>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2 lg:items-center'>
              <h1 className=' text-2xl font-serif font-semibold '>
                Useful links
              </h1>
              <div className=' flex flex-col gap-4'>
                <div className=' flex items-center gap-1 hover:underline cursor-pointer'>
                  <p className=' font-semibold'>home</p>
                  <ChevronRight />
                </div>
                <div className=' flex items-center gap-1 hover:underline cursor-pointer'>
                  <p className=' font-semibold '>why us</p>
                  <ChevronRight />
                </div>
                <div className=' flex items-center gap-1 hover:underline cursor-pointer'>
                  <p className='font-semibold '>join us</p>
                  <ChevronRight />
                </div>
                <div className=' flex items-center gap-1 hover:underline cursor-pointer'>
                  <p className=' font-semibold '>about us</p>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-gray-300 pb-10  justify-center flex p-2'>
        &copy; All rights reserved.Excellent Health Careers{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
