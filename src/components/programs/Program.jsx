import TopicsBanner from "../topic/TopicsBanner";
import Topics from "../topic/Topics";
import TopicTitle from "../topic/TopicsTitle";
/* eslint-disable react/prop-types */
const Program = ({ title, image, description, topics, index }) => {
  console.log("program", index, index % 2);

  return (
    <section>
      <article className=' p-4 w-full flex justify-center'>
        <div className={`flex w-full gap-4 flex-col items-center md:flex-row`}>
          <div className='flex-1 grid place-content-center'>
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
                <p className=' text-black/90 font-thin' key={index}>
                  {" "}
                  {item}{" "}
                </p>
              ))}
            </div>
            <TopicTitle topics={topics} />
          </div>
        </div>
      </article>
      <article>
        <TopicsBanner />
        <Topics topics={topics} />
      </article>
    </section>
  );
};

export default Program;
