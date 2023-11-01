import Image from "next/image";
import austronaut from "@/public/images/austronaut.svg";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const historyItems = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: 1000 },
};

const Mission = () => {
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
    <div
      ref={ref}
      id="mission"
      className="w-full bg-slate-900 p-10 sm:p-14 lg:pl-20 mt-24 md:mt-32 rounded-md overflow-hidden relative"
    >
      <motion.div
        animate={controls}
        initial="hidden"
        variants={historyItems}
        className="bg-slate-900 lg:bg-slate-900 relative rounded-xl box-border overflow-hidden h-auto lg:h-[300px]"
      >
        <div className="h-full flex flex-col lg:flex-row gap-10 sm:gap-0">
          <div className="w-full lg:w-1/2 p-0 sm:p-10 order-2 lg:order-1 flex flex-col justify-center gap-4">
            <h1 className="text-4xl md:text-4xl font-bold text-green-400 uppercase text-left">
              Our mission
            </h1>
            <p className="text-xl font-thin text-gray-400 leading-7 text-left">
              We&apos;ve set a new purpose and ambition – to reimagine energy
              for people and planet and to become a net zero company by 2050, or
              sooner, and help the world get to net zero.
            </p>
          </div>
          <div className="h-[250px] lg:h-[300px] w-full lg:w-1/2 order-1 lg:order-2 flex">
            <div className="w-full relative overflow-hidden flex justify-start items-center">
              <Image
                src={austronaut}
                fill
                alt="austronaut"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
