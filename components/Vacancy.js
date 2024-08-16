import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";

const vacancyItem = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const Vacancy = ({
  title,
  description,
  salary,
  experience,
  basis,
  weekStart,
  weekEnd,
  hours,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const trimDescription = (description, maxLength = 150) => {
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={vacancyItem}
        className="w-full p-8 sm:p-10 rounded-md  bg-slate-50 flex flex-col md:flex-row justify-between"
      >
        <div className="w-full ">
          <h4 className="text-md font-bold text-slate-700">{title}</h4>
          <h4 className="text-md font-normal text-slate-500 my-2 ">
            {trimDescription(description)}
          </h4>

          <h4 className="text-md font-semibold text-slate-700 mt-5">
            USD {salary} hourly / {hours} hours per week
          </h4>

          <div className="flex flex-wrap gap-2 mt-6">
            <div className="px-4 py-2 whitespace-nowrap bg-slate-100 rounded-md text-sm font-normal text-slate-500">
              {experience}-year experience
            </div>
            <div className="px-4 py-2 whitespace-nowrap bg-slate-100 rounded-md text-sm font-normal text-slate-500">
              {basis}
            </div>
            <div className="px-4 py-2 whitespace-nowrap bg-slate-100 rounded-md text-sm font-normal text-slate-500">
              {weekStart} to {weekEnd}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-end mt-10 md:mt-0">
          <Link
            href={`/vacancies/${title}`}
            className="py-3 px-7 text-slate-900 font-normal bg-green-400 rounded-md w-full md:w-auto"
          >
            Learn more
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Vacancy;
