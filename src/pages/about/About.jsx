import about from '../../assets/about.png';
const About = () => {
  return (
    <div className='bg-white py-12'>
      <div className='max-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-blue-500 mb-8'>
          About Us
        </h2>
        <p className='text-center text-lg text-gray-700 mb-12'>
          At{' '}
          <span className='font-semibold'>
            Excellent Health Careers Training College
          </span>
          , we are passionate about shaping the future of healthcare by
          providing students with the highest quality education and hands-on
          training. Our commitment to excellence drives everything we do, from
          our state-of-the-art facilities to our experienced faculty and
          comprehensive programs.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-10 mb-12'>
          <div className='w-full md:w-1/2'>
            <img
              src={about}
              alt='About Us'
              className='w-full sm:h-[50vh] md:h-screen object-contain max-w-md mx-auto md:max-w-full '
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Our Mission
            </h3>
            <p className='text-gray-700 mb-4'>
              Our mission is to empower the next generation of healthcare
              professionals by providing them with the knowledge, skills, and
              confidence to make a positive impact in the healthcare industry.
              We strive to cultivate a learning environment that fosters
              personal growth, academic excellence, and career success.
            </p>
            <h3 className='text-2xl font-semibold text-blue-500 mb-4'>
              Our Vision
            </h3>
            <p className='text-gray-700'>
              We envision a future where every graduate from{' '}
              <span className='font-semibold'>
                Excellent Health Careers Training College
              </span>{' '}
              is a leader in their field, contributing to the betterment of
              patient care and the healthcare system as a whole.
            </p>
          </div>
        </div>
        <div className='bg-gray-100 p-8 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold text-center text-blue-500 mb-6'>
            Our Core Values
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <h4 className='text-xl font-semibold text-gray-800 mb-4'>
                Excellence
              </h4>
              <p className='text-gray-700'>
                We are dedicated to maintaining the highest standards in
                education and healthcare training.
              </p>
            </div>

            <div className='text-center'>
              <h4 className='text-xl font-semibold text-gray-800 mb-4'>
                Integrity
              </h4>
              <p className='text-gray-700'>
                We believe in fostering trust and transparency in all of our
                interactions and practices.
              </p>
            </div>

            <div className='text-center'>
              <h4 className='text-xl font-semibold text-gray-800 mb-4'>
                Innovation
              </h4>
              <p className='text-gray-700'>
                We embrace new technologies and methodologies to ensure our
                students are ready for the future of healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
