import React from "react";
import { services } from "../../data/services";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

const Services = () => {
  return (
    <div className='bg-white py-12 flex flex-col  mt-6'>
      {/* Header Section */}
      <div className='max-w-6xl mx-auto px-6 shadow-xl py-4 rounded-lg'>
        <div className='flex items-center relative justify-center mb-4'>
          <div className='bg-blue-500 rounded-xl h-[2px] w-full absolute -z-0' />
          <h2 className='text-3xl font-bold text-center text-blue-500 w-auto bg-white z-10 px-6'>
            Our Services
          </h2>
        </div>
        <p className='py-4'>
          At
          <span className='text-blue-500 font-semibold px-2'>
            Excellent Health Career Training College
          </span>
          , we are committed to providing high-quality, compassionate care
          tailored to the unique needs of our clients. Our professional
          caregivers and healthcare specialists ensure that individuals receive
          the best support to enhance their well-being and quality of life. We
          offer 24 hours high quality care services at affordable rates to our
          clients. We provide immediate responds to all enquiries. We offer:
        </p>
      </div>

      {/* Services Grid */}
      <div className=' bg-gray-100 relative'>
        <div className='custom-shape-divider-top-1743525238'>
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

        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24'>
          {services.map((service, index) => (
            <div
              key={index}
              className='shadow-2xl p-4 flex flex-col gap-4 items-center rounded-t-full rounded-b-full cursor-pointer group hover:bg-blue-500 transition-colors duration-200'
            >
              <div className='pt-4'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='rounded-full shadow-2xl object-cover w-72 h-72 object-center'
                />
              </div>
              <h1 className='font-semibold text-xl text-blue-500 group-hover:text-white transition-colors duration-200'>
                {service.title}
              </h1>
              <p className='mb-8 px-8 group-hover:text-white transition-colors duration-200'>
                {service?.description}
              </p>
              <button className='p-4 bg-white rounded-full shadow-lg flex justify-center items-center border-2 border-blue-500'>
                <FaArrowRight color='#397FF0' />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className=' bg-gradient-to-b from-gray-100 to-transparent h-10'></div>

      {/* Speciality Care Section with Wave */}
      <div className='relative  bg-[#e0e0ca]'>
        {/* Wave Divider */}
        <div className='custom-shape-divider-top-1743525238'>
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

        {/* Content */}
        <div className='max-w-6xl mx-auto px-6 py-8  mt-24'>
          <h1 className='text-lg text-blue-500 mb-6'>
            Our speciality care extends to individuals with various challenges
            like:
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            {[
              "mental health illness",
              "cancer",
              "dementia",
              "heart disease",
              "parkinson's",
              "stroke",
              "terminal illness",
            ].map((item, index) => (
              <div key={index} className='flex items-center gap-2'>
                <FiChevronsRight color='#397FF0' size={30} />
                <p className='capitalize'>{item}</p>
              </div>
            ))}
          </div>

          <h1 className='text-lg text-blue-500 mb-6'>
            Additionally we provide services such as:
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              "live-in services",
              "long-term care facilities",
              "short-term care facilities",
              "hourly services",
              "comfort measures",
              "ADL's assistance and all other medical requirements",
            ].map((item, index) => (
              <div key={index} className='flex items-center gap-2'>
                <FiChevronsRight color='#397FF0' size={30} />
                <p className='capitalize'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=' bg-gradient-to-b from-[#e0e0ca] to-transparent h-5'></div>
    </div>
  );
};

export default Services;
