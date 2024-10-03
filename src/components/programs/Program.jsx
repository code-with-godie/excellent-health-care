import { useEffect, useState } from 'react';
import { useAPPContext } from '../../context/AppContext';
import Enroll from '../enroll/Enroll';
import TopicsBanner from '../topic/TopicsBanner';
import Topics from '../topic/Topics';
import TopicTitle from '../topic/TopicsTitle';
/* eslint-disable react/prop-types */
const Program = ({ title, image, description, normal, _id }) => {
  const { user, setShowModel: loginModel, setToastMesage } = useAPPContext();
  const [showModel, setShowModel] = useState(false);
  const [enrolled, setEnrolled] = useState(user?.enrollments?.includes(_id));

  const handleEnroll = () => {
    if (!user) {
      loginModel(true);
      return;
    }
    setShowModel(true);
  };

  useEffect(() => {
    setEnrolled(user?.enrollments?.includes(_id));
  }, [user, _id]);

  return (
    <section>
      <article className=' p-4 bg-white w-full flex justify-center'>
        <div
          className={`flex w-full gap-4 flex-col items-center md:flex-row ${
            normal && ' md:flex-row-reverse'
          }`}
        >
          <div className='flex-1 my-shadow grid place-content-center'>
            <img
              src={image}
              className=' max-w-full  max-h-[400px] object-cover'
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
                  className=' text-black/90 font-thin'
                  key={index}
                >
                  {' '}
                  {item}{' '}
                </p>
              ))}
            </div>
            <TopicTitle careerID={_id} />
            {enrolled ? (
              <button
                onClick={() =>
                  setToastMesage('already enrolled in this program')
                }
                className=' p-2 rounded-lg bg-green-500 hover:bg-green-600  transition-colors self-start text-white cursor-pointer px-6 text-lg w-3/5'
              >
                Enrolled
              </button>
            ) : (
              <button
                className=' p-2 rounded-lg bg-blue-500 hover:bg-blue-600  transition-colors self-start text-white cursor-pointer px-6 text-lg w-3/5'
                onClick={handleEnroll}
              >
                Enroll now
              </button>
            )}
          </div>
        </div>
        {showModel && (
          <Enroll
            showModel={setShowModel}
            title={title}
            careerID={_id}
          />
        )}
      </article>
      <article>
        <TopicsBanner />
        <Topics careerID={_id} />
      </article>
    </section>
  );
};

export default Program;
