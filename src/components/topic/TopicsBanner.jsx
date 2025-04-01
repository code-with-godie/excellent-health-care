import { motion } from "framer-motion";
import bg from "../../assets/3.webp";

const TopicsBanner = () => {
  return (
    <div
      style={{
        background: `#0000004e url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
      }}
      className='p-2 font-serif flex flex-col gap-2 h-[500px] justify-center items-center rounded-lg'
    >
      <motion.p
        initial={{ x: -300, y: -300 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 0.75 }}
        className='text-center p-2 text-white text-5xl font-bold'
      >
        What is covered on this career
      </motion.p>
    </div>
  );
};

export default TopicsBanner;
