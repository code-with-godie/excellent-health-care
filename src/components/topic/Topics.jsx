/* eslint-disable react/prop-types */
import Topic from "./Topic";
// eslint-disable-next-line react/prop-types
const Topics = ({ topics }) => {
  return (
    <div className='flex flex-col gap-2'>
      {topics.map((item, index) => (
        <Topic key={item._id} {...item} index={index} />
      ))}
    </div>
  );
};

export default Topics;
