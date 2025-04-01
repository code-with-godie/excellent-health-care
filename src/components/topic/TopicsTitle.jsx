import { Link } from "react-scroll";

/* eslint-disable react/prop-types */
const TopicTitle = ({ topics }) => {
  const titles = topics.map((topic) => {
    const { title, id } = topic;

    return { title, id };
  });

  return (
    <ul className=' p-4  w-full list-disc'>
      {titles?.map((item) => (
        <li key={item._id}>
          <Link
            to={item.id}
            smooth={true}
            duration={700}
            offset={-100} // For example, offset for a fixed header
            spy={true}
            activeClass='active'
            className='cursor-pointer hover:text-blue-500'
            key={item.id}
          >
            {item?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopicTitle;
