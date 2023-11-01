import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const storyItems = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const StoryItem = ({ year, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={storyItems}
      className="border-l-2 box-border border-slate-300 border-dashed relative pl-7 pr-0 sm:pr-10 pb-16 rounded-sm min-h-[250px]"
    >
      <div
        className={`w-6 h-6 ${
          title === "Transformation" ? "bg-white" : "bg-green-400"
        } absolute -left-3 rounded-full ring-4 ring-white`}
      >
        {title === "Transformation" ? (
          <div className="bg-red-900">
            <Image fill={true} alt="Ongoing" src="/images/time.png" />
          </div>
        ) : null}
      </div>
      <h4 className="font-semibold text-green-400 mb-3">{year}</h4>
      <h2 className="text-lg sm:text-xl font-semibold mb-3">{title}</h2>
      <p className="text-justify text-gray-500 text-lg">{description}</p>
    </motion.div>
  );
};

export default StoryItem;
