import {
  ChevronRight,
  Email,
  FacebookRounded,
  Instagram,
  LocationOn,
  Phone,
  X,
} from "@mui/icons-material";
import { programs } from "../../data/programs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='relative bg-blue-950 pt-40'>
      {/* Wave SVG */}
      <div className='custom-shape-divider-top-1743524457'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>

      <div className='flex flex-col'>
        <div className='bg-blue-950 pt-10 pb-10 text-white'>
          <div className='w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
            {/* Contact Info Column */}
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl font-serif font-semibold'>
                Excellent Health Career
              </h1>
              <div className='flex items-center gap-2'>
                <Phone />
                <p className='text-lg'>+1 206-945-0736</p>
              </div>
              <div className='flex items-center gap-2'>
                <Email />
                <p className='text-lg'>lucymuchira4@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <LocationOn />
                <p className='text-lg'>
                  10116 36th Ave Ct SW UNIT 207
                  <br />
                  Lakewood, WA 98499
                </p>
              </div>
              <div className='flex items-center gap-4 mt-2'>
                <a href='#' className='bg-white text-blue-700 p-2 rounded-full'>
                  <FacebookRounded fontSize='medium' />
                </a>
                <a href='#' className='bg-white text-black p-2 rounded-full'>
                  <X fontSize='medium' />
                </a>
                <a href='#' className='bg-white text-pink-500 p-2 rounded-full'>
                  <Instagram fontSize='medium' />
                </a>
              </div>
              {/* <div className='flex mt-4'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='bg-white text-black p-3 rounded-l-lg flex-grow outline-none'
                />
                <button className='bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition'>
                  Subscribe
                </button>
              </div> */}
            </div>

            {/* Programs Column */}
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl font-serif font-semibold'>
                Our Programs
              </h2>
              <div className='grid grid-cols-1 gap-3'>
                {programs.slice(0, 5).map((program) => (
                  <Link
                    key={program.id}
                    to={`/programs/${program.id}`}
                    className='flex items-center gap-1 hover:text-blue-300 transition'
                  >
                    <ChevronRight fontSize='small' />
                    <span>{program.title}</span>
                  </Link>
                ))}
              </div>
              {programs.length > 5 && (
                <Link
                  to='/programs'
                  className='mt-4 bg-white text-blue-500 px-6 py-2 rounded-lg font-medium w-fit hover:bg-gray-100 transition'
                >
                  View All Programs
                </Link>
              )}
            </div>

            {/* Quick Links Column */}
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl font-serif font-semibold'>Quick Links</h2>
              <div className='grid grid-cols-1 gap-3'>
                <Link
                  to='/'
                  className='flex items-center gap-1 hover:text-blue-300 transition'
                >
                  <ChevronRight fontSize='small' />
                  <span>Home</span>
                </Link>
                <Link
                  to='/services'
                  className='flex items-center gap-1 hover:text-blue-300 transition'
                >
                  <ChevronRight fontSize='small' />
                  <span>Our Services</span>
                </Link>
                <Link
                  to='/why-us'
                  className='flex items-center gap-1 hover:text-blue-300 transition'
                >
                  <ChevronRight fontSize='small' />
                  <span>Why Choose Us</span>
                </Link>
                <Link
                  to='/about'
                  className='flex items-center gap-1 hover:text-blue-300 transition'
                >
                  <ChevronRight fontSize='small' />
                  <span>About Us</span>
                </Link>
                <Link
                  to='/contact'
                  className='flex items-center gap-1 hover:text-blue-300 transition'
                >
                  <ChevronRight fontSize='small' />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='bg-gray-300 py-6 text-center'>
          <p className='text-gray-700'>
            &copy; 2024-{new Date().getFullYear()} Excellent Health Care
            college. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
