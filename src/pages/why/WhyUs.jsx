const WhyUs = () => {
  return (
    <div className='w-full flex py-12 bg-gray-100'>
      <div className='mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-blue-500 mb-8'>
          Why Join Us
        </h2>
        <p className='text-center text-lg text-gray-700 mb-12'>
          At{' '}
          <span className='font-semibold'>
            Excellent Health Careers Training College
          </span>
          , we understand the importance of quality education in shaping the
          future of healthcare professionals. Here’s why we’re the best choice
          for your healthcare career journey:
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Comprehensive Programs
            </h3>
            <p className='text-gray-700'>
              We offer a wide range of programs tailored to meet the growing
              demands of the healthcare industry. Whether you&apos;re looking to
              start a new career or enhance your current skills, our courses are
              designed to equip you with the knowledge and hands-on experience
              you need to succeed.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Expert Faculty
            </h3>
            <p className='text-gray-700'>
              Our instructors are seasoned professionals with years of
              experience in the healthcare field. They bring real-world insights
              into the classroom, ensuring that you are learning from the best
              in the industry.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              State-of-the-Art Facilities
            </h3>
            <p className='text-gray-700'>
              We believe in learning by doing. Our modern labs and clinical
              simulation centers are equipped with the latest technology to
              provide you with practical, hands-on training that mirrors real
              healthcare settings.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Flexible Learning Options
            </h3>
            <p className='text-gray-700'>
              We offer flexible learning options, including part-time, evening,
              and online courses, allowing you to balance your education with
              other commitments.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Strong Industry Connections
            </h3>
            <p className='text-gray-700'>
              We partner with leading healthcare institutions to provide
              internship opportunities, giving you the chance to gain valuable
              experience and build connections in the field even before you
              graduate.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Career Support
            </h3>
            <p className='text-gray-700'>
              From the moment you enroll to the day you graduate, our career
              services team is here to support you. We offer job placement
              assistance, resume workshops, and interview preparation to help
              you land your dream job in healthcare.
            </p>
          </div>
        </div>
        <div className='text-center mt-12'>
          <button
            className=' rounded-xl px-8 py-2 bg-blue-500 text-white border-none mt-10 
             text-lg font-medium hover:bg-blue-600 cursor-pointer z-[10000]'
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
